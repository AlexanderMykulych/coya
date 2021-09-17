import * as vscode from 'vscode';
import { configEditor } from './configEditor';

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "coya" is now active!');

	let disposable = vscode.commands.registerCommand('coya.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from coya 2!');
	});
	let disposable2 = vscode.commands.registerCommand('coya.open', (file: vscode.Uri) => {
        vscode.window.showInformationMessage('Coya open!');
        configEditor(context, file);
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
}

export function deactivate() {}
