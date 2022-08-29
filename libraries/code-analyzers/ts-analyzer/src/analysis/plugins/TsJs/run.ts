import { relative } from "path"
import { Project } from "ts-morph"
import { readFile } from "../../project/getEntryPoint"
import { analyzeSourceFile } from "../../source-file/analyzeSourceFile"
import { processFile } from "./plugins/processFile"
import type { TsJsAnalysisContext } from "./types"

export async function run(context: TsJsAnalysisContext): Promise < void> {
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

    const file = await readFile(fileUnit.filepath)
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

        project.createSourceFile(
          relativeNewFile,
          processedFile.text,
          {
            overwrite: true,
          },
        )
      }
    }
  }

  const codeInfos = project
    .getSourceFiles()
    .flatMap(x => analyzeSourceFile(x))

  await context.addCodeInfos(codeInfos)
}
