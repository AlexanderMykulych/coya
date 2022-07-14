import { SourceFile } from "ts-morph"
import { CodeInfo, CodeInfoType, EntityType, RelationType } from "../types"
import { getSourceFileId } from "./identifier/getSourceFileId"

export function importAnalizer(sourceFile: SourceFile): CodeInfo[] {
  return sourceFile
      .getImportDeclarations()
      .flatMap<CodeInfo>(x => [
        {
          from: getSourceFileId(sourceFile)!,
          to: getSourceFileId(x.getModuleSpecifierSourceFile()) ?? x.getModuleSpecifierValue(),
          type: CodeInfoType.Relationship,
          relationType: RelationType.Import,
        },
        {
          type: CodeInfoType.Entity,
          id: getSourceFileId(x.getModuleSpecifierSourceFile()) ?? x.getModuleSpecifierValue(),
          entityType: EntityType.File,
          filePath: x.getSourceFile().getFilePath(),
          code: x.getText(),
        },
      ])
}