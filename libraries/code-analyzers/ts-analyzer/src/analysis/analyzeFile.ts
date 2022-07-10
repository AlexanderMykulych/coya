import path from 'path'
import ts from 'typescript'
import { createServer, InlineConfig } from 'vite'
import { analyzeSourceFile } from './analyzeSourceFile'
import { tsAnalyzerVitePlugin } from './vite/tsAnalyzerVitePlugin'
import { Project } from 'ts-morph'

interface AnalyzeFileParams {
  file: string
  path: string
}

export async function analyzeFile({ file, path: projPath }: AnalyzeFileParams) {

  const project = new Project({
    tsConfigFilePath: path.resolve(projPath, 'tsconfig.json'),
    compilerOptions: {
      noEmit: true,
    },
  })

  const sourceFile = project.getSourceFiles().find(x => x.getFilePath().indexOf(file) > -1)!
  console.log('files', project.getSourceFiles().map(x => x.getFilePath()).filter(x => x.indexOf('.pnpm') < 0))

  const codeInfos = analyzeSourceFile({
    sourceFile: sourceFile.compilerNode,
    checker: project.getTypeChecker().compilerObject,
    project,
  })

  return codeInfos
}

export async function analyzeFile_old({ file, path: projPath }: AnalyzeFileParams) {
  const server = await getViteServer(projPath)

  const confPath = path.resolve(projPath, 'tsconfig.json')

  const { config } = ts.readConfigFile(confPath, ts.sys.readFile)
  const { options, fileNames } = ts.parseJsonConfigFileContent(config, ts.sys, projPath)

  options.noEmit = true
  options.skipLibCheck = true
  const host = ts.createWatchCompilerHost(
    fileNames,
    options,
    ts.sys,
  );

  const cache = new Map<string, string>()
  const viteWaitings: Promise<string>[] = []

  host.watchFile = function(path: string, callback: ts.FileWatcherCallback, pollingInterval?: number, options?: ts.CompilerOptions): ts.FileWatcher {
    const prepPath = path.replace('.vue.ts', '.vue')
    const viteWaiting = server.transformRequest(prepPath)
    .then(val => {
      if (val && val.code) {
        cache.set(path, val.code)
        callback(path, ts.FileWatcherEventKind.Changed)
      }
      return path
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

  const sourceFile = program.getSourceFiles().find(x => x.fileName.indexOf(file) > -1)!
  console.log('files', program.getSourceFiles().map(x => x.fileName).filter(x => x.indexOf('.pnpm') < 0))
  const codeInfos = analyzeSourceFile({
    sourceFile,
    checker,
  })

  await server.close()
  watchProgram.close()
  return codeInfos
}
async function getViteServer(projPath: string) {
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
  return server
}

