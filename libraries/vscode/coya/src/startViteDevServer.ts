import { TextDecoder } from 'util';
import { posix } from 'path';
import * as vscode from 'vscode';
import state from './state';

const terminalName = "coya server";

export async function startViteDevServer(context: vscode.ExtensionContext) {
    const folderPath = vscode.workspace.workspaceFolders?.[0].uri.path;
    if (folderPath) {
        // const sampleTextEncoded = await vscode.workspace.fs.readFile(vscode.Uri.file(posix.join(folderPath, "package.json")));
        // const sampleText = new TextDecoder('utf-8').decode(sampleTextEncoded);
        // const doc = await vscode.workspace.openTextDocument({ language: 'plaintext', content: sampleText });
	    // vscode.window.showTextDocument(doc);
        // console.log(sampleTextEncoded?.length);
    }
    const activeTerminal = vscode.window.terminals.find(x => x.name === terminalName);
    if (activeTerminal) {
        activeTerminal.dispose();
    }

    var terminal = vscode.window.createTerminal(terminalName);
    terminal.sendText("npx vite --port=5000", true);
    terminal.show();
    state.terminalActive = true;

    vscode.window.onDidCloseTerminal(term => {
        if (term.name === terminalName) {
            state.terminalActive = false;
        }
    });
}
