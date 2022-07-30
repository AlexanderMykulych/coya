import { SourceFile } from 'ts-morph'

export function getImportedFiles(sourceFile: SourceFile) {
  return sourceFile.getImportDeclarations()
    .map(decl => {
      return decl.getModuleSpecifier().getLiteralText()
    })
}
