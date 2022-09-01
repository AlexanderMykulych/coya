import { createStore } from "./store/createStore";
import type { FolderFsUnit } from "../fs/types";
import type { AnalysisContext } from "./analysisContext";


export function createNestedContext(path: FolderFsUnit, context: AnalysisContext): AnalysisContext {
  return {
    rootDir: path.filepath,
    addCodeInfos: context.addCodeInfos,
    get files() {
      return context.files.filter(x => x.filepath.startsWith(path.filepath));
    },
    getFolders(predicate) {
      return context.getFolders(async (x) => x.folder.filepath.startsWith(path.filepath) && await predicate(x));
    },
    get result() {
      return context.result;
    },
    fsUnits: context.fsUnits.filter(x => x.filepath.startsWith(path.filepath)),
    hooks: context.hooks,
    store: createStore(),
    readFile: context.readFile,
  };
}
