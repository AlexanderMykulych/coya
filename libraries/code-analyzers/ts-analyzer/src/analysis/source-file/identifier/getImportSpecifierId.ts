import { ImportSpecifier } from "ts-morph";
import { BaseEntity, CodeInfoType, EntityType } from "../../types";
import { getNodeInfo } from "./getNodeId";
import { getParentId } from "./getParentId";

export function getImportSpecifierId(node: ImportSpecifier): BaseEntity {
  const moduleSourceFile = node.getImportDeclaration()?.getModuleSpecifierSourceFile()
  return {
    id: `${getParentId(node)}/${node.getName()}`,
    entityType: EntityType.Variable,
    filePath: moduleSourceFile?.getFilePath() ?? '<unknown>',
    type: CodeInfoType.Entity,
    source: moduleSourceFile
      ? getNodeInfo(moduleSourceFile)
      : '<unknown>'
  }
}