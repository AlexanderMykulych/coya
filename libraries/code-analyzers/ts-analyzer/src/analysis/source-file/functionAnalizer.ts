import type { Identifier, Node } from 'ts-morph'
import { SyntaxKind } from 'ts-morph'
import { CodeInfo, RelationType } from '../types'
import { CodeInfoType } from '../types'
import { getNodeInfo } from './identifier/getNodeId'

export function functionAnalizer(node: Node): CodeInfo[] {
  return [
    SyntaxKind.FunctionDeclaration,
    SyntaxKind.ArrowFunction,
    SyntaxKind.MethodDeclaration,
  ]
    .flatMap(kind => node.getDescendantsOfKind(kind)
      .map(x => ({ node: x, entity: getNodeInfo(x) }))
      .flatMap<CodeInfo>(({ node, entity }) =>
        [
          entity,
          ...getNestedRelations(node, entity.id),
        ])
  )
}

function getNestedImportedIdentifiers(node: Node): Identifier[] {
  return node.getDescendantsOfKind(SyntaxKind.Identifier)
    .filter(child => {
      const dec = child.getSymbol()?.getDeclarations()?.[0]
      if (dec) {
        if (dec.isKind(SyntaxKind.ImportSpecifier)) {
          return true
        }
        if (dec.getSourceFile() !== node.getSourceFile()) {
          return true
        }
      }
      return false
    })
}

function getNestedRelations(node: Node, nodeId: string): CodeInfo[] {
  const entities = getNestedImportedIdentifiers(node)
    .map(x => getNodeInfo(x))
  const relations = entities
    .map<CodeInfo>(x => ({
      to: x.id,
      from: nodeId,
      type: CodeInfoType.Relationship,
      relationType: RelationType.Use,
    }))
  return [
    ...entities,
    ...relations,
  ]
}
