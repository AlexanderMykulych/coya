import { ActionType, Architecture, Change, makeChange } from "coya-core";
import { effectScope, onScopeDispose, provide, reactive, ref, watch, computed } from "vue";
import { EnabledEditor, EnableEditorParameters } from "./types";
import { wrapEditorNode } from "./wrapEditorNode";
import editorComponent from "../components/editorComponent.vue";
import { useSvgMouse } from "./useSvgMouse";
import { useEditorState } from "./useCurrentEditorState";
import { getMousePosition } from "./getMousePosition";
import { EditorMode } from ".";
import { debouncedWatch, useMagicKeys } from "@vueuse/core";
import { listenHotKeys } from "./listenHotKeys";
import { deepCopy, isNotNullOrUndefined, setValueByPath, whatChanged } from "coya-util";

export function enableEditor({ svg, config, id, initialConfig, architecture, workEl }: EnableEditorParameters) {
    const scope = effectScope();
    const editor = scope.run(() => {
        const editor: EnabledEditor = reactive<EnabledEditor>({
            id,
            enable: true,
            wrap: (node) => wrapEditorNode(editor, node),
            state: {
                pins: {}
            },
            svg: svg as any,
            workEl: (workEl || svg) as any,
            mouseState: useSvgMouse(svg),
            config: config as any,
            initialConfig: initialConfig as any,
            architecture: architecture as any,
            makeChange: (change: Change) => {
                makeChange(config.value, change);
                makeChange(initialConfig.value, change);
            },
            component: editorComponent,
            showDebugWindow: false,
            zoomState: null,
            history: {
                items: [],
                current: undefined,
            },
        });
        listenSvgEvents(editor);
        listenHotKeys(editor);
        enableHistory(editor);
        provide("coya-editor", editor);
        return editor;
    });
    return editor;
}

function listenSvgEvents(editor: EnabledEditor) {
    watch(() => editor.svg, svgEl => {
        if (svgEl) {
            const onMouseClickListener = (_: MouseEvent) => {
                editor.state.selectedNodeIds = undefined;
            };
            svgEl.addEventListener("click", onMouseClickListener);

            onScopeDispose(() => {
                svgEl.removeEventListener("click", onMouseClickListener);
            });
        }
    }, { immediate: true });

    watch(() => editor.workEl, val => {
        if (val) {
            enableZoom(editor, val);
        }
    }, { immediate: true })
    const { makeChange, getNewUniqBlockName } = useEditorState(editor);
    watch(() => editor.state.arrowState?.end, (val, oldVal) => {
        if (val && !oldVal && editor.state.arrowState && editor.state.arrowState.start) {
            makeChange({
                action: {
                    name: ActionType.Connect,
                    value: {
                        from: editor.state.arrowState.start,
                        to: val,
                        name: getNewUniqBlockName("line_"),
                    },
                }
            });
            editor.state.arrowState = null;
            editor.state.mode = EditorMode.None;
        }
    });

}

