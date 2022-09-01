import neo4j from 'neo4j-driver'
import type { Driver } from 'neo4j-driver'
import { getVerifyConnectionFn } from './verifyConnection'
import { getInsertCodeInfosFn } from './insertCodeInfos'
import { getReadFn } from './read'

let driver: Driver
const database = 'neo4j'
export function useNeo4j() {

  driver ??= neo4j.driver('neo4j://localhost:7687', neo4j.auth.basic('neo4j', 'test'))

  return {
    verifyConnection: getVerifyConnectionFn(driver),
    async init() {
      const session = driver.session({ database })
      await session.writeTransaction(tx => {
        tx.run(`MATCH (n) DETACH DELETE n`)
      })

      await session.close()
    },
    insertCodeInfos: getInsertCodeInfosFn(driver, database),
    read: getReadFn(driver, database),
  }
}
