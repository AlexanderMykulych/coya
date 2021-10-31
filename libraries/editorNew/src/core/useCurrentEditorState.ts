import { computed } from "vue";
import { getCurrentEditor } from ".";

export function useCurrentEditorState() {
    const editor = getCurrentEditor();
    if (editor.enable) {
        return {
            isOneNodeSelected: computed(() => !!editor.state.selectedNodeIds?.[0]),
        };
    }
}
