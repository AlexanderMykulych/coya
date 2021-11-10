import { Change, makeChange } from "coya-core";
import { effectScope, onScopeDispose, provide, reactive, toRefs, watch } from "vue";
import { EnabledEditor, EnableEditorParameters } from "./types";
import { wrapEditorNode } from "./wrapEditorNode";
import editorComponent from "../components/editorComponent.vue";
import { useSvgMouse } from "./useSvgMouse";

export function enableEditor({svg, config, id, initialConfig, architecture}: EnableEditorParameters) {
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
            initialConfig: initialConfig as any,
            architecture: architecture as any,
            makeChange: (change: Change) => {
                makeChange(config.value, change);
                makeChange(initialConfig.value, change);
            },
            component: editorComponent
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
    }, {immediate: true});
}
