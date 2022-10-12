import { useNeo4j, insertProjectInfoToDb as analyze, addTracker } from 'coya-ts-analyzer'
import { createMainRpc } from './workerRpc'

const db = useNeo4j()
export function verifyConnection() {
  return db.verifyConnection()
}

export type WorkerInsertContext = {
  port: MessagePort
  path: string
}

export function insertProjectInfoToDb({ path, port }: WorkerInsertContext) {
  const { rpc } = createMainRpc({ port })

  addTracker(rpc.track)

  return analyze(path)
}
