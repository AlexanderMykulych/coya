import { stat } from "fs/promises";
import { resolve } from "path";
import { getAllFSUnitsFlat } from "../fs/fs";
import type { FileFsUnit, FolderFsUnit } from "../fs/types";
import type { CodeInfo } from "../types";
import { createHookManager } from "./hook/createHookManager";
import { createStore } from "./store/createStore";
import { readFile } from "../project/getEntryPoint"
import type { AnalysisContext, FolderItem } from "./analysisContextType";

export async function createContext(rootDir: string, initStoreData?: Record<string, any>): Promise<AnalysisContext> {
  const fsUnits = await getAllFSUnitsFlat(rootDir)

  const resultCodeInfoIndex: Record<string, CodeInfo> = {}

  const hooks = createHookManager()

  return {
    rootDir,
    files: fsUnits.filter((x): x is FileFsUnit => x.type === 'file'),
    async getFolders(predicate) {
      predicate ??= () => true

      const foldersTasks = fsUnits
        .filter((x): x is FolderFsUnit => x.type === "folder")
        .map(async x => ({
          isMatch: await predicate(createFolderItem(x)),
          folder: x,
        }))

      const folders = await Promise.all(foldersTasks)

      return folders
        .filter(x => x.isMatch)
        .map(x => x.folder)
    },
    async addCodeInfos(codeInfos: CodeInfo[]) {
      codeInfos = codeInfos.map(x => hooks.beforeAdd(x))

      codeInfos.forEach(x => {
        if (!resultCodeInfoIndex[x.id]) {
          resultCodeInfoIndex[x.id] = x
        }
      })

      
    },
    get result() {
      return Object.values(resultCodeInfoIndex)
    },
    fsUnits,
    hooks,
    store: createStore(initStoreData),
    readFile,
  }
}

function createFolderItem(folder: FolderFsUnit): FolderItem {
  return {
    async containsFile(fileName) {
      try {
        const stats = await stat(resolve(folder.filepath, fileName))

        return !!stats
      } catch (e) {
        return false
      }
    },
    folder,
  }
}

export async function createContextForOneFile({ code, fileName }: { code: string, fileName: string }): Promise<AnalysisContext> {
  const resultCodeInfoIndex: Record<string, CodeInfo> = {}

  const hooks = createHookManager()

  return {
    rootDir: '.',
    files: [{
      filename: fileName,
      filepath: `./${fileName}`,
      relativePath: `./${fileName}`,
      type: 'file',
    }],
    async getFolders(predicate) {
      const folderUnits: FolderFsUnit[] = [{
        filepath: '.',
        foldername: '.',
        relativePath: '.',
        type: 'folder',
      }]

      predicate ??= () => true

      const foldersTasks = folderUnits
        .map(async x => ({
          isMatch: await predicate(createFolderItem(x)),
          folder: x,
        }))

      const folders = await Promise.all(foldersTasks)

      return folders
        .filter(x => x.isMatch)
        .map(x => x.folder)
    },
    async addCodeInfos(codeInfos: CodeInfo[]) {
      codeInfos = codeInfos.map(x => hooks.beforeAdd(x))

      codeInfos.forEach(x => {
        if (!resultCodeInfoIndex[x.id]) {
          resultCodeInfoIndex[x.id] = x
        }
      })
    },
    get result() {
      return Object.values(resultCodeInfoIndex)
    },
    fsUnits: [],
    hooks,
    store: createStore(),
    readFile(filePath) {
      return Promise.resolve({
        file: filePath,
        text: code,
      })
    }
  }
}