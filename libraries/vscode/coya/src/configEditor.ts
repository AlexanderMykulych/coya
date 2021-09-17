import * as path from 'path';
import * as vscode from 'vscode';

export function configEditor(context: vscode.ExtensionContext, file: vscode.Uri) {
    var panel = vscode.window.createWebviewPanel(
        "coya",
        `Coya - ${file.authority}`,
        vscode.ViewColumn.Two,
        {
            enableScripts: true
        }
    );

    var terminal = vscode.window.createTerminal("dev");
    terminal.sendText("npx vite --port=5000", true);
    terminal.show();

    setTimeout(() => panel.webview.html = getWebviewContent("http://localhost:5000"), 2000);
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
            debugger;
          location.replace(${JSON.stringify(url)})
        })
      </script>
    </body>`;
}
