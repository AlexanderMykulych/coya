import type { CodeInfo } from "../types"

export type AnalyzerOptions = {
  context?: Partial<AnalyzerContext>
}

export type AnalyzeSourceOptions = {
  context?: Partial<AnalyzerContext>
}

export type AnalyzerContext = {
  addCodeInfo(codeInfo: CodeInfo | CodeInfo[]): Promise<void>
}