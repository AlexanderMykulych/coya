import { ImportSpecifier } from "ts-morph";
import { BaseEntity, CodeInfoType, EntityType } from "../../types";
import { getParentId, getParentsInfo } from "./getParentId";

export function getImportSpecifierId(node: ImportSpecifier): BaseEntity {
  const moduleSourceFile = node.getImportDeclaration()?.getModuleSpecifierSourceFile()
  return {
    id: `${getParentId(node)}/${node.getName()}`,
    entityType: EntityType.Variable,
    filePath: moduleSourceFile?.getFilePath() ?? '<unknown>',
    type: CodeInfoType.Entity,
    source: moduleSourceFile
      ? getParentsInfo(moduleSourceFile)
      : []
  }
}