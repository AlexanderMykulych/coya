import type { CodeInfo } from "../../types";
import type { AnalysisContextHooks, OnBeforeAddCallback } from "../analysisContext";


export function createHookManager(): AnalysisContextHooks {
  const onBeforeAdd: OnBeforeAddCallback[] = [];

  return {
    onBeforeAdd(callback) {
      onBeforeAdd.push(callback);

      return this;
    },

    beforeAdd(codeInfo: CodeInfo) {
      for(const callback of onBeforeAdd) {
        codeInfo = callback(codeInfo) ?? codeInfo
      }

      return codeInfo;
    }
  };
}
