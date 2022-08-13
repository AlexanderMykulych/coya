import path from 'path'
import { SourceFile, ts } from 'ts-morph'

export function getImportedFiles(sourceFile: SourceFile) {
  return getImportedModules(sourceFile)
    .map(decl => {
      const importPath = decl.getLiteralText()

      if (importPath.startsWith('./') || importPath.startsWith('../')) {
        const rootPath = path.dirname(sourceFile.getFilePath())

        return `.${path.resolve(rootPath, importPath)}`
      }
      return importPath
    })
}

export function getImportedModules(sourceFile: SourceFile) {
  return sourceFile.getImportDeclarations()
    .map(decl => decl.getModuleSpecifier())
}
