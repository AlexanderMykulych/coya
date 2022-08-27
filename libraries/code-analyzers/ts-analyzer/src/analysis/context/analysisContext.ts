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

export interface AnalysisContextHooks {
  onBeforeAdd(calback: (codeInfo: CodeInfo) => CodeInfo | void): AnalysisContextHooks

  beforeAdd(codeInfo: CodeInfo): CodeInfo
}

export interface AnalysisContextStore {
  get<T>(key: string, defValue: T): T
  set<T>(key: string, value: T): void
  addToCollection<T>(key: string, value: T): void
}

export interface AnalysisContext {
  result: CodeInfo[]
  rootDir: string
  files: FileFsUnit[]
  fsUnits: FsUnit[]
  hooks: AnalysisContextHooks
  store: AnalysisContextStore

  getFolders: (predicate: (folderItem: FolderItem) => boolean | Promise<boolean>) => Promise<FolderFsUnit[]>

  addCodeInfos: (codeInfos: CodeInfo[]) => Promise<void>
}

export async function createContext(rootDir: string): Promise<AnalysisContext> {
  const fsUnits = await getAllFSUnitsFlat(rootDir)

  let resultCodeInfos: CodeInfo[] = []

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
    addCodeInfos(codeInfos: CodeInfo[]) {
      codeInfos = codeInfos.map(x => hooks.beforeAdd(x))

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
    hooks,
    store: createStore(),
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
    hooks: context.hooks,
    store: createStore(),
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

function createHookManager(): AnalysisContextHooks {
  const onBeforeAdd: Parameters<AnalysisContextHooks["onBeforeAdd"]>[0][] = []

  return {
    onBeforeAdd(callback) {
      onBeforeAdd.push(callback)

      return this
    },

    beforeAdd(codeInfo: CodeInfo) {
      onBeforeAdd.forEach(x => codeInfo = x(codeInfo) ?? codeInfo)

      return codeInfo
    }
  }
}

function createStore(): AnalysisContextStore {
  const store: Record<string, any> = {}

  return {
    get<T>(key: string, defValue: T) {
      return store[key] as unknown as T ?? defValue
    },
    set(key, val) {
      store[key] = val
    },
    addToCollection(key, value) {
      if (!store[key]) {
        store[key] = []
      }

      store[key].push(value)
    }
  }
}