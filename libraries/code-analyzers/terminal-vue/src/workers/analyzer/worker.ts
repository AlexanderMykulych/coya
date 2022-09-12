import { useNeo4j } from "coya-ts-analyzer";

const db = useNeo4j()

export function verifyConnection() {
  return db.verifyConnection()
}
