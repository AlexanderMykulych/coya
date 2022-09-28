import type { ImportDeclaration } from "ts-morph";
import { BaseEntity, CodeInfoType, EntityType } from "../../types";
import { getLocation } from "./getLocation";
import { getParentsInfo } from "./getParentId";

export function getImportDeclarationId(importDec: ImportDeclaration): BaseEntity {
  const sourceFile = importDec?.getModuleSpecifierSourceFile();
  const id = importDec.getModuleSpecifierSourceFile()?.getFilePath()?.toString() ?? importDec.getText()
  return {
    id,
    entityType: EntityType.ImportDeclaration,
    filePath: importDec.getSourceFile()?.getFilePath() ?? '<unknow>',
    type: CodeInfoType.Entity,
    source: sourceFile
      ? getParentsInfo(sourceFile)
      : [],
    ...getLocation(importDec),
  }
}