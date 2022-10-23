import type { PackageJson } from "types-package-json"
import type { AnalysisContext } from "../../../context/analysisContextType"
import type { CodeInfo, FileText } from "../../../types"

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
    beforeCodeInfoAdd?: (codeInfo: CodeInfo, options: AnalyzePackageJsonOptions<TStore>) => Promise<void> | void
  }
}