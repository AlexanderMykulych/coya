import { isNullOrUndefined } from "coya-util";
import { readdir, stat } from "fs/promises";
import { basename, join, relative } from "path";
import { progress } from "../../progress/progress";
import { isIgnoredPath } from "../plugins/ignore";
import type { FileOrFolderFsUnit, FsTree, FsUnit, FsUnitsCallback } from "./types";

export async function getAllFSUnits(basePath: string, callback: FsUnitsCallback) {
  const getAll = async (path: string) => {
    const dir = basename(path)
    if (isIgnoredPath(dir)) {
      return
    }

    var parentRelativePath = relative(basePath, path)

    try {
      const files = await readdir(path)

      for (const filename of files) {
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
          }, parentRelativePath);
        } else {
          callback({
            type: 'file',
            filepath,
            relativePath,
            filename
          }, parentRelativePath);
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

export async function getAllFSUnitsTree(basePath: string): Promise<FsTree> {
  const result: Record<string, FsTree> = {}
  
  const getName = (path: string) => {
    const index = path.lastIndexOf('/')
    if (index > -1) {
      return path.substring(index)
    }
    return path
  }

  const getItem = (path: string) => {
    let item = result[path]
    if (!item) {
      item = result[path] = { name: getName(path), path, children: [] }
    }
    return item
  }

  await getAllFSUnits(basePath, (unit, parent) => {
    if (unit.type === "error" || isNullOrUndefined(parent)) {
      return
    }

    let parentItem = getItem(parent)
    let unitItem = getItem(unit.relativePath)

    parentItem.children.push(unitItem)
  })
  const tree = {
    name: '/',
    path: '/',
    children: result[''].children,
  }

  markTreeSize(tree)

  return tree
}

export const getAllFSUnitsFlat = progress('fs. getAllFSUnitsFlat', _getAllFSUnitsFlat)

function markTreeSize(tree: FsTree) {
  const walker = (item: FsTree): number => {
    let sum = 0

    if (item.children.length > 0) {
      item.children.forEach(x => sum += walker(x))
    } else {
      sum = 1
    }

    item.value = sum
    return sum
  }

  walker(tree)
}
