import { Change, makeChange } from "coya-core";
import { effectScope, onScopeDispose, provide, reactive, toRefs, watch } from "vue";
import { getMousePosition } from "./getMousePosition";
import { EditorSvg, EnabledEditor, MouseState, EnableEditorParameters } from "./types";
import { wrapEditorNode } from "./wrapEditorNode";

export function enableEditor({svg, config, id, initialConfig}: EnableEditorParameters) {
    const scope = effectScope();
    const editor = scope.run(() => {
        const editor: EnabledEditor = reactive<EnabledEditor>({
            id,
            enable: true,
            wrap: (node) => wrapEditorNode(editor, node),
            state: {},
            svg: svg as any,
            mouseState: useSvgMouse(svg),
            config: config as any,
            makeChange: (change: Change) => {
                makeChange(config.value, change);
                makeChange(initialConfig.value, change);
            }
        });
        listenSvgEvents(editor);
        provide("coya-editor", editor);
        return editor;
    });
    return editor ? toRefs(editor) : undefined;
}

export function useSvgMouse(svg: EditorSvg) {
    const mouse = reactive<MouseState>({
        position: {
            x: 0,
            y: 0
        },
        pressed: false
    });
    watch(() => svg.value, svgEl => {
        if (svgEl) {
            const onMouseMoveListener = (event: MouseEvent) => {
                const { x, y } = getMousePosition(svgEl, event)
                mouse.position.x = x;
                mouse.position.y = y;
            };
            const onMouseDownListener = (_: MouseEvent) => {
                mouse.pressed = true;
            };
            const onMouseUpListener = (_: MouseEvent) => {
                mouse.pressed = false;
            };

            svgEl.addEventListener("mousemove", onMouseMoveListener);
            svgEl.addEventListener("mousedown", onMouseDownListener);
            svgEl.addEventListener("mouseup", onMouseUpListener);
            svgEl.addEventListener("mouseleave", onMouseUpListener);
            onScopeDispose(() => {
                svgEl.removeEventListener("mousemove", onMouseMoveListener);
                svgEl.removeEventListener("mousedown", onMouseDownListener);
                svgEl.removeEventListener("mouseup", onMouseUpListener);
                svgEl.removeEventListener("mouseleave", onMouseUpListener);
            });
        }
    }, { immediate: true });
    return mouse;
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
    }, {immediate: true});
}
