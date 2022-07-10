import { Node } from "ts-morph";

export function getNodeName(node: Node | undefined): string | undefined {
  if (Node.isVariableDeclaration(node)) {
    return node.getName()
  }
  if (Node.isFunctionDeclaration(node)) {
    return node.getName()
  }
  if (Node.isParameterDeclaration(node)) {
    return node.getName()
  }
  if (Node.isExportSpecifier(node)) {
    return node.getName()
  }
}