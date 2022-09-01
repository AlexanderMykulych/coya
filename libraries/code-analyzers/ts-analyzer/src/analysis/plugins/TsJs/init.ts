import { readFile } from "../../project/getEntryPoint"
import { CodeInfo, CodeInfoType } from "../../types"
import type { FileMap, TsJsAnalysisContext } from "./types"
import type { PackageJson } from 'types-package-json'
import { onAnalyzePackageJson } from "./plugins/plugins"
import { progress } from "../../../progress/progress"

async function _init(context: TsJsAnalysisContext): Promise<void> {

  await analyzePackageJson(context)

  subscribesOnHooks(context)
}

function subscribesOnHooks(context: TsJsAnalysisContext) {
  const normalizeId = (id: string) => {
    const files = context.store.get('files', [])
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
}

async function analyzePackageJson(context: TsJsAnalysisContext) {
  const packageFile = context.files.find(x => x.filename === 'package.json')
  if (packageFile) {
    const file = await readFile(packageFile.filepath)
    if (file) {
      setDependencyInfos(file.text, context)
    }
  }
}

function setDependencyInfos(packageJsonText: string, context: TsJsAnalysisContext) {
  const packageJson = JSON.parse(packageJsonText) as PackageJson

  onAnalyzePackageJson({
    context,
    packageJson,
  })
}

export const init = progress('ts-js. init', _init)