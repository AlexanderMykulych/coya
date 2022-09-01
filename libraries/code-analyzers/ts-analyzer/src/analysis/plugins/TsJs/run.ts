import { relative } from "path"
import { Project } from "ts-morph"
import { progress } from "../../../progress/progress"
import { analyzeSourceFile } from "../../source-file/analyzeSourceFile"
import { addSourceFileToProject } from "./addSourceFileToProject"
import { processFile } from "./plugins/processFile"
import type { TsJsAnalysisContext } from "./types"

async function _run(context: TsJsAnalysisContext): Promise<void> {
  const project = new Project({
    useInMemoryFileSystem: true,
    compilerOptions: {
      allowJs: true,
      rootDir: context.rootDir,
    },
    skipLoadingLibFiles: false,
  })

  for await(const fileUnit of context.files) {
    if (project.getSourceFile(relative(context.rootDir, fileUnit.filepath))) {
      continue
    }

    if (fileUnit.filepath.endsWith('.ts') || fileUnit.filepath.endsWith('.vue')) {
      const file = await context.readFile(fileUnit.filepath)
      if (file) {
        const processedFile = await processFile(file, context)

        if (processedFile.file.endsWith('.ts') || processedFile.file.endsWith('.js')) {

          const relativeNewFile = relative(context.rootDir, processedFile.file)
          const relativeOldFile = relative(context.rootDir, file.file)

          if (relativeOldFile !== relativeNewFile) {
            context.store.addToCollection('files', {
              originFile: `/${relativeOldFile}`,
              resultFile: `/${relativeNewFile}`,
            })
          }

          addSourceFileToProject(project, relativeNewFile, processedFile.text)
        }
      }
    }
  }

  const codeInfos = project
    .getSourceFiles()
    .flatMap(x => analyzeSourceFile(x))

  await context.addCodeInfos(codeInfos)
}

export const run = progress('ts-js. run', _run)