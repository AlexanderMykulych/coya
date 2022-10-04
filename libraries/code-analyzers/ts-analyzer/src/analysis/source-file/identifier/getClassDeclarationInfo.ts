import type { ClassDeclaration, MethodDeclaration } from "ts-morph";
import { EntityType, FunctionEntity, CodeInfoType, BaseEntity } from "../../types";
import { getLocation } from "./getLocation";
import { getParentId, getParentsInfo } from "./getParentId";

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