import type { PackageJson } from "types-package-json"
import type { AnalysisContext } from "../../../context/analysisContext"
import type { FileText } from "../../../types"

export interface ContextualType<TStore> {
  context: AnalysisContext<TStore>
}

export interface IsMatchOptions<TStore> extends ContextualType<TStore> {
  file: FileText
}

export interface AnalyzePackageJsonOptions<TStore = any> extends ContextualType < TStore >{
  packageJson: PackageJson
}
export interface TsJsPlugin<TStore = any> {
  name: string
  isMatch(options: IsMatchOptions<TStore>): Promise<boolean> | boolean
  processFile(options: IsMatchOptions<TStore>): Promise<FileText>

  on?: {
    analyzePackageJson?: (options: AnalyzePackageJsonOptions<TStore>) => Promise<void> | void
  }
}