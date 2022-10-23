import { AnalysisContext } from "../context/AnalysisContext.1"
import type { FolderFsUnit } from "../fs/types"

export interface AnalysisPlugin {
  name: string
  init?: (context: AnalysisContext) => Promise<void>
  run: (context: AnalysisContext) => Promise<void>
  matchFolders: (context: AnalysisContext) => Promise<FolderFsUnit[]>
}