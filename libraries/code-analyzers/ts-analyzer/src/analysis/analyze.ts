import path from 'path'
import { analyzeSourceFile } from './source-file/analyzeSourceFile'
import { Project } from 'ts-morph'
import { CodeInfo } from './types'
import { readFile } from './file/readFile'

interface AnalyzeFileParams {
  file: string
  path: string
}

export async function analyze({ file, path: projPath }: AnalyzeFileParams): Promise<CodeInfo[]> {
  const project = new Project({
    useInMemoryFileSystem: true,
    tsConfigFilePath: path.resolve(projPath, 'tsconfig.json'),
    compilerOptions: {
      noEmit: true,
      allowJs: true,
    },
  })

  const content = await readFile(path.resolve(projPath, file))
  const sourceFile = project.createSourceFile(file, content)

  const codeInfos = analyzeSourceFile({
    sourceFile: sourceFile,
    project,
  })

  return codeInfos
}
