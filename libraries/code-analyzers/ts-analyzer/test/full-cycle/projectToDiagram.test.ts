import { createServer, ViteDevServer } from "vite"
import { afterAll, beforeAll, describe, test, expect as vi_expect } from "vitest"
import { chromium } from 'playwright'
import type { Browser, Page } from 'playwright'
import { expect } from '@playwright/test'
import { fileURLToPath } from "url"
import { mkdir, writeFile } from "fs/promises"
import path from "path"
import { existsSync } from "fs"


describe('project to diagram', () => {
  let server: ViteDevServer
  let browser: Browser
  let page: Page
  const port = 5991

  beforeAll(async () => {
    const root = fileURLToPath(new URL('../../../../vue-component', import.meta.url))

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
    await page.goto(`http://localhost:${port}`)

    await expect(page.locator('#app')).toBeVisible()

    const screenshoot = await page.screenshot()

    const folder = path.resolve(__dirname, './__screenshots__')

    if (!existsSync(folder)) {
      await mkdir(folder)
    }
    await writeFile(path.resolve(folder, './basic.png'), screenshoot)
  })
})
