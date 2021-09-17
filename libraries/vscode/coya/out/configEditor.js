"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openEditor = void 0;
const path = require("path");
const vscode = require("vscode");
const startConnection_1 = require("./startConnection");
function openEditor(context, file) {
    var panel = vscode.window.createWebviewPanel("coya", `Coya - ${path.basename(file.path)}`, vscode.ViewColumn.Beside, {
        enableScripts: true
    });
    setTimeout(() => {
        panel.webview.html = getWebviewContent("http://localhost:5000");
        (0, startConnection_1.startConnection)();
    }, 2000);
}
exports.openEditor = openEditor;
function getWebviewContent(url) {
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
//# sourceMappingURL=configEditor.js.map