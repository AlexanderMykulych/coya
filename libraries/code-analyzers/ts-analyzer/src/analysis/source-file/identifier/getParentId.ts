import { Node, SyntaxKind } from 'ts-morph'
import { CodeInfo, Entity, isEntityCodeInfo } from '../../types'
import { getNodeInfo } from './getNodeId'
import { isNodeCodeInfos } from './types'

const importantKinds = [
  SyntaxKind.VariableDeclaration,
  SyntaxKind.FunctionDeclaration,
  SyntaxKind.MethodDeclaration,
  SyntaxKind.PropertyAssignment,
  SyntaxKind.ImportDeclaration,
  SyntaxKind.ClassDeclaration,
] as const

export function getParentId(node: Node): string {
  const result: string[] = []

  node.getParentWhile((parent) => {
    if (importantKinds.some(x => parent.isKind(x)) && Node.hasName(parent))
      result.unshift(parent.getName())

    return true
  })

  const nodeInfo = getNodeInfo(node.getSourceFile())
  if (isNodeCodeInfos(nodeInfo)) {
    return [
      nodeInfo[0].id,
      ...result,
    ].join('/')
  }

  throw 'Not implemented logic here!'
}

export function getParentEntity(node: Node): Entity {
  const nodeInfo = getNodeInfo(getParentNode(node))
  if (isNodeCodeInfos(nodeInfo)) {
    return nodeInfo[0]
  }
  throw 'Not implemented logic here!'
}

export function getParentNode(node: Node): Node {
  let result: Node | null = null;

  node.getParentWhile((parent) => {
    if (importantKinds.some(x => parent.isKind(x)) && Node.hasName(parent)) {
      result = parent
      return false
    }

    return true
  })

  return result ?? node.getSourceFile()
}

export function getParentsInfo(node: Node): Entity[] {
  const firstParent = node.getFirstAncestor(x => importantKinds.some(kind => x.isKind(kind)))
  if (firstParent) {
    const firstParentCodeInfo = getNodeInfo(firstParent)
    if (isNodeCodeInfos(firstParentCodeInfo)) {
      return [
        firstParentCodeInfo[0],
      ]
    }
  }

  const info = getNodeInfo(node.getSourceFile()) as CodeInfo[]

  return info.filter(isEntityCodeInfo)
}