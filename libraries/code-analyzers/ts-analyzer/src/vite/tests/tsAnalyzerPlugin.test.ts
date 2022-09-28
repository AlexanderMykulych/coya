import { createServer } from 'vite'
import { test, expect } from 'vitest'
import { tsAnalyzerPlugin } from '../tsAnalyzerPlugin'
import fp from 'find-free-port'
import { resolve } from 'path'
import { chromium } from 'playwright'

test('should run vite', async () => {

  const [port] = await fp(3000, 5000)
  const server = await createServer({
    plugins: [
      tsAnalyzerPlugin({
        basePath: __dirname,
        transform: {
          startInject: args => `__logStart(${args})`,
          endInject: args => `__logEnd(${args})`,
        },
      }),
    ],
    root: resolve(__dirname, './projects/project1'),
    server: {
      port,
    }
  })

  await server.listen()

  const browser = await chromium.launch({
    headless: true,
  })

  const page = await browser.newPage()
  await page.addInitScript(() => {
    const resultStart = []
    const resultEnd = []

    window.__logStart = (info) => resultStart.push(info)
    window.__logEnd = (info) => resultEnd.push(info)
    window.__getLogStart = () => resultStart
    window.__getLogEnd = () => resultEnd
  })

  await page.goto(`http://localhost:${port}`)
  const [start, end] = await page.evaluate(() => [window.__getLogStart(), window.__getLogEnd()])

  // await page.waitForTimeout(50000)
  await page.close()
  await browser.close()
  await server.close()

  expect(start).toEqual(expect.arrayContaining([
    expect.stringContaining('main.ts/f1'),
    expect.stringContaining('utils.ts/sum'),
    expect.stringContaining('utils.ts/calculator/getNumber'),
  ]))
  expect(end).toEqual(expect.arrayContaining([
    expect.stringContaining('main.ts/f1'),
    expect.stringContaining('utils.ts/sum'),
    expect.stringContaining('utils.ts/calculator/getNumber'),
  ]))
})
