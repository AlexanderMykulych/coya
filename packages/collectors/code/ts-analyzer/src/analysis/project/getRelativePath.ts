import path from "path"

export function getRelativePath(basePath: string, filePath: string) {
  return path.relative(basePath, filePath)
}
