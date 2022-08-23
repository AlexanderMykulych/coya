import { Project } from 'ts-morph'
import { processors } from '../processors'
import { analyzeSourceFile } from '../source-file/analyzeSourceFile'
import type { CodeInfo, FileProcessor, FileText } from '../types'
import { deduplicate } from './deduplicate'
import { initializeProject } from './initializeProject'

export async function analyzeProject(projPath: string): Promise<CodeInfo[]> {

  const project = new Project({
    useInMemoryFileSystem: true,
    compilerOptions: {
      allowJs: true,
      rootDir: projPath,
    },
    skipLoadingLibFiles: false,
  })

  if (await initializeProject(projPath, project, 'custom')) {
    const codeInfos = project
      .getSourceFiles()
      .flatMap(x => analyzeSourceFile(x))

    return deduplicate(codeInfos)
  }
  return []
}

export async function processFile(file: FileText) {
  let resultFile: FileText = file
  let notUsedProcessors = [
    ...processors,
  ]
  let processor: FileProcessor | undefined

  do {
    processor = notUsedProcessors.find(x => x.isMatch(file))

    if (processor) {
      notUsedProcessors = notUsedProcessors.filter(x => x !== processor)
      resultFile = await processor.process(file)
    }
  } while (processor)

  return resultFile
}
