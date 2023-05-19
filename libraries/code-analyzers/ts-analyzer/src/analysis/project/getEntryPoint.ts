import { stat, readFile as fsReadFile } from "fs/promises";
import path from "path";
import { progress } from "../../progress/progress";
import type { FileText } from "../types";
import { getRelativePath } from "./getRelativePath";

const entryFiles = ['index.js', 'index.ts'] as const

export async function getEntryPoint(projectPath: string): Promise<FileText | null> {
  for (const file of entryFiles) {
    const filePath = path.resolve(projectPath, file)
    try {
      const res = await stat(filePath)
      if (res) {
        return await readFile(filePath, projectPath)
      }
    } catch (e) {

    }
  }
  return null
}


async function _readFile(filePath: string, basePath?: string): Promise<FileText | null> {
  if (!path.extname(filePath)) {
    filePath = `${filePath}.ts`
  }
  try {
    const textBuff = await fsReadFile(filePath, {
      flag: 'r',
      encoding: 'utf-8',
    })
    return {
      file: basePath ? getRelativePath(basePath, filePath) : filePath,
      text: textBuff.toString(),
    }
  } catch (e) {
    console.log(`error in file: ${filePath}`)
    console.error(e)
  }

  return null
}

export const readFile = progress('readFile', _readFile)