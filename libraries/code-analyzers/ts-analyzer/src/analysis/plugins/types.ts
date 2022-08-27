import type { AnalysisContext } from "../context/analysisContext"
import type { FolderFsUnit } from "../fs/types"

export interface AnalysisPlugin {
  name: string
  init?: (context: AnalysisContext) => Promise<void>
  run: (context: AnalysisContext) => Promise<void>
  matchFolders: (context: AnalysisContext) => Promise<FolderFsUnit[]>
}