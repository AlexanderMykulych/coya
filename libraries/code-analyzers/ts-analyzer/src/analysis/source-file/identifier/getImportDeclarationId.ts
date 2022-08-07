import { ImportDeclaration } from "ts-morph";
import { BaseEntity, CodeInfoType, EntityType, FileEntity } from "../../types";
import { getNodeInfo } from "./getNodeId";

export function getImportDeclarationId(importDec: ImportDeclaration): BaseEntity {
  const sourceFile = importDec?.getModuleSpecifierSourceFile();
  return {
    id: importDec.getModuleSpecifierValue() ?? importDec.getText(),
    entityType: EntityType.ImportDeclaration,
    filePath: sourceFile?.getFilePath() ?? '<unknow>',
    type: CodeInfoType.Entity,
    source: sourceFile
      ? getNodeInfo(sourceFile)
      : '<unknown>'
  }
}