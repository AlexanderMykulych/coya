import { relative } from "path";
import { Project } from "ts-morph";
import type { AnalysisContext } from "../context/analysisContext";
import { processFile } from "../project/analyzeProject";
import { readFile } from "../project/getEntryPoint";
import { analyzeSourceFile } from "../source-file/analyzeSourceFile";
import { CodeInfo, CodeInfoType } from "../types";
import { definePlugin } from "./definePlugin";

type FileMap = {
  originFile: string
  resultFile: string
}

export default definePlugin({
  name: 'ts-js-coya',
  matchFolders: (context) =>
    context.getFolders(x => x.folder.relativePath === '.'),
  init(context: AnalysisContext): Promise<void> {
    const normalizeId = (id: string) => {
      const files = context.store.get<FileMap[]>('files', [])
      const fileMap = files.find(x => id.startsWith(x.resultFile))

      return fileMap ? id.replace(fileMap.resultFile, fileMap.originFile) : id
    }

    context.hooks.onBeforeAdd((codeInfo: CodeInfo) => {
      if (codeInfo.type === CodeInfoType.Entity) {
        codeInfo.id = normalizeId(codeInfo.id)
        codeInfo.filePath = normalizeId(codeInfo.filePath)
      } else {
        codeInfo.to = normalizeId(codeInfo.to)
        codeInfo.from = normalizeId(codeInfo.from)
      }
    })

    return Promise.resolve()
  },
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
      if (project.getSourceFile(relative(context.rootDir, fileUnit.filepath))) {
        continue
      }

      const file = await readFile(fileUnit.filepath)
      if (file) {
        const processedFile = await processFile(file)

        if (processedFile.file.endsWith('.ts') || processedFile.file.endsWith('.js')) {

          const relativeNewFile = relative(context.rootDir, processedFile.file)
          const relativeOldFile = relative(context.rootDir, file.file)

          if (relativeOldFile !== relativeNewFile) {
            context.store.addToCollection<FileMap>('files', {
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
})
