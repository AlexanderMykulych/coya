import { AnalysisContext } from "../../context/analysisContext"
import { CodeInfo, CodeInfoType } from "../../types"
import { FileMap } from "./types"

export function init(context: AnalysisContext): Promise<void> {
  const normalizeId = (id: string) => {
    const files = context.store.get<FileMap[]>('files', [])
    const fileMap = files.find(x => id.startsWith(x.resultFile))

    return fileMap ? id.replace(fileMap.resultFile, fileMap.originFile) : id
  }

  context.hooks.onBeforeAdd((codeInfo: CodeInfo) => {
    if (codeInfo.type === CodeInfoType.Entity) {
      codeInfo.id = normalizeId(codeInfo.id)
      codeInfo.filePath = normalizeId(codeInfo.filePath)
    } else {
      codeInfo.to = normalizeId(codeInfo.to)
      codeInfo.from = normalizeId(codeInfo.from)
    }
  })

  return Promise.resolve()
}
