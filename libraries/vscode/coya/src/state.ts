import { reactive } from "@vue/reactivity";
import * as vscode from "vscode";
import { SourceFile } from "typescript";
import { SelectedProperties } from "coya-core";
import path = require('path');

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
    },
    changeFile: (id: string, config: any) => {
        const editor = vscode.window.visibleTextEditors.find(x => path.basename(x.document.uri.path) === id);
        if (editor && editor.document) {
            const document = editor.document;
            if (document) {
                const range = new vscode.Range(0, 0, document.lineCount - 1, document.lineAt(document.lineCount - 1).range.end.character);
                const text = JSON.stringify(config, null, "\t");
                const textEdits: vscode.TextEdit[] = [];
                textEdits.push(
                    vscode.TextEdit.replace(
                        range,
                        text
                    )
                );

                const workEdits = new vscode.WorkspaceEdit();
                workEdits.set(document.uri, textEdits); // give the edits
                vscode.workspace.applyEdit(workEdits)
                    .then(changed => {
                        if (changed) {
                            document.save();
                        }
                    }); // apply the edits
                // editor.edit(editBuilder => editBuilder.replace(range, text));
                
            }
        }
    }
});

export default state;