import type { WebSocket } from 'ws'
import { createBirpc } from 'birpc'
import type { CliServerApi, MentalWebApi } from 'coya-analyzer-shared-types'
import { readFile } from 'fs/promises'
import { useAnalyzer } from './useAnalyzer'
import { resolve } from 'path'
import { analyzeCode, CodeInfo } from 'coya-ts-analyzer'

const { verifyConnection, insertProjectInfoToDb, workingDir } = useAnalyzer()

export function createRpc(ws: WebSocket) {
  const ping = (msg: string) => {
    return `pong from cli (${msg})`
  }

  const getFileById = async (id: string): Promise<string> => {
    const path = resolve(workingDir.value, `./${id}`)
    console.log('workingDir:', workingDir.value, id);
    console.log(path);

    const textBuff = await readFile(path, {
      flag: 'r',
      encoding: 'utf-8',
    })

    return textBuff.toString()
  }

  const runAnalyze = async () => {
    console.log('run analyzation: ', workingDir.value);

    try {
      await insertProjectInfoToDb(workingDir.value)
    }
    catch (e) {
      console.log(e);
    }
    finally {

      console.log('end analyzation');
    }
  }

  const runTestAnalyze = async (fileName: string): Promise<CodeInfo[]> => {
    const code = await getFileById(fileName)
    return await analyzeCode({
      code,
      fileName,
    })
  }

  const rpc = createBirpc<MentalWebApi, CliServerApi>({
    ping,
    getFileById,
    runAnalyze,
    runTestAnalyze,
  }, {
    post: msg => ws.send(msg),
    on: fn => ws.on('message', fn),
    serialize: v => JSON.stringify(v),
    deserialize: v => JSON.parse(v),
  },)

  return rpc
}