import * as vscode from 'vscode';
import { openEditor } from './openEditor';
import { startViteDevServer } from './startViteDevServer';
import state from './state';

export function activate(context: vscode.ExtensionContext) {
	console.log('coya is now active!');
    state.enabled = true;

    startViteDevServer(context);

	let openDisposable = vscode.commands.registerCommand('coya.open', (file: vscode.Uri) => {
        openEditor(context, file);
	});

	context.subscriptions.push(openDisposable);
}

export function deactivate() {}

