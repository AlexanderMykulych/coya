import 'ts-node/register'
import cac from 'cac'
import { createServer } from 'vite'
import { resolve } from 'path'
import { useAnalyzer } from './src/useAnalyzer.ts'
import { fileURLToPath } from 'url'

const cli = cac('coya')

const { verifyConnection, insertProjectInfoToDb } = useAnalyzer()

cli
  .command('dev', 'Start dev server')
  .option('--clear-screen', 'Clear screen')
  .option('--path', 'Project path', { default: process.cwd() })
  .action(async (options) => {
    console.log(options);

    const state = await verifyConnection()
    console.log(state);
    await insertProjectInfoToDb()
    console.log('analyzed')

    await runMentalModelWebApp()
  })

cli.parse()

async function runMentalModelWebApp() {
  try {
    const server = await createServer({
      root: fileURLToPath(new URL('../mental-project/', import.meta.url)),
    })

    await server.listen()

    server.printUrls()
  } catch (e) {
    console.error(e)

    process.exit(1)
  }
}

