import { createServer, ViteDevServer } from "vite"
import { afterAll, beforeAll, describe, test, expect as vi_expect } from "vitest"
import { chromium } from 'playwright'
import type { Browser, Page } from 'playwright'
import { expect } from '@playwright/test'
import { fileURLToPath } from "url"
import { mkdir, writeFile } from "fs/promises"
import path from "path"
import { existsSync } from "fs"
import fp from 'find-free-port'
import { generateCoyaDiagram } from "../../src/diagramGenerator/generateCoyaDiagram"


describe
  .runIf(process.env.WITH_DIAGRAM === 'true')
  ('project to diagram', async () => {
  let server: ViteDevServer
  let browser: Browser
  let page: Page
  const [port] = await fp(3000, 5000)

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
    if (page) {
      await page.close()
    }
    page = await browser.newPage()
    await page.setViewportSize({
      width: 2800,
      height: 1400,
    })
  })

  afterAll(async () => {
    await browser.close()
    await server.close()
  })

  test
    .each([
      {
        projectPath: '/cases/01_simple',
        name: '01_simple',
      },
      {
        projectPath: '/cases/02_function',
        name: '02_function',
      },
      {
        projectPath: '/cases/03_function_relation',
        name: '03_function_relation',
      },
      {
        projectPath: '/cases/04_vue',
        name: '04_vue',
      },
      {
        projectPath: '/cases/05_vite',
        name: '05_vite',
      },
      // {
      //   projectPath: '../../',
      //   name: 'ts-analyzer',
      // },
    ])
    ('should create screenshot for: $name', async ({projectPath, name}) => {
      const fullProjectPath = path.join(__dirname, projectPath)

      const { coya } = await generateCoyaDiagram(fullProjectPath)


      await page.goto(`http://localhost:${port}/diagram`)
      await page.evaluate((config) => window.coyaConfig = config, coya)

      await expect(page.locator('.coya-container')).toBeVisible({timeout: 150_000})
      await page.waitForTimeout(500)

      const screenshoot = await page.screenshot()

      const folder = path.resolve(__dirname, './__screenshots__')

      if (!existsSync(folder)) {
        await mkdir(folder)
      }
      await writeFile(path.resolve(folder, `${name}.png`), screenshoot)
    })
})
