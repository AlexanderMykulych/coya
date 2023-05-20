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
  originalSourceName: string
}