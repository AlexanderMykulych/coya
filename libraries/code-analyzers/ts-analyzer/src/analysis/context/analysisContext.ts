import { stat } from "fs/promises";
import { resolve } from "path";
import { getAllFSUnitsFlat } from "../fs/fs";
import { FileFsUnit, FileOrFolderFsUnit, FolderFsUnit, FsUnit } from "../fs/types";
import { deduplicate } from "../project/deduplicate";
import type { CodeInfo } from "../types";
import { createHookManager } from "./hook/createHookManager";
import { createStore } from "./store/createStore";

export interface FolderItem {
  containsFile: (fileName: string) => Promise<boolean>
  folder: FolderFsUnit
}

export interface AnalysisContextHooks {
  onBeforeAdd(calback: (codeInfo: CodeInfo) => CodeInfo | void): AnalysisContextHooks

  beforeAdd(codeInfo: CodeInfo): CodeInfo
}

export type ArrayElementType<T> = T extends (infer E)[] ? E : T;

export interface AnalysisContextStore<TStore = any> {
  get<Key extends keyof TStore>(key: Key): TStore[Key] | undefined
  get<Key extends keyof TStore>(key: Key, defValue: NonNullable<TStore[Key]>): NonNullable<TStore[Key]>
  set<Key extends keyof TStore>(key: Key, value: NonNullable<TStore[Key]>): void
  addToCollection<Key extends keyof TStore>(key: Key, value: NonNullable<ArrayElementType<TStore[Key]>>): void
}

export interface AnalysisContext<TStore = any> {
  result: CodeInfo[]
  rootDir: string
  files: FileFsUnit[]
  fsUnits: FileOrFolderFsUnit[]
  hooks: AnalysisContextHooks
  store: AnalysisContextStore<Partial<TStore>>

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


