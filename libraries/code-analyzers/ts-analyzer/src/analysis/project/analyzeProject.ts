import path from "path"
import { Project } from "ts-morph"
import { processors } from "../processors"
import { fileTraverser } from "../import/fileTraverser"
import { analyzeSourceFile } from "../source-file/analyzeSourceFile"
import { CodeInfo, FileProcessor, FileText } from "../types"
import { getEntryPoint, readFile } from "./getEntryPoint"
import { deduplicate } from "./deduplicate"

export async function analyzeProject(projPath: string): Promise<CodeInfo[]> {
  var project = new Project({
    useInMemoryFileSystem: true,
    compilerOptions: {
      allowJs: true,
    },
    skipLoadingLibFiles: true,
    skipFileDependencyResolution: true,
  })

  const entryFile = await getEntryPoint(projPath)
  if (entryFile) {
    const entrySourceFile = project.createSourceFile(entryFile.file, entryFile.text)

    await fileTraverser(entrySourceFile, async (filePath) => {
      const file = await readFile(path.resolve(projPath, filePath), projPath)
      if (file) {
        const processedFile = await processFile(file)

        return project.createSourceFile(processedFile.file, processedFile.text)
      }
    })

    const codeInfos = project
      .getSourceFiles()
      .flatMap(x => analyzeSourceFile(x))

    return deduplicate(codeInfos)
  }
  return []
}


async function processFile(file: FileText) {
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
  } while (!!processor)

  return resultFile
}
