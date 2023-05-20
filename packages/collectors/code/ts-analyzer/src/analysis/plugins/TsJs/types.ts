import type { AnalysisContext, BaseStoreData } from "../../context/analysisContextType"
import type { RawSourceMap } from "../../types"

export type FileMap = {
  originFile: string
  resultFile: string
  sourceMap?: RawSourceMap
}

export type ContextStore = BaseStoreData & {
  vueVersion: 2 | 3
  files: FileMap[]
  tsConfig: Record<string, any>
}

export type TsJsAnalysisContext = AnalysisContext<ContextStore>