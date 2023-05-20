import fsCoya from "./fs/fsCoya";
import tsJsCoya from "./TsJs/tsJsCoya";
import type { AnalysisPlugin } from "./types";

export function getAnalysisPlugins(): AnalysisPlugin[] {
  return [
    tsJsCoya,
    fsCoya,
  ]
}
