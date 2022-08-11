import { Node, SyntaxKind } from 'ts-morph'
import type { BaseEntity, CodeInfo, Entity } from '../../types'
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

export function getParentsInfo(node: Node): Entity[] {
  const firstParent = node.getFirstAncestor(x => importantKinds.some(kind => x.isKind(kind)))
  if (firstParent) {
    const firstParentCodeInfo = getNodeInfo(firstParent)
    const parents = unwrapSources(firstParentCodeInfo)
    return [
      ...parents,
      firstParentCodeInfo,
    ]
  }

  return [
    getNodeInfo(node.getSourceFile()),
  ]
}

export function unwrapSources(entity: Entity): Entity[] {
  return [
    ...(entity?.source ?? []),
    ...(entity
      ?.source
      ?.flatMap<Entity, Entity>(x => unwrapSources(x))
      ?? []
    )
  ]
}