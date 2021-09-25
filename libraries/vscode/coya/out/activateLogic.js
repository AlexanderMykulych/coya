"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateLogic = void 0;
const watch_1 = require("@vue-reactivity/watch");
const reactivity_1 = require("@vue/reactivity");
const vscode = require("vscode");
const state_1 = require("./state");
const getTokensAtPosition_1 = require("./tsutil/getTokensAtPosition");
const getNodeText_1 = require("./getNodeText");
const createViteFileSymlink_1 = require("./createViteFileSymlink");
function activateLogic(context, file) {
    (0, createViteFileSymlink_1.createViteFileSymlink)(context, file);
    (0, watch_1.watch)(() => state_1.default.connectedCount, val => {
        vscode.window.showInformationMessage(`Connected: ${val}`);
    });
    const fileSource = (0, reactivity_1.computed)(() => state_1.default.fileSources.find(x => x.fileName === file.path));
    vscode.window.onDidChangeTextEditorSelection(e => {
        const sourceFile = fileSource.value;
        if (e.textEditor.document.fileName === file.path && sourceFile) {
            const position = e.textEditor.document.offsetAt(e.selections[0].start);
            const nodes = (0, getTokensAtPosition_1.getTokensAtPosition)(sourceFile, position);
            state_1.default.selectedProperties = {
                properties: propsArrayToConfigObject(nodes, sourceFile),
                file: file.path
            };
        }
    });
}
exports.activateLogic = activateLogic;
function propsArrayToConfigObject(nodes, sourceFile) {
    return nodes.map(x => ({
        name: (0, getNodeText_1.getNodeText)(x.node, sourceFile)
            .replaceAll("\"", "")
            .replaceAll("'", ""),
        index: x.index
    }));
}
//# sourceMappingURL=activateLogic.js.map