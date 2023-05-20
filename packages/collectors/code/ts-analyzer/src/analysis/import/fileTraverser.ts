import path from "path";
import { SourceFile } from "ts-morph";
import { isPromise } from "util/types";
import { getImportedFiles } from "./getImportedFiles";

export type FileTraverserAction = (file: string) => SourceFile | Promise<SourceFile | undefined> | undefined

export async function fileTraverser(sourceFile: SourceFile, fileAction: FileTraverserAction): Promise<void> {
  const nextFiles: SourceFile[] = []

  const imports = getImportedFiles(sourceFile)

  for await (const file of imports) {

    let sourceFile = fileAction(file)
    if (isPromise(sourceFile)) {
      sourceFile = await sourceFile
    }
    if (sourceFile) {
      nextFiles.push(sourceFile)
    }
  }
  for await (const nextSourceFile of nextFiles) {
    await fileTraverser(nextSourceFile, fileAction)
  }
}
