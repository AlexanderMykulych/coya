import { resolve } from 'path'
import { Tinypool } from 'tinypool'
import _url from 'url'
import { useAsyncState } from '@vueuse/core'
import { ref } from 'vue-termui'

export type RunData = {
  methodName: string
}

export interface WorkerFunctions {
  close: () => Promise<void>
  run: (data: { methodName: string }) => Promise<any>
}

const pool = new Tinypool({
  filename: _url.pathToFileURL(resolve(__dirname, '../../node_modules/coya-ts-analyzer-worker/dist/coya-ts-analyzer-worker.es.js')).href
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
  return useAsyncState(
    () => pool.run({
      fileName: './worker.ts',
      basePath: __dirname,
      method,
      methodParameter,
      voidResult,
    }, {
      name: 'run',
    }),
    null,
    {
      immediate: true,
    },
  )
}