import type { Identifier } from "ts-morph";
import { CodeInfoType, EntityType, IdentifierEntity, RelationType } from "../../types";
import { getRelationBeetwenNodes } from "../relations/getRelationBeetwenNodes";
import { getLocation } from "./getLocation";
import { getParentId, getParentNode, getParentsInfo } from "./getParentId";
import type { NodeCodeInfos } from "./types";

export function getIdentifierInfo(node: Identifier): NodeCodeInfos {
  const identifier = getIdentifierEntity(node)
  const parentEntity = getParentNode(node)

  // const implementations = node.getImplementations()
  // const implementationNode = implementations?.at(-1)?.getNode()
  // if (implementationNode) {
  //   const parent = implementationNode.getParent()
  //   parentEntity = parent ? getNodeInfo(parent)[0] : getNodeInfo(implementationNode)[0]
  // }
  // const declarations = node.getSymbol()?.getDeclarations()
  // if (declarations && declarations.length > 0) {
  //   parentEntity = getNodeInfo(declarations[0])[0]
  // }

  // parentEntity = getIgnoredNode(node)

  return [
    identifier,
    parentEntity,
    getRelationBeetwenNodes(parentEntity, identifier, RelationType.Parent),
  ]
}

function getIdentifierEntity(node: Identifier): IdentifierEntity {
  return {
    type: CodeInfoType.Entity,
    entityType: EntityType.Identifier,
    source: getParentsInfo(node) ?? [],
    id: `${getParentId(node)}/${node.getText()}`,
    filePath: node.getSourceFile().getFilePath(),
    ...getLocation(node),
  }
}