import { Node, SyntaxKind } from 'ts-morph'
import { getNodeInfo } from './getNodeId'

const importantKinds = [
  SyntaxKind.VariableDeclaration,
  SyntaxKind.FunctionDeclaration,
  SyntaxKind.PropertyAssignment,
  SyntaxKind.ImportDeclaration,
] as const

export function getParentId(node: Node): string {
  const result: string[] = []

  node.getParentWhile((parent) => {
    if (importantKinds.some(x => parent.isKind(x)) && Node.hasName(parent))
      result.unshift(parent.getName())

    return true
  })

  return [
    getNodeInfo(node.getSourceFile()).id,
    ...result,
  ].join('/')
}
