import { readFile } from "../../project/getEntryPoint";
import type { TsJsAnalysisContext } from "./types";
import { parse } from 'comment-json'

export async function readTsConfig(context: TsJsAnalysisContext): Promise<void> {
  const tsconfigFile = context.files.find(x => x.relativePath === 'tsconfig.json');
  if (tsconfigFile) {
    const file = await readFile(tsconfigFile.filepath);

    if (file) {
      context.store.set('tsConfig', parse(file.text))
    }
  }
}
