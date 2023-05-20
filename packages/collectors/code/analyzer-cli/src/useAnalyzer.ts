import { resolve } from 'path'
import { Tinypool } from 'tinypool'
import { ref } from "@vue/reactivity"
import type { Logger } from 'pino'
import { createWorkerRpc } from './workerRpc'
import type { Tracker } from 'coya-ts-analyzer'
import type { WorkerInsertContext } from './worker'

export type RunData = {
  methodName: string
}

export interface WorkerFunctions {
  close: () => Promise<void>
  run: (data: { methodName: string }) => Promise<any>
}

const currentPath = __dirname
const workerRunnerPath = resolve(__dirname, '../node_modules/coya-ts-analyzer-worker/dist/coya-ts-analyzer-worker.es.js')
const pool = new Tinypool({
  filename: workerRunnerPath,
})

// const workingDir = ref(resolve(__dirname, '../examples/project1'))
// const workingDir = ref(resolve(__dirname, '../../ts-analyzer'))
const workingDir = ref('/Users/alexandermykulych/repo/plich/user-web-test')
// const workingDir = ref('/Users/alexandermykulych/Dev/my-vitesse')
// const workingDir = ref(resolve(process.cwd(), '.'))

type UseAnalyzerOptions = {
  logger: Logger
  onTrack?: Tracker
}

export function useAnalyzer(analyzerOptions: UseAnalyzerOptions) {
  const { logger: log, onTrack } = analyzerOptions
  return {
    workingDir,
    verifyConnection() {
      log.info('run verifyConnection')
      return run({
        method: 'verifyConnection',
        log,
        onTrack,
      })
    },
    insertProjectInfoToDb(path?: string) {
      log.info('run insertProjectInfoToDb')
      return run({
        method: 'insertProjectInfoToDb',
        methodParameter: <WorkerInsertContext>{
          path: path ?? workingDir.value,
          config: {
            // filesToAnalyze: ['/src/**'],
            doNotSaveResultInMemory: false,
          },
        },
        voidResult: true,
        log,
        onTrack,
      })
    },
  }
}

type RunOptions =  {
  method: string
  methodParameter?: any
  voidResult?: boolean
  log: Logger
  onTrack: Tracker
}

export function run({ method, methodParameter, voidResult, log, onTrack }: RunOptions) {
  const { port } = createWorkerRpc({
    log,
    onTrack,
  })

  return pool.run({
    fileName: './worker.ts',
    basePath: currentPath,
    method,
    methodParameter: {
      ...methodParameter,
      port,
    },
    voidResult,
  }, {
    name: 'run',
    transferList: [port],
  })
}