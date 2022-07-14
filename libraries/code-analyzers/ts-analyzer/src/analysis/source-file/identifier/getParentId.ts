import { Node, SyntaxKind } from "ts-morph";
import { getSourceFileId } from "./getSourceFileId";

const importantKinds = [
  SyntaxKind.VariableDeclaration,
  SyntaxKind.FunctionDeclaration,
  SyntaxKind.PropertyAssignment,
] as const

export function getParentId(node: Node): string {
  const result: string[] = []

  node.getParentWhile(parent => {
    if (importantKinds.some(x => parent.isKind(x)) && Node.hasName(parent)) {
      result.unshift(parent.getName())
    }
    return true
  })

  return [
    getSourceFileId(node.getSourceFile()),
    ...result
  ].join('/')
}