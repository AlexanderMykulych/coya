import { stat } from "fs/promises";
import { resolve } from "path";
import { getAllFSUnitsFlat } from "../fs/fs";
import { FileFsUnit, FolderFsUnit, FsUnit } from "../fs/types";
import { deduplicate } from "../project/deduplicate";
import type { CodeInfo } from "../types";

export interface FolderItem {
  containsFile: (fileName: string) => Promise<boolean>
  folder: FolderFsUnit
}

export interface AnalysisContext {
  result: CodeInfo[]

  rootDir: string

  files: FileFsUnit[]
  fsUnits: FsUnit[]

  getFolders: (predicate: (folderItem: FolderItem) => boolean | Promise<boolean>) => Promise<FolderFsUnit[]>

  addCodeInfos: (codeInfos: CodeInfo[]) => Promise<void>
}

export async function createContext(rootDir: string): Promise<AnalysisContext> {
  const fsUnits = await getAllFSUnitsFlat(rootDir)

  let resultCodeInfos: CodeInfo[] = []
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
    addCodeInfos(codeInfos: CodeInfo[]) {
      resultCodeInfos = deduplicate([
        ...resultCodeInfos,
        ...codeInfos,
      ])

      return Promise.resolve()
    },
    get result() {
      return resultCodeInfos
    },
    fsUnits,
  }
}

export function createNestedContext(path: FolderFsUnit, context: AnalysisContext): AnalysisContext {
  return {
    rootDir: path.filepath,
    addCodeInfos: context.addCodeInfos,
    get files() {
      return context.files.filter(x => x.filepath.startsWith(path.filepath))
    },
    getFolders(predicate) {
      return context.getFolders(async x => x.folder.filepath.startsWith(path.filepath) && await predicate(x))
    },
    get result() {
      return context.result
    },
    fsUnits: context.fsUnits.filter(x => x.type !== 'error' ? x.filepath.startsWith(path.filepath) : x),
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