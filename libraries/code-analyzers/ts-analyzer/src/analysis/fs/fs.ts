import { readdir, stat } from "fs/promises";
import { basename, join, relative } from "path";
import { progress } from "../../progress/progress";
import type { FileOrFolderFsUnit, FsUnit, FsUnitsCallback } from "./types";

const bannedDirs = [
  '.history',
  'node_modules',
  '.git',
]

export async function getAllFSUnits(basePath: string, callback: FsUnitsCallback) {
  const getAll = async (path: string) => {
    const dir = basename(path)
    if (bannedDirs.includes(dir)) {
      return
    }
  
    try {
      const files = await readdir(path)

      for await (const filename of files) {
        var filepath = join(path, filename);
  
        const stats = await stat(filepath)
  
        var relativePath = relative(basePath, filepath);
  
        if (stats.isDirectory()) {

          await getAll(filepath);
          callback({
            type: 'folder',
            filepath,
            relativePath,
            foldername: basename(filepath),
          });
        } else {
          callback({
            type: 'file',
            filepath,
            relativePath,
            filename
          });
        }
      }
    } catch(error: any) {
      callback({
        type: 'error',
        error,
      })
    }
  }

  await getAll(basePath)
  callback({
    type: 'folder',
    filepath: basePath,
    relativePath: '.',
    foldername: '<root>',
  })
}

async function _getAllFSUnitsFlat(basePath: string, withErrors: true): Promise<FsUnit[]>
async function _getAllFSUnitsFlat(basePath: string): Promise<FileOrFolderFsUnit[]>
async function _getAllFSUnitsFlat(basePath: string, withErrors?: true): Promise<(FsUnit | FileOrFolderFsUnit)[]> {
  const results: FsUnit[] = []

  await getAllFSUnits(basePath, unit => results.push(unit))

  return withErrors
    ? results
    : results
      .filter((x): x is FileOrFolderFsUnit => x.type === 'file' || x.type === 'folder')
}

export const getAllFSUnitsFlat = progress('fs. getAllFSUnitsFlat', _getAllFSUnitsFlat)