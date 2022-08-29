import type { AnalysisContext } from "../../context/analysisContext"

export type FileMap = {
  originFile: string
  resultFile: string
}

export type ContextStore = {
  vueVersion: 2 | 3
  files: FileMap[]
}

export type TsJsAnalysisContext = AnalysisContext<ContextStore>