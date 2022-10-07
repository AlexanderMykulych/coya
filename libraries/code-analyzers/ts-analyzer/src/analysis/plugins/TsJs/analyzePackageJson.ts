import { readFile } from "../../project/getEntryPoint";
import { setDependencyInfos } from "./setDependencyInfos";

import type { TsJsAnalysisContext } from "./types";

export async function analyzePackageJson(context: TsJsAnalysisContext) {
  const packageFile = context.files.find(x => x.filename === 'package.json');
  if (packageFile) {
    const file = await readFile(packageFile.filepath);

    setDependencyInfos(file?.text, context);
  }
  setDependencyInfos(undefined, context);
}
