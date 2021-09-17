"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const configEditor_1 = require("./configEditor");
function activate(context) {
    console.log('Congratulations, your extension "coya" is now active!');
    let disposable = vscode.commands.registerCommand('coya.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from coya 2!');
    });
    let disposable2 = vscode.commands.registerCommand('coya.open', (file) => {
        vscode.window.showInformationMessage('Coya open!');
        (0, configEditor_1.configEditor)(context, file);
    });
    context.subscriptions.push(disposable);
    context.subscriptions.push(disposable2);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map