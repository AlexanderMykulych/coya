import { Node } from "ts-morph";

export function getNodeName(node: Node | undefined): string | undefined {
  if (Node.isVariableDeclaration(node) 
    || Node.isFunctionDeclaration(node)
    || Node.isParameterDeclaration(node)
    || Node.isMethodDeclaration(node)
    || Node.isExportSpecifier(node)
  ) {
    return node.getName()
  }
}