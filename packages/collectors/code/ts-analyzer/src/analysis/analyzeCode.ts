import { progress } from "../progress/progress";
import { analyzeByContext } from "./analyze";
import { createContextForOneFile } from "./context/analysisContext";
import type { CodeInfo } from "./types";

export type AnalyzeCodeData = {
  code: string
  fileName: string
}

async function _analyzeCode({ code, fileName }: AnalyzeCodeData): Promise<CodeInfo[]> {
  const context = await createContextForOneFile({
    code,
    fileName,
  })

  return analyzeByContext(context)
}


export const analyzeCode = progress('analyzeCode', _analyzeCode)