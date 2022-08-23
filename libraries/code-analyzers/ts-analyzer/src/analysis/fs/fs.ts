import { readdir, stat } from "fs/promises";
import { basename, join, relative } from "path";
import type { FsUnit, FsUnitsCallback } from "./types";

export async function getAllFSUnits(basePath: string, callback: FsUnitsCallback) {
  const getAll = async (path: string) => {
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
}

export async function getAllFSUnitsFlat(basePath: string): Promise<FsUnit[]> {
  const results: FsUnit[] = []

  await getAllFSUnits(basePath, unit => results.push(unit))

  return results
}