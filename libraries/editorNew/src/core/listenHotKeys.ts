import { watch, watchEffect } from "vue";
import { EnabledEditor } from "./types";
import { useEditorState } from "./useCurrentEditorState";
import { useMagicKeys, whenever } from "@vueuse/core";
import { EditorMode } from ".";


export function listenHotKeys(editor: EnabledEditor) {
    const { Delete, Ctrl_Z, shift, Ctrl, C, V, A } = useMagicKeys();
    const { removeBlock, undoChange, redoChange, copy, paste, state } = useEditorState(editor);
    whenever(Delete, () => removeBlock());
    watchEffect(() => {
        if (Ctrl_Z.value) {
            if (shift.value) {
                redoChange();
            } else {
                undoChange();
            }
        } else if (Ctrl.value && C.value) {
            copy();
        } else if (Ctrl.value && V.value) {
            paste();
        } else if (A.value) {
            state.mode = EditorMode.Arrow;
        }
    })
}
