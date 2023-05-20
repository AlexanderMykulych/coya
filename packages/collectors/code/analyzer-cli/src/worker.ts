import { useNeo4j, insertProjectInfoToDb as analyze, addTracker, TrackType, AnalysisConfig } from 'coya-ts-analyzer'
import { createMainRpc } from './workerRpc'
import type { MessagePort } from 'worker_threads'

const db = useNeo4j()
export function verifyConnection() {
  return db.verifyConnection()
}

export type WorkerInsertContext = {
  port?: MessagePort
  path: string
  config?: AnalysisConfig
}

export function insertProjectInfoToDb({ path, port, config }: WorkerInsertContext) {
  const { rpc } = createMainRpc({ port })

  addTracker(rpc.track, {
    filter: {
      type: TrackType.AnalyzeSourceFile,
    },
  })

  return analyze(path, { config })
}
