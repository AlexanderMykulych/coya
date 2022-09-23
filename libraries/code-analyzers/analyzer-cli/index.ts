import 'ts-node/register'
import cac from 'cac'
import { createServer, ViteDevServer } from 'vite'
import { useAnalyzer } from './src/useAnalyzer'
import { resolve } from 'path'
import { WebSocket, WebSocketServer } from 'ws'
import { createBirpc } from 'birpc'
import type { CliServerApi, MentalWebApi } from 'coya-analyzer-shared-types'
import { readFile } from 'fs/promises'

const cli = cac('coya')

const { verifyConnection, insertProjectInfoToDb } = useAnalyzer()

cli
  .command('dev', 'Start dev server')
  .option('--clear-screen', 'Clear screen')
  .option('--path', 'Project path', {
    // default: '/Users/alexandermykulych/repo/plich/user-web-test',
    default: process.cwd()
  })
  .action(async (options) => {
    console.log(options);

    const state = await verifyConnection()
    console.log(state);
    // await insertProjectInfoToDb(options.path)
    console.log('analyzed')

    await runMentalModelWebApp()
  })

const args = cli.parse()

console.log('run with params', args)
async function runMentalModelWebApp() {
  try {
    const server = await createServer({
      root: resolve(__dirname, '../mental-project/'),
    })

    await server.listen()

    await createWebSocket(server)


    server.printUrls()
  } catch (e) {
    console.error(e)

    process.exit(1)
  }
}

function createWebSocket(server: ViteDevServer) {
  const API_PATH = '/__coya_api__'
  const wss = new WebSocketServer({ noServer: true })

  server.httpServer?.on('upgrade', (request, socket, head) => {
    if (!request.url)
      return

    const { pathname } = new URL(request.url, 'http://localhost')
    if (pathname !== API_PATH)
      return

    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request)
      setupClient(ws)
    })
  })
}

function setupClient(ws: WebSocket) {
  const rpc = createBirpc<MentalWebApi, CliServerApi>({
    ping(msg: string) {
      return `pong from cli (${msg})`
    },
    async getFileById(id: string): Promise<string> {
      const path = resolve(__dirname, `.${id}`)
      console.log(path);

      const textBuff = await readFile(path, {
        flag: 'r',
        encoding: 'utf-8',
      })

      return textBuff.toString()
    },
    async runAnalyze() {
      const path = process.cwd()
      console.log('run analyzation: ', path);

      try {
        await insertProjectInfoToDb(path)
      }
      catch (e) {
        console.log(e);
      }
      finally {

        console.log('end analyzation');
      }
    }
  }, {
    post: msg => ws.send(msg),
    on: fn => ws.on('message', fn),
    serialize: v => JSON.stringify(v),
    deserialize: v => JSON.parse(v),
  },)

  return rpc
}

