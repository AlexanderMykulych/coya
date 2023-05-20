import type { TsJsAnalysisContext } from "./types";
import type { PackageJson } from 'types-package-json';
import { onAnalyzePackageJson } from "./plugins/plugins";


export function setDependencyInfos(packageJsonText: string | undefined, context: TsJsAnalysisContext) {
  const packageJson: PackageJson = packageJsonText ? JSON.parse(packageJsonText) : {};

  onAnalyzePackageJson({
    context,
    packageJson,
  });
}
