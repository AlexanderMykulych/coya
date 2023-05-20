import { CodeInfo, CodeInfoType, isEntityWithFilePath } from "../../types";
import type { ContextStore } from "./types";
import type { AnalysisContextStore } from "../../context/analysisContextType";

export function normalizeCodeInfoIds(codeInfo: CodeInfo, store: AnalysisContextStore<Partial<ContextStore>>) {
  const normalizeId = (id: string | undefined) => {
    if (!id) {
      return `<empty id>`;
    }

    const files = store.get('files', []);
    const fileMap = files.find(x => id.startsWith(x.resultFile) || id.endsWith(`->${x.resultFile}`));

    return fileMap ? id.replace(fileMap.resultFile, fileMap.originFile) : id;
  };
  if (isEntityWithFilePath(codeInfo)) {
    codeInfo.id = normalizeId(codeInfo.id);
    codeInfo.filePath = normalizeId(codeInfo.filePath);
  } else if (codeInfo.type === CodeInfoType.Relationship) {
    codeInfo.to = normalizeId(codeInfo.to);
    codeInfo.from = normalizeId(codeInfo.from);
    codeInfo.id = normalizeId(codeInfo.id);
  }
}
