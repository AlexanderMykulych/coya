import { stat } from "fs/promises";
import { resolve } from "path";
import { getAllFSUnitsFlat } from "../fs/fs";
import type { FileFsUnit, FileOrFolderFsUnit, FolderFsUnit } from "../fs/types";
import type { CodeInfo, FileText } from "../types";
import { createHookManager } from "./hook/createHookManager";
import { createStore } from "./store/createStore";
import { readFile } from "../project/getEntryPoint"

export interface FolderItem {
  containsFile: (fileName: string) => Promise<boolean>
  folder: FolderFsUnit
}

export type OnBeforeAddCallback = (codeInfo: CodeInfo) => CodeInfo | void

export interface AnalysisContextHooks {
  onBeforeAdd(calback: OnBeforeAddCallback): AnalysisContextHooks

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
  readFile: (filePath: string, basePath?: string) => Promise<FileText | null>

  getFolders: (predicate: (folderItem: FolderItem) => boolean | Promise<boolean>) => Promise<FolderFsUnit[]>

  addCodeInfos: (codeInfos: CodeInfo[]) => Promise<void>
}

export async function createContext(rootDir: string): Promise<AnalysisContext> {
  const fsUnits = await getAllFSUnitsFlat(rootDir)

  const resultCodeInfoIndex: Record<string, CodeInfo> = {}

  const hooks = createHookManager()

  let readyResolve = null
  const readyTask = new Promise<void>(resolve => readyResolve = resolve)
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
    store: createStore(),
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