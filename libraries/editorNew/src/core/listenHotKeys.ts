import { watch, watchEffect } from "vue";
import { EnabledEditor } from "./types";
import { useEditorState } from "./useCurrentEditorState";
import { useMagicKeys, whenever } from "@vueuse/core";


export function listenHotKeys(editor: EnabledEditor) {
    const { Delete, Ctrl_Z, shift } = useMagicKeys();
    const { removeBlock, undoChange, redoChange } = useEditorState(editor);
    whenever(Delete, removeBlock);
    watchEffect(() => {
        if (Ctrl_Z.value) {
            if (shift.value) {
                redoChange();
            } else {
                undoChange();
            }
        }
    })
}
