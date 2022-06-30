import path from 'path'
import ts from 'typescript'
import { createServer, InlineConfig } from 'vite'
import { analyzeSourceFile } from './analyzeSourceFile'
import { tsAnalyzerVitePlugin } from './vite/tsAnalyzerVitePlugin'

interface AnalyzeFileParams {
  file: string
  path: string
}

export async function analyzeFile({ file, path: projPath }: AnalyzeFileParams) {
  const viteConfig = <InlineConfig>{
    optimizeDeps: {
      disabled: true,
    },
    base: projPath,
    root: projPath,
    plugins: await tsAnalyzerVitePlugin(),
  }

  const server = await createServer(viteConfig)
  await server.pluginContainer.buildStart({})

  // const testid = '/Users/alexandermykulych/Dev/coya/libraries/code-analyzers/ts-analyzer/test/analysis/cases/04_vue/cmp.vue'
  // const res = await server.transformRequest(testid)
  // console.log(res.code)
  // const test = await server.transformRequest(testid, { ssr: false })
  // const module = server.moduleGraph.getModuleById(testid)


  const confPath = path.resolve(projPath, 'tsconfig.json')
  const { config } = ts.readConfigFile(confPath, ts.sys.readFile)
  const { options, fileNames } = ts.parseJsonConfigFileContent(config, ts.sys, projPath)

  options.noEmit = true
  options.skipLibCheck = true
  // const host = ts.createCompilerHost(options)
  const host = ts.createWatchCompilerHost(
    fileNames,
    options,
    ts.sys,
  );

  const cache = new Map<string, string>()
  const viteWaitings: Promise<void>[] = []

  host.watchFile = function(path: string, callback: ts.FileWatcherCallback, pollingInterval?: number, options?: ts.CompilerOptions): ts.FileWatcher {
    const prepPath = path.replace('.vue.ts', '.vue')
    const viteWaiting = server.transformRequest(prepPath)
    .then(val => {
      if (val && val.code) {
        cache.set(path, val.code)
        callback(path, ts.FileWatcherEventKind.Changed)
      }
    })
    viteWaitings.push(viteWaiting)

    return {
      close: () => {},
    }
  }
  const readFileOld = host.readFile
  host.readFile = function (fileName: string, encoding?: string | undefined): string | undefined {
    if (cache.has(fileName)) {
      console.log('readFile:', fileName)
      return cache.get(fileName)!
    }
    if (fileName.endsWith('.vue.ts')) {
      console.log('readFile:', fileName)
      return 'export default null'
    }
    return readFileOld(fileName, encoding)
  }

  const fileExistsOld = host.fileExists
  host.fileExists = function(path: string): boolean {
    if (path.endsWith('.vue.ts')) {
      return fileExistsOld(path.replace('.ts', ''))
    }
    return fileExistsOld(path)
  }

  const watchProgram = ts.createWatchProgram(host)

  await Promise.all(viteWaitings)

  const program = watchProgram.getProgram().getProgram()
  
  const checker = program.getTypeChecker()

  const rootFile = program.getRootFileNames().find(x => x.endsWith(file))!
  const sourceFile = program.getSourceFile(rootFile)!
  console.log('files', program.getSourceFiles().map(x => x.fileName).filter(x => x.indexOf('.pnpm') < 0))
  const codeInfos = analyzeSourceFile({
    sourceFile,
    checker,
  })

  await server.close()
  watchProgram.close()
  return codeInfos
}
