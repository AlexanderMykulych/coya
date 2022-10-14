import type { CodeInfo } from "../types"

export type AnalyzerOptions = {
  context?: Partial<AnalyzerContext>
}

export type AnalyzerSettings = {
  analyzeUnknowNodes: boolean
}

export type AnalyzeSourceOptions = {
  context?: Partial<AnalyzerContext>
  analyzerSettings?: AnalyzerSettings
}

export type AnalyzerContext = {
  addCodeInfo(codeInfo: CodeInfo | CodeInfo[]): Promise<void>
  originalSourceName: string
}