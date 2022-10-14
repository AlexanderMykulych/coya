import type { WebSocket } from 'ws'
import { createBirpc } from 'birpc'
import type { CliServerApi, MentalWebApi } from 'coya-analyzer-shared-types'
import { readFile } from 'fs/promises'
import { useAnalyzer } from './useAnalyzer'
import { resolve } from 'path'
import { analyzeCode, CodeInfo, CodeInfoType, FsTree, getAllFSUnitsTree } from 'coya-ts-analyzer'
import type { Logger } from 'pino'

type CreateRpcOptions = {
  logger: Logger
}

export function createRpc(ws: WebSocket, options: CreateRpcOptions) {
  const { logger: log } = options
  const { insertProjectInfoToDb, workingDir } = useAnalyzer({
    logger: log,
  })

  const ping = (msg: string) => {
    return `pong from cli (${msg})`
  }

  const getFileById = async (id: string): Promise<string> => {
    const path = resolve(workingDir.value, `./${id}`)

    log.info({workingDir: workingDir.value, id, path}, 'run getFileById')

    const textBuff = await readFile(path, {
      flag: 'r',
      encoding: 'utf-8',
    })

    return textBuff.toString()
  }

  const runAnalyze = async () => {
    log.info({ workingDir: workingDir.value }, 'runAnalyze start')

    try {
      await insertProjectInfoToDb(workingDir.value)
    }
    catch (e) {
      console.log(e);
      
      log.error({ error: e }, 'runAnalyzer error')
    }
    finally {
      log.info('runAnalyzer end')
    }
  }

  const runTestAnalyze = async (fileName: string): Promise<CodeInfo[]> => {
    log.info({ fileName }, 'runTestAnalyze start')

    try {
      const code = await getFileById(fileName)
      const res = await analyzeCode({
        code,
        fileName,
      })

      log.info({
        allCount: res.length,
        entitiesCount: res.filter(x => x.type === CodeInfoType.Entity).length,
        relationsCount: res.filter(x => x.type === CodeInfoType.Relationship).length,
      }, 'runTestAnalyze result')

      return res
    } catch(e) {
      log.error({ error: e }, 'runTestAnalyze error')
    } finally {
      log.info('runTestAnalyze end')
    }
  }

  const getFSTree = async (): Promise<FsTree> => {
    return await getAllFSUnitsTree(workingDir.value)
  }

  const rpc = createBirpc<MentalWebApi, CliServerApi>({
    ping,
    getFileById,
    runAnalyze,
    runTestAnalyze,
    workingDir: () => workingDir.value,
    getFSTree,
  }, {
    post: msg => ws.send(msg),
    on: fn => ws.on('message', fn),
    serialize: v => JSON.stringify(v),
    deserialize: v => JSON.parse(v),
  },)

  return rpc
}