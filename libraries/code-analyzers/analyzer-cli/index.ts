import 'ts-node/register'
import cac from 'cac'
import { createServer, ViteDevServer } from 'vite'
import { useAnalyzer } from './src/useAnalyzer'
import { resolve } from 'path'
import { WebSocketServer } from 'ws'
import { createRpc } from './src/rpc'
import { cliLogger } from './src/logger'
import { setLoggerRpc } from './src/loggerTransport'

const cli = cac('coya')

const { verifyConnection, insertProjectInfoToDb } = useAnalyzer({
  logger: cliLogger,
})

cli
  .command('dev', 'Start dev server')
  .option('--clear-screen', 'Clear screen')
  .option('--path', 'Project path', {
    // default: '/Users/alexandermykulych/repo/plich/user-web-test',
    // default: process.cwd()
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

cliLogger.info(args, 'run with params')
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
      const rpc = createRpc(ws, {
        logger: cliLogger,
      })

      setLoggerRpc(rpc)
    })
  })
}

