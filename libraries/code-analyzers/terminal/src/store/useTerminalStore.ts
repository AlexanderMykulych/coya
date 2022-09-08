import { ref } from 'vue-termui'
import { insertProjectInfoToDb, Neo4jStatus, useNeo4j } from 'coya-ts-analyzer'
import { resolve } from 'path'
import analyzer from '../workers/analyzer/analyzer'

const workingDir = ref(resolve(process.cwd(), '../ts-analyzer'))
export function useTerminalStore() {
  const db = analyzer
  const dbInfo = ref<Neo4jStatus | null>(null)
  const codeInfo = ref<any>(null)

  const startAnalyse = async () => {
    dbInfo.value = await db.verifyConnection()

    // codeInfo.value = await insertProjectInfoToDb(workingDir.value)
  }

  return {
    workingDir,
    dbInfo,
    startAnalyse,
    codeInfo,
  }
}