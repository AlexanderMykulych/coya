import { ActionType, Change, makeChange } from "coya-core";
import { effectScope, onScopeDispose, provide, reactive, ref, watch, computed } from "vue";
import { EnabledEditor, EnableEditorParameters } from "./types";
import { wrapEditorNode } from "./wrapEditorNode";
import editorComponent from "../components/editorComponent.vue";
import { useSvgMouse } from "./useSvgMouse";
import { useEditorState } from "./useCurrentEditorState";
import { getMousePosition } from "./getMousePosition";

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
        });
        listenSvgEvents(editor);
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
    const { makeChange } = useEditorState(editor);
    watch(() => editor.state.arrowState?.end, (val, oldVal) => {
        if (val && !oldVal && editor.state.arrowState && editor.state.arrowState.start) {
            makeChange({
                action: {
                    name: ActionType.Connect,
                    value: {
                        from: editor.state.arrowState.start,
                        to: val,
                    }
                }
            });
            editor.state.arrowState = null;
        }
    });
    
}
function enableZoom(editor: EnabledEditor, zoomElement: SVGGraphicsElement) {
    const svg = editor.svg;
    if (!svg) {
        return;
    }
    var scrollSensitivity = 0.3;
    const translate = reactive({
        x: 0,
        y: 0
    });
    const scale = ref(1);
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
            translate.x = (translate.x - deltaX) * 1;
            translate.y = (translate.y - deltaY) * 1;
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
    });
}
