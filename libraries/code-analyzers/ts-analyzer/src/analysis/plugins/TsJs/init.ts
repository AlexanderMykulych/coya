import type { CodeInfo } from "../../types"
import type { TsJsAnalysisContext } from "./types"
import { updateSourceMapLocation } from "./plugins/plugins"
import { progress } from "../../../progress/progress"
import { normalizeCodeInfoIds } from "./normalizeCodeInfoIds"
import { analyzePackageJson } from "./analyzePackageJson"

async function _init(context: TsJsAnalysisContext): Promise<void> {

  await analyzePackageJson(context)

  subscribesOnHooks(context)
}

function subscribesOnHooks(context: TsJsAnalysisContext) {
  context.hooks.onBeforeAdd((codeInfo: CodeInfo) => {
    normalizeCodeInfoIds(codeInfo, context.store)
    updateSourceMapLocation(codeInfo, context.store)
  })
}

export const init = progress('ts-js. init', _init)
