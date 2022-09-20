import 'ts-node/register'
import cac from 'cac'
import { createServer } from 'vite'
import { useAnalyzer } from './src/useAnalyzer'
import { resolve } from 'path'

const cli = cac('coya')

const { verifyConnection, insertProjectInfoToDb } = useAnalyzer()

cli
  .command('dev', 'Start dev server')
  .option('--clear-screen', 'Clear screen')
  .option('--path', 'Project path', {
    default: '/Users/alexandermykulych/repo/plich/user-web-test',
    // default: process.cwd()
  })
  .action(async (options) => {
    console.log(options);

    const state = await verifyConnection()
    console.log(state);
    await insertProjectInfoToDb(options.path)
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

    server.printUrls()
  } catch (e) {
    console.error(e)

    process.exit(1)
  }
}

