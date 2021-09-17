import path = require('path');
import * as vscode from 'vscode';
import { startConnection } from './startConnection';

export function openEditor(context: vscode.ExtensionContext, file: vscode.Uri) {
    var panel = vscode.window.createWebviewPanel(
        "coya",
        `Coya - ${path.basename(file.path)}`,
        vscode.ViewColumn.Beside,
        {
            enableScripts: true
        }
    );
    setTimeout(() => {
        panel.webview.html = getWebviewContent("http://localhost:5000");
        startConnection();
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