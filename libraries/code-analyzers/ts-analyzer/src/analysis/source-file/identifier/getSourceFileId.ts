import type { SourceFile } from "ts-morph";
import { CodeInfoType, EntityType, FileEntity } from "../../types";

export function getSourceFileId(sourceFile?: SourceFile): FileEntity {
  return sourceFile ? <FileEntity>{
    id: sourceFile.getFilePath().toString(),
    type: CodeInfoType.Entity,
    entityType: EntityType.File,
    filePath: sourceFile.getFilePath().toString(),
  } : <FileEntity>{
    id: '<unknow source>',
    type: CodeInfoType.Entity,
    entityType: EntityType.File,
    filePath: '',
  }
}