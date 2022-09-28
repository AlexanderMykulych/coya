import { Node, SyntaxKind } from 'ts-morph'
import { CodeInfo, Entity, isEntityCodeInfo, isSoursableEntity } from '../../types'
import { getNodeInfo } from './getNodeId'
import type { NodeCodeInfos } from './types'

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
    getNodeInfo(node.getSourceFile())[0].id,
    ...result,
  ].join('/')
}

export function getParentNode(node: Node): Entity {
  let result: Node | null = null;

  node.getParentWhile((parent) => {
    if (importantKinds.some(x => parent.isKind(x)) && Node.hasName(parent)) {
      result = parent
      return false
    }

    return true
  })

  return getNodeInfo(result ?? node.getSourceFile())[0]
}

export function getParentsInfo(node: Node): Entity[] {
  const firstParent = node.getFirstAncestor(x => importantKinds.some(kind => x.isKind(kind)))
  if (firstParent) {
    const firstParentCodeInfo = getNodeInfo(firstParent)[0]
    const parents = unwrapSources(firstParentCodeInfo)
    return [
      ...parents,
      firstParentCodeInfo,
    ]
  }

  return getNodeInfo(node.getSourceFile())
    .filter(isEntityCodeInfo)
}

export function unwrapSources(entity: Entity): Entity[] {
  return isSoursableEntity(entity) ? [
    ...(entity?.source ?? []),
    ...(
      entity
        ?.source
        ?.flatMap(x => unwrapSources(x))
        ?? []
    )
  ] : []
}