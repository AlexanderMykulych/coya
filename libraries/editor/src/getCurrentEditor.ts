import { inject } from "vue";
import { Editor } from "./types";

export function getCurrentEditor() {
    const editor: Editor = inject<Editor>("coya-editor", {
        enable: false
    });
    return editor;
}

export function getIsCurrectEditorEnabled() {
    return getCurrentEditor().enable;
}