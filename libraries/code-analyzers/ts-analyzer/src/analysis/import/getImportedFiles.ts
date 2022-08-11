import path from 'path'
import { SourceFile } from 'ts-morph'

export function getImportedFiles(sourceFile: SourceFile) {
  return getImportedModules(sourceFile)
    .map(decl => {
      const importPath = decl.getLiteralText()

      const rootPath = path.dirname(sourceFile.getFilePath())

      return `.${path.resolve(rootPath, importPath)}`
    })
}

export function getImportedModules(sourceFile: SourceFile) {
  return sourceFile.getImportDeclarations()
    .map(decl => decl.getModuleSpecifier())
}
