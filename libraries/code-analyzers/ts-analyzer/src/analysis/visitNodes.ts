import * as ts from "typescript";


export function visitNodes(node: ts.Node, visitor: (x: ts.Node) => void) {
  ts.forEachChild(node, (visitedNode) => {
    visitor(visitedNode);
    visitNodes(visitedNode, visitor);
  });
}
