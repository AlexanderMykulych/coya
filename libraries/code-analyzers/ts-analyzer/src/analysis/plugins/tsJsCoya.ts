import { relative } from "path";
import { Project } from "ts-morph";
import type { AnalysisContext } from "../context/analysisContext";
import { processFile } from "../project/analyzeProject";
import { readFile } from "../project/getEntryPoint";
import { analyzeSourceFile } from "../source-file/analyzeSourceFile";
import { definePlugin } from "./definePlugin";

export default definePlugin({
  name: 'ts-js-coya',
  // matchFolders: (context: AnalysisContext) =>
  //   context.getFolders(x => x.containsFile('package.json')),
  matchFolders: (context) =>
    context.getFolders(x => x.folder.relativePath === '.'),
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

        project.createSourceFile(
          relative(context.rootDir, processedFile.file),
          `
              /* coya-meta:${JSON.stringify(fileUnit)} */
              ${processedFile.text}
              `,
        )
      }
    }

    const codeInfos = project
      .getSourceFiles()
      .flatMap(x => analyzeSourceFile(x))

    await context.addCodeInfos(codeInfos)
  }
})
