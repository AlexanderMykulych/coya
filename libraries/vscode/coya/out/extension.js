"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const openEditor_1 = require("./openEditor");
const startViteDevServer_1 = require("./startViteDevServer");
const state_1 = require("./state");
function activate(context) {
    console.log('coya is now active!');
    state_1.default.enabled = true;
    (0, startViteDevServer_1.startViteDevServer)(context);
    let openDisposable = vscode.commands.registerCommand('coya.open', (file) => {
        (0, openEditor_1.openEditor)(context, file);
    });
    context.subscriptions.push(openDisposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map