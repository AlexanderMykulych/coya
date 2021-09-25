import * as vscode from 'vscode';
import { activateLogic } from './activateLogic';
import { onTextChange } from './onTextChange';
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

    onTextChange();
}

export function deactivate() {}



