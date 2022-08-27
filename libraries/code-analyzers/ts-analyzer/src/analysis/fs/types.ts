export interface FileFsUnit {
  type: 'file'
  filepath: string
  relativePath: string
  filename: string
}
export interface FolderFsUnit {
  type: 'folder'
  filepath: string
  relativePath: string
  foldername: string
}
export interface ErrorFsUnitResult {
  type: 'error',
  error: Error
}

export type FileOrFolderFsUnit = FileFsUnit | FolderFsUnit
export type FsUnit = FileOrFolderFsUnit | ErrorFsUnitResult

export type FsUnitsCallback = (unit: FsUnit) => void