import * as vscode from 'vscode';
import state from './state';
import { readdirSync } from 'fs';
import { exec } from 'child_process';

const terminalName = "coya server";

export async function startViteDevServer(context: vscode.ExtensionContext) {
    // startProjectViteDevServer();
    startLocalViteDevServer(context);

}

const getDirectories = (source: string) =>
    readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
function startProjectViteDevServer() {
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

function startLocalViteDevServer(context: vscode.ExtensionContext) {
    try {
        const childProcess = exec("pnpm dev", {
            cwd: `${context.extensionPath}/vite-proj/`
        });

        childProcess.stdout!.on('data', (data) => {
            console.log('stdout: ' + data.toString());
        });

        childProcess.stderr!.on('data', (data) => {
            console.log('stderr: ' + data.toString());
        });

        childProcess.on('exit', (code) => {
            console.log('child process exited with code ' + code!.toString())
        });
        console.log(childProcess);
    } catch (e) {
        console.error("startLocalViteDevServer error", e);
    }
}