import type { AnalysisContext } from "../context/analysisContext";
import { FolderFsUnit } from "../fs/types";
import fsCoya from "./fsCoya";
import tsJsCoya from "./TsJs/tsJsCoya";

export interface AnalysisPlugin {
  name: string
  init?: (context: AnalysisContext) => Promise<void>
  run: (context: AnalysisContext) => Promise<void>
  matchFolders: (context: AnalysisContext) => Promise<FolderFsUnit[]>
}

export function getAnalysisPlugins(): AnalysisPlugin[] {
  return [
    tsJsCoya,
    fsCoya,
  ]
}
