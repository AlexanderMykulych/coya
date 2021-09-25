"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onTextChange = void 0;
const typescript_1 = require("typescript");
const vscode = require("vscode");
const state_1 = require("./state");
function onTextChange() {
    vscode.workspace.onDidChangeTextDocument((e) => {
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
exports.onTextChange = onTextChange;
//# sourceMappingURL=onTextChange.js.map