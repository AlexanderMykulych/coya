import * as ts from "typescript";

export function getNodeText(node: ts.PropertyAssignment | ts.LiteralExpression, sourceFile: ts.SourceFile): string {
    if (ts.isPropertyAssignment(node)) {
        return node.name.getText(sourceFile);
    }
    if (ts.isLiteralExpression(node)) {
        return node.getText(sourceFile);
    }
    return "";
}
