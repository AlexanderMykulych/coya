import { createTextSpanFromBounds } from 'typescript';
import * as vscode from 'vscode';
import state from './state';

export function onTextChange() {
    vscode.workspace.onDidChangeTextDocument((e: vscode.TextDocumentChangeEvent) => {
        const sourceFile = state.fileSources.find(x => x.fileName === e.document.fileName);
        if (sourceFile) {
            const text = e.document.getText();
            (sourceFile as any).hasBeenIncrementallyParsed = false;
            const newSourceFile = sourceFile
                .update(text, {
                    span: createTextSpanFromBounds(0, sourceFile.getText().length),
                    newLength: text.length
                });
            state.fileSources[state.fileSources.indexOf(sourceFile)] = newSourceFile;
        }
    });
}
