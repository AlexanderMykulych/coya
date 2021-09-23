"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokensAtPosition = void 0;
const typescript_1 = require("typescript");
function getTokensAtPosition(sourceFile, position) {
    const nodes = [];
    const getTokenAtPositionWorker = (sourceFile, position) => {
        let current = sourceFile;
        let index = 0;
        outer: while (true) {
            const isArray = (0, typescript_1.isArrayLiteralExpression)(current);
            const curNodes = (0, typescript_1.isArrayLiteralExpression)(current) ? current.elements : current.getChildren(sourceFile);
            for (var _i = 0, _a = curNodes; _i < _a.length; _i++) {
                if (isArray) {
                    index = _i;
                }
                var child = _a[_i];
                var start = child.getFullStart();
                if (start > position) {
                    break;
                }
                var end = child.getEnd();
                if (position < end || (position === end && child.kind === typescript_1.SyntaxKind.EndOfFileToken)) {
                    current = child;
                    if ((0, typescript_1.isPropertyAssignment)(child)) {
                        nodes.push({
                            node: child,
                            index
                        });
                    }
                    continue outer;
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