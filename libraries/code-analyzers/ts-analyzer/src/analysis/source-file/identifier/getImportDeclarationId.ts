import type { ImportDeclaration } from "ts-morph";
import { BaseEntity, CodeInfoType, EntityType, RelationType } from "../../types";
import { getRelationBeetwenNodes } from "../relations/getRelationBeetwenNodes";
import { getLocation } from "./getLocation";
import { getParentEntity, getParentsInfo } from "./getParentId";
import type { NodeCodeInfos } from "./types";

export function getImportDeclarationId(importDec: ImportDeclaration): NodeCodeInfos {
  const id = importDec.getModuleSpecifierSourceFile()?.getFilePath()?.toString() ?? importDec.getText()
  const location = getLocation(importDec)
  const entity: BaseEntity = {
    id,
    entityType: EntityType.ImportDeclaration,
    filePath: importDec.getSourceFile()?.getFilePath() ?? '<unknow>',
    type: CodeInfoType.Entity,
    ...location,
  }
  const parentEntity = getParentEntity(importDec)
  return [
    entity,
    getRelationBeetwenNodes({
      from: parentEntity,
      to: entity,
      type: RelationType.Import,
      location,
    }),
]
}