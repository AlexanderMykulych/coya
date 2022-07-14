import { SourceFile } from "ts-morph";

export function getSourceFileId(sourceFile?: SourceFile): string | undefined {
  return sourceFile?.getFilePath()
}