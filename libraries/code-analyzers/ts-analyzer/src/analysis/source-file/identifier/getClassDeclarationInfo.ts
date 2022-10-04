import type { ClassDeclaration } from "ts-morph";
import { EntityType, CodeInfoType, BaseEntity } from "../../types";
import { getLocation } from "./getLocation";
import { getParentId } from "./getParentId";

export function getClassDeclarationInfo(node: ClassDeclaration): BaseEntity {
  const sourceFile = node.getSourceFile()
  return {
    id: `${getParentId(node)}/${node.getName()}`,
    entityType: EntityType.Class,
    type: CodeInfoType.Entity,
    filePath: sourceFile.getFilePath(),
    ...getLocation(node),
  }
}