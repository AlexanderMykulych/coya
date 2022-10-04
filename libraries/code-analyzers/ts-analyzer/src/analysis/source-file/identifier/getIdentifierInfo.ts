import { Identifier, Node, SyntaxKind } from "ts-morph";
import { CodeInfoType, Entity, EntityType, RelationType } from "../../types";
import { getRelationBeetwenNodes } from "../relations/getRelationBeetwenNodes";
import { getLocation } from "./getLocation";
import { getNodeInfo } from "./getNodeId";
import { getParentId, getParentEntity, getParentNode } from "./getParentId";
import type { NodeCodeInfos } from "./types";

export function getIdentifierInfo(node: Identifier): NodeCodeInfos {
  const parentNode = getParentNode(node)
  const declarationNode = getDeclarationNode(node)
  
  const isParentNode = parentNode === declarationNode

  if (isParentNode) {
    return getNodeInfo(parentNode)
  }

  return getIdentifierEntity(node)
}

function getIdentifierEntity(node: Identifier): NodeCodeInfos {
  const implementations = node.getImplementations()

  let codeInfos: Entity[] = []
  if (implementations.length > 0) {
    codeInfos = implementations
      .map(x => x.getNode())
      .filter(x => x !== node)
      .flatMap(x => getNodeInfo(x)[0])
  }

  const parentEntity = getParentEntity(node)

  if (codeInfos.length > 0) {

    // @ts-ignore
    return [
      ...codeInfos,
      ...codeInfos
        .map(codeInfo => getRelationBeetwenNodes({
            from: parentEntity,
            to: codeInfo,
            type: RelationType.Use,
          })
        )
    ]
  }

  const declarationNode = node.getSymbol()?.getValueDeclaration() ?? node

  if (!declarationNode.isKind(SyntaxKind.Identifier)) {
    const declarationEntity = getNodeInfo(declarationNode)[0]

    return [
      declarationEntity,
      ...codeInfos,
      getRelationBeetwenNodes({
        from: parentEntity,
        to: declarationEntity,
        type: RelationType.Parent,
        location: getLocation(node),
      }),
    ]
  }

  const location = getLocation(node)

  const identifierEntity: Entity = {
    type: CodeInfoType.Entity,
    entityType: EntityType.Identifier,
    id: `${getParentId(node)}/${node.getText()}`,
    filePath: node.getSourceFile().getFilePath(),
    ...location,
  }

  return [
    identifierEntity
  ]
}

function getDeclarationNode(node: Identifier): Node | undefined {
  return node.getSymbol()?.getValueDeclaration()
}