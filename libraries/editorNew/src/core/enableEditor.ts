import { Change, makeChange } from "coya-core";
import * as vue from "vue";
// { effectScope, onScopeDispose, provide, reactive, toRefs, watch }
import { getMousePosition } from "./getMousePosition";
import { EditorSvg, EnabledEditor, MouseState, EnableEditorParameters } from "./types";
import { wrapEditorNode } from "./wrapEditorNode";
import testComponent from "../components/test.vue";

export function enableEditor({svg, config, id, initialConfig}: EnableEditorParameters) {
    const scope = vue.effectScope();
    const editor = scope.run(() => {
        const editor: EnabledEditor = vue.reactive<EnabledEditor>({
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
            },
            components: {
                testComponent
            }
        });
        listenSvgEvents(editor);
        vue.provide("coya-editor", editor);
        return editor;
    });
    return editor ? vue.toRefs(editor) : undefined;
}

export function useSvgMouse(svg: EditorSvg) {
    const mouse = vue.reactive<MouseState>({
        position: {
            x: 0,
            y: 0
        },
        pressed: false
    });
    vue.watch(() => svg.value, svgEl => {
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
            vue.onScopeDispose(() => {
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
    vue.watch(() => editor.svg, svgEl => {
        if (svgEl) {
            const onMouseClickListener = (_: MouseEvent) => {
                editor.state.selectedNodeIds = undefined;
            };
            svgEl.addEventListener("click", onMouseClickListener);

            vue.onScopeDispose(() => {
                svgEl.removeEventListener("click", onMouseClickListener);
            });
        }
    }, {immediate: true});
}
