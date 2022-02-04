import { watch, watchEffect } from 'vue';
import { useMagicKeys, whenever } from '@vueuse/core';
import type { EnabledEditor } from './types';
import { useEditorState } from './useCurrentEditorState';
import { EditorMode } from '.';

export function listenHotKeys(editor: EnabledEditor) {
    const { Delete, Ctrl_Z, shift, Ctrl, C, V, A } = useMagicKeys();
    const { removeBlock, undoChange, redoChange, copy, paste, state, isViewMode } = useEditorState(editor);
    whenever(Delete, () => !isViewMode.value && removeBlock());
    watchEffect(() => {
        if (isViewMode.value)
            return;

        if (Ctrl_Z.value) {
            if (shift.value)
                redoChange();
            else
                undoChange();
        }
        else if (Ctrl.value && C.value) {
            copy();
        }
        else if (Ctrl.value && V.value) {
            paste();
        }
        else if (A.value) {
            state.mode = EditorMode.Arrow;
        }
    });
}
