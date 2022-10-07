import type { AnalysisContext } from "../../context/analysisContext"
import type { RawSourceMap } from "../../types"

export type FileMap = {
  originFile: string
  resultFile: string
  sourceMap?: RawSourceMap
}

export type ContextStore = {
  vueVersion: 2 | 3
  files: FileMap[]
}

export type TsJsAnalysisContext = AnalysisContext<ContextStore>