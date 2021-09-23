import {
    isArrayLiteralExpression, isLiteralExpression,
    isPropertyAssignment, LiteralExpression,
    Node, PropertyAssignment,
    SourceFile, SyntaxKind
} from "typescript";

export function getTokensAtPosition(sourceFile: SourceFile, position: number) {
    const nodes: NodeWithIndex[] = [];
    

    const getTokenAtPositionWorker = (sourceFile: SourceFile, position: number) => {
        let current: Node = sourceFile;
        let index = 0;
        outer: while (true) {
            const isArray = isArrayLiteralExpression(current);
            const curNodes = isArrayLiteralExpression(current) ? current.elements : current.getChildren(sourceFile);
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

                if (position < end || (position === end && child.kind === SyntaxKind.EndOfFileToken)) {
                    current = child;
                    if (isPropertyAssignment(child) || isLiteralExpression(child)) {
                        nodes.push({
                            node: child,
                            index
                        });
                        index = 0;
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
export interface NodeWithIndex {
    node: PropertyAssignment | LiteralExpression;
    index: number;
}