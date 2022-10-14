import { Identifier, Node, SyntaxKind } from "ts-morph";
import { trackFn } from "../../../progress/trackFn";
import { TrackType } from "../../../progress/trackTypes";
import { CodeInfoType, Entity, EntityType, RelationType } from "../../types";
import { getRelationBeetwenNodes } from "../relations/getRelationBeetwenNodes";
import { getLocation } from "./getLocation";
import { getNodeInfo } from "./getNodeId";
import { getParentId, getParentEntity, getParentNode } from "./getParentId";
import { isNodeCodeInfos, NodeCodeInfos } from "./types";

function _getIdentifierInfo(node: Identifier): NodeCodeInfos {
  const parentNode = getParentNode(node)
  const declarationNode = getDeclarationNode(node)
  
  const isParentNode = parentNode === declarationNode

  if (isParentNode && parentNode !== node) {
    const nodeInfo = getNodeInfo(parentNode)
    if (isNodeCodeInfos(nodeInfo)) {
      return nodeInfo
    }
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
      .map(x => getNodeInfo(x))
      .filter(isNodeCodeInfos)
      .flatMap(x => x[0])
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
    const nodeInfo = getNodeInfo(declarationNode)
    if (isNodeCodeInfos(nodeInfo)) {
      const declarationEntity = nodeInfo[0]
      return [
        declarationEntity,
        getRelationBeetwenNodes({
          from: parentEntity,
          to: declarationEntity,
          type: RelationType.Parent,
          location: getLocation(node),
        }),
      ]
    }
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

export const getIdentifierInfo = trackFn(
  _getIdentifierInfo,
  {
    name: 'getIdentifierInfo',
    type: TrackType.AnalyzeSourceFileIdentifierAnalyze,
    objectExtractor: node => ({
      msg: node.getText(),
    }),
    errorExtractor: node => ({
      filePath: node.getSourceFile().getFilePath(),
      trace: (new Error()).stack,
      code: node.getText(),
    }),
  },
)