import { createServer, ViteDevServer } from "vite"
import { afterAll, beforeAll, describe, test, expect as vi_expect } from "vitest"
import { chromium } from 'playwright'
import type { Browser, Page } from 'playwright'
import { expect } from '@playwright/test'
import { fileURLToPath } from "url"
import { mkdir, writeFile } from "fs/promises"
import path from "path"
import { existsSync } from "fs"
import { diagramGenerator } from "../../src/diagramGenerator/diagramGenerator"


describe('project to diagram', () => {
  let server: ViteDevServer
  let browser: Browser
  let page: Page
  const port = 5991

  beforeAll(async () => {
    const root = fileURLToPath(new URL('../../../mental-project', import.meta.url))

    server = await createServer({
      root,
      configFile: `${root}/vite.config.ts`,
      server: {
        fs: {
          strict: false,
        },
        port,
      }
    })

    await server.listen()
    server.printUrls()
    browser = await chromium.launch({
      headless: true,
    })
    page = await browser.newPage()
  })

  afterAll(async () => {
    await browser.close()
    await server.close()
  })

  test('basic', async () => {
    const fullProjectPath = path.join(__dirname, '/cases/01_simple')

    const { coya } = await diagramGenerator(fullProjectPath)

    await page.goto(`http://localhost:${port}/diagram`)

    await page.evaluate((config) => window.coyaConfig = config, coya)

    await expect(page.locator('.coya-container')).toBeVisible()
    await page.waitForTimeout(1500)

    const screenshoot = await page.screenshot()

    const folder = path.resolve(__dirname, './__screenshots__')

    if (!existsSync(folder)) {
      await mkdir(folder)
    }
    await writeFile(path.resolve(folder, './basic.png'), screenshoot)
  })
})
