import * as ts from 'typescript'
import type {
  CodeInfo,
  NodeAnalyzeParams, SourceContainer,
  SourceFileAnalyzeParams, SymbolAnalyzeParams,
} from './types'
import { CodeInfoType, EntityType } from './types'
import { visitNodes } from './visitNodes'

export function analyzeSourceFile({ sourceFile, checker }: SourceContainer) {
  const symbol = checker.getSymbolAtLocation(sourceFile)
  const results: CodeInfo[] = []
  const analizedFiles: string[] = []
  if (symbol) {
    const addCodeInfo = (codeInfo: CodeInfo) => {
      results.push(codeInfo)
    }
    const startSourceFileAnalization = (sourceFile: ts.SourceFile) => {
      const path = getSourceFilePath(sourceFile)
      if (analizedFiles.includes(path))
        return false

      analizedFiles.push(path)

      return true
    }
    analizeSourceFileSymbol({
      symbol,
      checker,
      addCodeInfo,
      sourceFile,
      canAnalyze: startSourceFileAnalization,
    })
  }
  return results
}

function analizeSourceFileSymbol(params: SourceFileAnalyzeParams) {
  if (params.canAnalyze(params.sourceFile)) {
    params.symbol.exports?.forEach(item => analizeSymbol({
      ...params,
      symbol: item,
    }))
  }
}

function analizeSymbol(params: SymbolAnalyzeParams) {
  const { symbol, checker, addCodeInfo, sourceFile } = params
  if (symbol.valueDeclaration) {
    const symbolType = checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration)
    const symbolTypeSymbol = symbolType.getSymbol()
    if (symbolTypeSymbol && (symbolTypeSymbol.flags & ts.SymbolFlags.Function)) {
      const typeString = checker.typeToString(symbolType)
      addCodeInfo({
        type: CodeInfoType.Entity,
        entityType: EntityType.Function,
        name: symbol.getName(),
        typeString,
        filePath: getSourceFilePath(sourceFile),
      })
    }
    visitNodes(symbol.valueDeclaration, node => analizeNode({
      ...params,
      node,
    }))
  }
}

function analizeNode(params: NodeAnalyzeParams) {
  const { node, checker, addCodeInfo, sourceFile, symbol } = params
  if (ts.isIdentifier(node)) {
    const nodeSymbol = checker.getSymbolAtLocation(node)
    if (nodeSymbol) {
      const nodeType = checker.getTypeOfSymbolAtLocation(nodeSymbol, node)
      nodeSymbol
        ?.declarations
        ?.forEach((importSpecifier) => {
          if (ts.isImportSpecifier(importSpecifier)) {
            const moduleSymbol = nodeType.getSymbol()
            if (moduleSymbol) {
              const moduleSourceFile = moduleSymbol.valueDeclaration!.getSourceFile()
              addCodeInfo({
                type: CodeInfoType.Relationship,
                from: {
                  type: CodeInfoType.Entity,
                  entityType: EntityType.File,
                  filePath: getSourceFilePath(sourceFile),
                  name: symbol.getName(),
                },
                to: {
                  type: CodeInfoType.Entity,
                  entityType: EntityType.File,
                  filePath: getSourceFilePath(moduleSourceFile),
                  name: importSpecifier.propertyName?.getText() ?? importSpecifier.name.getText(),
                },
              })

              const exportedModuleSymbol = checker.getSymbolAtLocation(moduleSourceFile)!
              analizeSourceFileSymbol({
                ...params,
                symbol: exportedModuleSymbol,
                sourceFile: moduleSourceFile,
              })
            }
          }
        })
    }
  }
}

function getSourceFilePath(sourceFile: ts.SourceFile): string {
  // @ts-expect-error
  return sourceFile.path
}
