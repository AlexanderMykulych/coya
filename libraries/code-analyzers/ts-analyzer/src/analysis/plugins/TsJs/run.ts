import { relative } from "path"
import { Project } from "ts-morph"
import { trackFnAsync } from "../../../progress/trackFn"
import { TrackType } from "../../../progress/trackTypes"
import { analyzeSourceFile } from "../../source-file/analyzeSourceFile"
import { addSourceFileToProject } from "./addSourceFileToProject"
import { processFile } from "./plugins/processFile"
import mm from 'micromatch'
import type { TsJsAnalysisContext } from "./types"

async function _run(context: TsJsAnalysisContext): Promise<void> {
  const project = new Project({
    useInMemoryFileSystem: true,
    compilerOptions: {
      allowJs: true,
      rootDir: context.rootDir,
    },
    skipLoadingLibFiles: true,
  })

  for(const fileUnit of context.files) {
    const path = relative(context.rootDir, fileUnit.filepath)
    if (!!project.getSourceFile(sf => sf.getFilePath() === path)) {
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
              sourceMap: processedFile.maps,
            })
          }

          addSourceFileToProject(project, relativeNewFile, processedFile.text)
        }
      }
    }
  }

  const config = context.store.get('_config', {})

  project
    .getSourceFiles()
    .sort((s1, s2) => s1.getFilePath() > s2.getFilePath() ? -1 : 1)
    .flatMap(x => {
      const sourceFilePath = x.getFilePath()
      if (config?.filesToAnalyze && !mm.isMatch(sourceFilePath, config.filesToAnalyze)) {
        return []
      }

      const originalSourceName = context.store
        .get('files', [])
        .find(y => y.resultFile === sourceFilePath)
        ?.originFile

      return analyzeSourceFile(x, {
        context: {
          async addCodeInfo(codeInfo) {
            if (!Array.isArray(codeInfo)) {
              codeInfo = [codeInfo]
            }

            await context.addCodeInfos(codeInfo)
          },
          originalSourceName,
        },
      })
    })
}

// export const run = progress('ts-js. run', _run)
export const run = trackFnAsync(
  _run,
  {
    name: 'run ts-js',
    type: TrackType.Analyzer,
    objectExtractor: () => ({
      msg: 'TS-JS',
    }),
  },
)
