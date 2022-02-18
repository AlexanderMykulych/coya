import type { Change } from 'coya-core';
import { ActionType, makeChange } from 'coya-core';
import { computed, effectScope, markRaw, onScopeDispose, provide, reactive, ref, watch } from 'vue';
import { debouncedWatch } from '@vueuse/core';
import { deepCopy, isNotNullOrUndefined, setValueByPath, whatChanged } from 'coya-util';
import editorComponent from '../components/editorComponent.vue';
import type { EnableEditorParameters, EnabledEditor } from './types';
import { wrapEditorNode } from './wrapEditorNode';
import { useSvgMouse } from './useSvgMouse';
import { useEditorState } from './useCurrentEditorState';
import { getMousePosition } from './getMousePosition';
import { listenHotKeys } from './listenHotKeys';
import { findStartTransform } from './findStartTransform';
import { EditorMode } from '.';

export function enableEditor({ svg, config, id, initialConfig, architecture, workEl, assets }: EnableEditorParameters) {
    const scope = effectScope();
    const editor = scope.run(() => {
        const editor: EnabledEditor = reactive<EnabledEditor>({
            id,
            enable: true,
            wrap: node => markRaw(wrapEditorNode(editor, node)),
            state: {
                pins: {},
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
            component: markRaw(editorComponent),
            showDebugWindow: false,
            zoomState: null,
            history: {
                items: [],
                current: undefined,
            },
            assets,
        });
        listenSvgEvents(editor);
        listenHotKeys(editor);
        enableHistory(editor);
        provide('coya-editor', editor);
        return editor;
    });
    return editor;
}

function listenSvgEvents(editor: EnabledEditor) {
    const { makeChange, getNewUniqBlockName, addNewBlock, isViewMode } = useEditorState(editor);
    watch(() => editor.svg, (svgEl) => {
        if (svgEl) {
            const onMouseClickListener = (_: MouseEvent) => {
                editor.state.selectedNodeIds = undefined;
            };
            const onDblClick = (e: MouseEvent) => {
                if (e.target === svgEl && !isViewMode.value) {
                    const { x, y } = getMousePosition(svgEl, e);
                    addNewBlock({
                        position: {
                            x: x - 150,
                            y: y - 50,
                            w: 300,
                            h: 100,
                        },
                    });
                }
            };
            svgEl.addEventListener('click', onMouseClickListener);

            svgEl.addEventListener('dblclick', onDblClick);

            onScopeDispose(() => {
                svgEl.removeEventListener('click', onMouseClickListener);
                svgEl.removeEventListener('dblclick', onDblClick);
            });
        }
    }, { immediate: true });

    watch(() => editor.workEl, (val) => {
        if (val)
            enableZoom(editor, val);
    }, { immediate: true });
    watch(() => editor.state.arrowState?.end, (val, oldVal) => {
        if (val && !oldVal && editor.state.arrowState && editor.state.arrowState.start) {
            makeChange({
                action: {
                    name: ActionType.Connect,
                    value: {
                        from: editor.state.arrowState.start,
                        to: val,
                        name: getNewUniqBlockName('line_'),
                    },
                },
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
                type: 'changes',
                changes,
            });
            lastItem = deepCopy(val);
        }
    }, {
        debounce: 300,
        deep: true,
    });

    watch(() => editor.history.current, (val, oldVal) => {
        let index = editor.history.items.length - (val === undefined ? 0 : val);
        const isRedo = val === undefined || (oldVal !== undefined && val < oldVal);
        if (isRedo)
            index -= 1;

        if (index >= 0 && index < editor.history.items.length) {
            const { changes } = editor.history.items[index];
            changes.forEach((change) => {
                const appliedVal = isRedo ? change.val : change.oldVal;
                setFromHistory = true;
                setValueByPath(editor.initialConfig, appliedVal, change.fullPath);
                setValueByPath(editor.config, appliedVal, change.fullPath);
            });
        }
    }, {
        flush: 'sync',
    });
}
function enableZoom(editor: EnabledEditor, zoomElement: SVGGraphicsElement) {
    const svg = editor.svg;
    if (!svg)
        return;

    const startTransform = findStartTransform(editor.architecture, svg);
    const translate = reactive({
        x: startTransform.x,
        y: startTransform.y,
    });
    const scale = ref(startTransform.scale);
    const minScale = 0.0001;
    const maxScale = 40;
    const transform = computed(() => !isNaN(translate.x) && !isNaN(translate.y) && !isNaN(scale.value) ? `translate(${translate.x} ${translate.y}) scale(${scale.value})` : '');

    const zoom = (event: WheelEvent) => {
        const { x, y } = getMousePosition(svg, event, true);
        const oldScale = scale.value;
        if (Math.abs(event.wheelDeltaY) > 100 && event.wheelDeltaX === 0) {
            const newScale = oldScale + Math.sign(event.wheelDelta) * (oldScale * 0.1);
            if (newScale <= minScale || newScale >= maxScale)
                return;

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
    watch(() => mouseState.position, (val) => {
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

    svg.onmousewheel = (e) => {
        e.preventDefault();
        zoom(e);
    };
    editor.zoomState = reactive({
        transform,
        translate,
        scale,
    });
    watch(() => transform.value, (val) => {
        zoomElement.setAttribute('transform', val);
    }, {
        immediate: true,
    });
}
