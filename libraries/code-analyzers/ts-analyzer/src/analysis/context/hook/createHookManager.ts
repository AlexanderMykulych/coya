import { CodeInfo } from "../../types";
import { AnalysisContextHooks } from "../analysisContext";


export function createHookManager(): AnalysisContextHooks {
  const onBeforeAdd: Parameters<AnalysisContextHooks["onBeforeAdd"]>[0][] = [];

  return {
    onBeforeAdd(callback) {
      onBeforeAdd.push(callback);

      return this;
    },

    beforeAdd(codeInfo: CodeInfo) {
      onBeforeAdd.forEach(x => codeInfo = x(codeInfo) ?? codeInfo);

      return codeInfo;
    }
  };
}
