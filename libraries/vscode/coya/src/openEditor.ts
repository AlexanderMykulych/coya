import { watch } from '@vue-reactivity/watch';
import path = require('path');
import * as vscode from 'vscode';
import state from './state';

export function openEditor(context: vscode.ExtensionContext, file: vscode.Uri) {
    state.addFile(file);
    var panel = vscode.window.createWebviewPanel(
        "coya",
        `Coya - ${path.basename(file.path)}`,
        vscode.ViewColumn.Beside,
        {
            enableScripts: true
        }
    );
    setTimeout(() => {
        const fileName = path.basename(file.path).replaceAll(".", "_");
        panel.webview.html = getWebviewContent(`http://localhost:5000/file/${fileName}`);
    }, 2000);
}

function getWebviewContent(url: string): string {
    return `
    <head>
      <meta
        http-equiv="Content-Security-Policy"
        content="default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';"
      />
    <head>
    <body>
      <script>
        window.addEventListener('load', () => {
          location.replace(${JSON.stringify(url)})
        })
      </script>
    </body>`;
}