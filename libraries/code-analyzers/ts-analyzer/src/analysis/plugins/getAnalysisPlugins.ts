import { Project } from "ts-morph";
import type { AnalysisContext } from "../context/analysisContext";
import { FileFsUnit, FolderFsUnit } from "../fs/types";
import { analyzeProject, processFile } from "../project/analyzeProject";
import { deduplicate } from "../project/deduplicate";
import { readFile } from "../project/getEntryPoint";
import { analyzeSourceFile } from "../source-file/analyzeSourceFile";

export interface AnalysisPlugin {
  name: string
  init?: (context: AnalysisContext) => Promise<void>
  run: (context: AnalysisContext) => Promise<void>
  matchFolders: (context: AnalysisContext) => Promise<FolderFsUnit[]>
}

export function getAnalysisPlugins(): AnalysisPlugin[] {
  return [
    {
      name: 'ts-js-coya',
      matchFolders: (context: AnalysisContext) =>
        context.filterFolders(x => x.containsFile('package.json')),
      async run(context: AnalysisContext): Promise<void> {
        const project = new Project({
          useInMemoryFileSystem: true,
          compilerOptions: {
            allowJs: true,
            rootDir: context.rootDir,
          },
          skipLoadingLibFiles: false,
        })

        for await (const fileUnit of context.files) {
          const file = await readFile(fileUnit.filepath)
          if (file) {
            const processedFile = await processFile(file)

            project.createSourceFile(processedFile.file, processedFile.text)
          }
        }

        const codeInfos = project
          .getSourceFiles()
          .flatMap(x => analyzeSourceFile(x))

        await context.addCodeInfos(codeInfos)
      }
    },
  ]
}
