import { createTextSpanFromBounds } from 'typescript';
import * as vscode from 'vscode';
import { activateLogic } from './activateLogic';
import { openEditor } from './openEditor';
import { startConnection } from './startConnection';
import { startTypescriptAnalizing } from './startTypescriptAnalizing';
import { startViteDevServer } from './startViteDevServer';
import state from './state';

export function activate(context: vscode.ExtensionContext) {
	console.log('coya is now active!');
    state.enabled = true;

    startViteDevServer(context);
    startTypescriptAnalizing(context);
    startConnection();
    let openDisposable = vscode.commands.registerCommand('coya.open', (file: vscode.Uri) => {
        openEditor(context, file);
        activateLogic(context, file);
	});

    context.subscriptions.push(openDisposable);

    vscode.workspace.onDidChangeTextDocument((e: vscode.TextDocumentChangeEvent) => {
        console.log("text change!");
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

export function deactivate() {}



