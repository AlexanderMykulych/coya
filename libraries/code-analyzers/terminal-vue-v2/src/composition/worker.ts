import { useNeo4j, insertProjectInfoToDb as analyze } from 'coya-ts-analyzer'

const db = useNeo4j()
export function verifyConnection() {
  return db.verifyConnection()
}

export function insertProjectInfoToDb(path: string) {
  return analyze(path)
}


export function runServer() {

}