import type { FileFsUnit, FileOrFolderFsUnit, FolderFsUnit } from "../fs/types";
import type { CodeInfo, FileText } from "../types";


export interface FolderItem {
  containsFile: (fileName: string) => Promise<boolean>;
  folder: FolderFsUnit;
}

export type OnBeforeAddCallback = (codeInfo: CodeInfo) => CodeInfo | void;

export interface AnalysisContextHooks {
  onBeforeAdd(calback: OnBeforeAddCallback): AnalysisContextHooks;

  beforeAdd(codeInfo: CodeInfo): CodeInfo;
}

export type ArrayElementType<T> = T extends (infer E)[] ? E : T;

export type AnalysisConfig = {
  filesToAnalyze?: string[];
};

export type BaseStoreData = {
  _config?: AnalysisConfig;
};

export interface AnalysisContextStore<TStore extends BaseStoreData = BaseStoreData> {
  get<Key extends keyof TStore>(key: Key): TStore[Key] | undefined;
  get<Key extends keyof TStore>(key: Key, defValue: NonNullable<TStore[Key]>): NonNullable<TStore[Key]>;
  set<Key extends keyof TStore>(key: Key, value: NonNullable<TStore[Key]>): void;
  addToCollection<Key extends keyof TStore>(key: Key, value: NonNullable<ArrayElementType<TStore[Key]>>): void;
  data: Record<string | number | symbol, any>;
}

export interface AnalysisContext<TStore = any> {
  result: CodeInfo[];
  rootDir: string;
  files: FileFsUnit[];
  fsUnits: FileOrFolderFsUnit[];
  hooks: AnalysisContextHooks;
  store: AnalysisContextStore<Partial<TStore> & BaseStoreData>;
  readFile: (filePath: string, basePath?: string) => Promise<FileText | null>;

  getFolders: (predicate: (folderItem: FolderItem) => boolean | Promise<boolean>) => Promise<FolderFsUnit[]>;

  addCodeInfos: (codeInfos: CodeInfo[]) => Promise<void>;
}
