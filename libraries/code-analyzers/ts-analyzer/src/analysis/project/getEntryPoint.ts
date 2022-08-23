import { promises as fs } from "fs";
import path from "path";
import { FileText } from "../types";
import { getRelativePath } from "./getRelativePath";

const entryFiles = ['index.js', 'index.ts'] as const

export async function getEntryPoint(projectPath: string): Promise<FileText | null> {
  for await (const file of entryFiles) {
    const filePath = path.resolve(projectPath, file)
    try {
      const res = await fs.stat(filePath)
      if (res) {
        return await readFile(filePath, projectPath)
      }
    } catch (e) {

    }
  }
  return null
}


export async function readFile(filePath: string, basePath?: string): Promise<FileText | null> {
  if (!path.extname(filePath)) {
    filePath = `${filePath}.ts`
  }
  try {
    const textBuff = await fs.readFile(filePath)
    return {
      file: basePath ? getRelativePath(basePath, filePath) : filePath,
      text: textBuff.toString(),
    }
  } catch (e) {
    console.error(e)
  }

  return null
}