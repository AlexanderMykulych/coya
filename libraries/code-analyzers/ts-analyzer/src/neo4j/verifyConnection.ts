import type { Driver } from 'neo4j-driver'
import { progress } from '../progress/progress'

export function getVerifyConnectionFn(driver: Driver) {
  function verifyConnection() {
    return driver.verifyConnectivity()
  }
  return progress('neo4j. verify', verifyConnection)
}
