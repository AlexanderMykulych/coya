"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateLogic = void 0;
const watch_1 = require("@vue-reactivity/watch");
const reactivity_1 = require("@vue/reactivity");
const vscode = require("vscode");
const state_1 = require("./state");
const ts = require("typescript");
const getTokensAtPosition_1 = require("./tsutil/getTokensAtPosition");
const core_1 = require("@coya/core");
function activateLogic(context, file) {
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
    const properties = nodes.filter(x => ts.isPropertyAssignment(x))
        .map(x => ts.isPropertyAssignment(x) ? x.name.getText(sourceFile) : null)
        .filter(core_1.isNotNullOrUndefined);
    let config = {
        prop: "",
        child: null
    };
    const root = config;
    properties
        .map((prop, index) => ({ prop, index }))
        .forEach(({ prop, index }) => {
        config.prop = prop
            .replaceAll("\"", "")
            .replaceAll("'", "");
        if (index < properties.length - 1) {
            config.child = {};
            config = config.child;
        }
    });
    return root;
}
//# sourceMappingURL=activateLogic.js.map