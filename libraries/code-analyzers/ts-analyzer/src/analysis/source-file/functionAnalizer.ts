import type { Node } from 'ts-morph'
import { SyntaxKind } from 'ts-morph'
import { CodeInfo, EntityLocation, isLocatedEntity, RelationType } from '../types'
import { CodeInfoType } from '../types'
import { getNodeInfo } from './identifier/getNodeId'
import type { AnalyzerOptions } from './types'

export function functionAnalizer(node: Node, options?: AnalyzerOptions): CodeInfo[] {
  return [
    SyntaxKind.FunctionDeclaration,
    SyntaxKind.ArrowFunction,
    SyntaxKind.MethodDeclaration,
  ]
    .flatMap(kind =>
      node
        .getDescendantsOfKind(kind)
        .map(x => ({ node: x, entity: getNodeInfo(x, options)[0] }))
        .flatMap<CodeInfo>(({ node, entity }) =>
          [
            entity,
            ...getNestedRelations(node, entity.id, options),
          ])
  )
}

function getNestedRelations(node: Node, nodeId: string, options?: AnalyzerOptions): CodeInfo[] {
  const entities = node
    .getDescendantsOfKind(SyntaxKind.Identifier)
    .map(x => getNodeInfo(x, options)[0])

  const relations = entities
    .map<CodeInfo>(x => ({
      id: `${nodeId}->${x.id}`,
      to: x.id,
      from: nodeId,
      type: CodeInfoType.Relationship,
      relationType: RelationType.Use,
      ...getLocationFromCodeInfo(x),
    }))
  options?.context?.addCodeInfo?.(relations)
  return [
    ...entities,
    ...relations,
  ]
}

function getLocationFromCodeInfo(codeInfo: CodeInfo): EntityLocation | null {
  if (isLocatedEntity(codeInfo)) {
    return {
      start: codeInfo.start,
      end: codeInfo.end,
      lineStart: codeInfo.lineStart,
      lineEnd: codeInfo.lineEnd,
      columnStart: codeInfo.columnStart,
      columnEnd: codeInfo.columnEnd,
      kind: codeInfo.kind,
    }
  }

  return null
}