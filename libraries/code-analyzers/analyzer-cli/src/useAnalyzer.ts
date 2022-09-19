import { resolve } from 'path'
import { Tinypool } from 'tinypool'
import _url, { fileURLToPath } from 'url'
import { ref } from "@vue/reactivity"

export type RunData = {
  methodName: string
}

export interface WorkerFunctions {
  close: () => Promise<void>
  run: (data: { methodName: string }) => Promise<any>
}

const currentPath = fileURLToPath(new URL('.', import.meta.url))
const workerRunnerPath = fileURLToPath(new URL('../node_modules/coya-ts-analyzer-worker/dist/coya-ts-analyzer-worker.es.js', import.meta.url))
const pool = new Tinypool({
  filename: workerRunnerPath,
})

const workingDir = ref(resolve(process.cwd(), '.'))

export function useAnalyzer() {
  return {
    workingDir,
    verifyConnection() {
      return run({
        method: 'verifyConnection',
      })
    },
    insertProjectInfoToDb() {
      return run({
        method: 'insertProjectInfoToDb',
        methodParameter: workingDir.value,
        voidResult: true,
      })
    },
    runServer() {
      return run({
        method: 'runServer',
        methodParameter: workingDir.value,
        voidResult: true,
      })
    },
  }
}

export function run({ method, methodParameter, voidResult }: { method: string, methodParameter?: any, voidResult?: boolean }) {
  return pool.run({
    fileName: './worker.ts',
    basePath: currentPath,
    method,
    methodParameter,
    voidResult,
  }, {
    name: 'run',
  })
}