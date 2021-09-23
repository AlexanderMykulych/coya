"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNodeText = void 0;
const ts = require("typescript");
function getNodeText(node, sourceFile) {
    if (ts.isPropertyAssignment(node)) {
        return node.name.getText(sourceFile);
    }
    if (ts.isLiteralExpression(node)) {
        return node.getText(sourceFile);
    }
    return "";
}
exports.getNodeText = getNodeText;
//# sourceMappingURL=getNodeText.js.map