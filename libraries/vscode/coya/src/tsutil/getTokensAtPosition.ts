import { isArrayLiteralExpression, Node, SourceFile, SyntaxKind } from "typescript";

export function getTokensAtPosition(sourceFile: SourceFile, position: number) {
    const nodes: Node[] = [];
    
    const pushNode = (node: Node) => {
        if (node.kind === SyntaxKind.ObjectLiteralExpression
            || node.kind === SyntaxKind.PropertyAssignment
            || node.kind === SyntaxKind.ArrayLiteralExpression) {
            nodes.push(node);
        }
    };
    const getTokenAtPositionWorker = (sourceFile: SourceFile, position: number) => {
        let current: Node = sourceFile;
        pushNode(current);
        outer: while (true) {
            const curNodes = isArrayLiteralExpression(current) ? current.elements : current.getChildren(sourceFile);
            for (var _i = 0, _a = curNodes; _i < _a.length; _i++) {
                var child = _a[_i];
                var start = child.getFullStart();
                if (start > position) {
                    break;
                }
                var end = child.getEnd();

                if (position < end || (position === end && child.kind === SyntaxKind.EndOfFileToken)) {
                    current = child;
                    pushNode(current);
                    continue outer;
                }
                if (current.kind === SyntaxKind.ArrayLiteralExpression) {
                    pushNode(child);
                }
            }
            return current;
        }
    };
    getTokenAtPositionWorker(sourceFile, position);
    return nodes;
}
