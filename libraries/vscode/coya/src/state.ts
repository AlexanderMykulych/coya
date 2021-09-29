import { reactive } from "@vue/reactivity";
import * as vscode from "vscode";
import { SourceFile } from "typescript";
import { SelectedProperties } from "coya-core";

const state = reactive({
    enabled: false,
    terminalActive: false,
    connectedCount: 0,
    selectedProperties: {} as SelectedProperties,
    files: [] as {path: string, document: vscode.TextDocument, changes?: readonly vscode.TextDocumentContentChangeEvent[]}[],
    fileSources: [] as SourceFile[],
    addFile: (file: vscode.Uri) => {
        const document = vscode.workspace.textDocuments.find(x => x.uri.path === file.path);
        if (!state.files.some(x => x.path === file.path) && document) {
            state.files.push({
                path: file.path,
                document
            });
        }
    }
});

export default state;