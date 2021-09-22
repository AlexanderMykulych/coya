"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokensAtPosition = void 0;
const typescript_1 = require("typescript");
function getTokensAtPosition(sourceFile, position) {
    const nodes = [];
    const pushNode = (node) => {
        if (node.kind === typescript_1.SyntaxKind.ObjectLiteralExpression
            || node.kind === typescript_1.SyntaxKind.PropertyAssignment
            || node.kind === typescript_1.SyntaxKind.ArrayLiteralExpression) {
            nodes.push(node);
        }
    };
    const getTokenAtPositionWorker = (sourceFile, position) => {
        let current = sourceFile;
        pushNode(current);
        outer: while (true) {
            const curNodes = (0, typescript_1.isArrayLiteralExpression)(current) ? current.elements : current.getChildren(sourceFile);
            for (var _i = 0, _a = curNodes; _i < _a.length; _i++) {
                var child = _a[_i];
                var start = child.getFullStart();
                if (start > position) {
                    break;
                }
                var end = child.getEnd();
                if (position < end || (position === end && child.kind === typescript_1.SyntaxKind.EndOfFileToken)) {
                    current = child;
                    pushNode(current);
                    continue outer;
                }
                if (current.kind === typescript_1.SyntaxKind.ArrayLiteralExpression) {
                    pushNode(child);
                }
            }
            return current;
        }
    };
    getTokenAtPositionWorker(sourceFile, position);
    return nodes;
}
exports.getTokensAtPosition = getTokensAtPosition;
//# sourceMappingURL=getTokensAtPosition.js.map