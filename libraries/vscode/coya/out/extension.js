"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const typescript_1 = require("typescript");
const vscode = require("vscode");
const activateLogic_1 = require("./activateLogic");
const openEditor_1 = require("./openEditor");
const startConnection_1 = require("./startConnection");
const startTypescriptAnalizing_1 = require("./startTypescriptAnalizing");
const startViteDevServer_1 = require("./startViteDevServer");
const state_1 = require("./state");
function activate(context) {
    console.log('coya is now active!');
    state_1.default.enabled = true;
    (0, startViteDevServer_1.startViteDevServer)(context);
    (0, startTypescriptAnalizing_1.startTypescriptAnalizing)(context);
    (0, startConnection_1.startConnection)();
    let openDisposable = vscode.commands.registerCommand('coya.open', (file) => {
        (0, openEditor_1.openEditor)(context, file);
        (0, activateLogic_1.activateLogic)(context, file);
    });
    context.subscriptions.push(openDisposable);
    vscode.workspace.onDidChangeTextDocument((e) => {
        console.log("text change!");
        const sourceFile = state_1.default.fileSources.find(x => x.fileName === e.document.fileName);
        if (sourceFile) {
            const text = e.document.getText();
            sourceFile.hasBeenIncrementallyParsed = false;
            const newSourceFile = sourceFile
                .update(text, {
                span: (0, typescript_1.createTextSpanFromBounds)(0, sourceFile.getText().length),
                newLength: text.length
            });
            state_1.default.fileSources[state_1.default.fileSources.indexOf(sourceFile)] = newSourceFile;
        }
    });
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map