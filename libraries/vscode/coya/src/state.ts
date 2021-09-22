import { reactive } from "@vue/reactivity";
import * as vscode from "vscode";
import { SourceFile } from "typescript";
import { SelectedProperties } from "@coya/core";

const state = reactive({
    enabled: false,
    terminalActive: false,
    connectedCount: 0,
    selectedProperties: {} as SelectedProperties,
    files: [] as string[],
    fileSources: [] as SourceFile[],
    addFile: (file: vscode.Uri) => {
        if (!state.files.some(x => x === file.path)) {
            state.files.push(file.path);
        }
    }
});

export default state;