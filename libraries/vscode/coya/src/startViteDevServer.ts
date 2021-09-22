import { TextDecoder } from 'util';
import { posix } from 'path';
import * as vscode from 'vscode';
import state from './state';

const terminalName = "coya server";

export async function startViteDevServer(context: vscode.ExtensionContext) {
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