export function enableHistory(editor: EnabledEditor) {
    let lastItem = deepCopy(editor.initialConfig);
    let setFromHistory = false;
    debouncedWatch(() => editor.initialConfig, (val) => {
        if (setFromHistory) {
            setFromHistory = false;
            return;
        }
        const changes = whatChanged(lastItem, val);
        if (changes?.length > 0) {
            if (isNotNullOrUndefined(editor.history.current)) {
                editor.history.items = editor
                    .history
                    .items
                    .slice(0, editor.history.items.length - editor.history.current);
                editor.history.current = undefined;
            }
            editor.history.items.push({
                type: "changes",
                changes,
            });
            lastItem = deepCopy(val);
        }
    }, {
        debounce: 300,
        deep: true,
    });

    watch(() => editor.history.current, (val, oldVal) => {
        const index = editor.history.items.length - (val === undefined ? 1 : val);
        if (index >= 0 && index < editor.history.items.length) {
            const { changes } = editor.history.items[index];
            changes.forEach(change => {
                const appliedVal = val === undefined ? change.val : change.oldVal;
                setFromHistory = true;
                setValueByPath(editor.initialConfig, appliedVal, change.fullPath);
                setValueByPath(editor.config, appliedVal, change.fullPath);
            });
        }
    }, {
        flush: "sync",
    });
}
function enableZoom(editor: EnabledEditor, zoomElement: SVGGraphicsElement) {
    const svg = editor.svg;
    if (!svg) {
        return;
    }
    var scrollSensitivity = 0.3;
    const startTransform = findStartTransform(editor.architecture, svg);
    const translate = reactive({
        x: startTransform.x,
        y: startTransform.y
    });
    const scale = ref(startTransform.scale);
    const minScale = 0.01;
    const maxScale = 20;
    const transform = computed(() => `translate(${translate.x} ${translate.y}) scale(${scale.value})`);

    const zoom = (event: WheelEvent) => {
        const { x, y } = getMousePosition(svg, event, true);
        const oldScale = scale.value;
        if (Math.abs(event.wheelDeltaY) > 100 && event.wheelDeltaX === 0) {
            const newScale = oldScale + Math.sign(event.wheelDelta) * scrollSensitivity;
            if (newScale <= minScale || newScale >= maxScale) {
                return;
            }
            scale.value = newScale;
            translate.x = (translate.x - x) * scale.value / oldScale + x;
            translate.y = (translate.y - y) * scale.value / oldScale + y;
        } else {
            const newX = event.deltaX;
            const newY = event.deltaY;
            translate.x = (translate.x - newX) * 1;
            translate.y = (translate.y - newY) * 1;
        }
    };
    const mouseState = editor.mouseState;
    watch(() => mouseState.position, val => {
        if (
            mouseState.pressed
            && mouseState.pressedPosition
            && !editor.state.hover
            && !editor.state.drag) {
            const deltaX = (mouseState.pressedPosition.x - val.x) * scale.value;
            const deltaY = (mouseState.pressedPosition.y - val.y) * scale.value;
            translate.x = translate.x - deltaX;
            translate.y = translate.y - deltaY;
        }
    }, { deep: true });

    svg["onmousewheel"] = (e) => {
        e.preventDefault();
        zoom(e);
    };
    editor.zoomState = reactive({
        transform
    });
    watch(() => transform.value, val => {
        zoomElement.setAttribute("transform", val);
    }, {
        immediate: true,
    });
}

export const findStartTransform = (arch: Architecture, svg: SVGSVGElement) => {
    const svgWidth = svg.width.baseVal.value;
    const svgHeight = svg.height.baseVal.value;
    let minX = Number.MAX_SAFE_INTEGER;
    let minY = Number.MAX_SAFE_INTEGER;
    let maxX = Number.MIN_SAFE_INTEGER;
    let maxY = Number.MIN_SAFE_INTEGER;
    arch.style?.positioning.forEach(({ position }) => {
        if (minX > position.x) {
            minX = position.x;
        }
        if (minY > position.y) {
            minY = position.y;
        }
        if (maxX < position.x + position.w) {
            maxX = position.x + position.w;
        }
        if (maxY < position.y + position.h) {
            maxY = position.y + position.h;
        }
    });
    let width = maxX - minX;
    let height = maxY - minY;
    let deltaX = (width * 0.2) / 2;
    let deltaY = (height * 0.2) / 2;

    if (width >= height) {
        const newHeight = (svgHeight * width) / svgWidth;
        deltaY = Math.abs(newHeight - height) / 2;
    } else {
        const newWidth = (svgWidth * height) / svgHeight;
        deltaX = Math.abs(newWidth - width) / 2;
    }

    minX -= deltaX;
    minY -= deltaY;
    maxX += deltaX;
    maxY += deltaY;
    const scale1 = svgWidth / (maxX - minX);
    const scale2 = svgHeight / (maxY - minY);
    const scale = Math.min(scale1, scale2);
    return {
        x: -minX * scale,
        y: -minY * scale,
        scale,
    };
}