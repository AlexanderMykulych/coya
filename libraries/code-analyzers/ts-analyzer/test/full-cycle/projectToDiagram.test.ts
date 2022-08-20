import { createServer, preview, PreviewServer, ViteDevServer } from "vite"
import { afterAll, beforeAll, describe, test } from "vitest"
import { chromium } from 'playwright'
import type { Browser, Page } from 'playwright'
import { expect } from '@playwright/test'
import { fileURLToPath } from "url"


describe.skip('project to diagram', () => {
  let server: ViteDevServer
  let browser: Browser
  let page: Page
  const port = 5991

  beforeAll(async () => {
    const root = fileURLToPath(new URL('../../', import.meta.url))
    console.log(root);

    server = await createServer({
      root,
      configFile: `${root}/vite.config.ts`,
      preview: {
        port,
      },
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
      headless: false,
    })
    page = await browser.newPage()
  })

  afterAll(async () => {
    await browser.close()
    await new Promise<void>((resolve, reject) => {
      server.close(error => error ? reject(error) : resolve())
    })
  })

  test('basic', async () => {
    await page.goto(`http://localhost:${port}`)

    expect(page.locator('div')).toBeVisible()
  })
})
