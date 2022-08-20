import { createServer } from "vite";
import { expect, test } from "vitest";

test('run vite', async () => {
  const server = await createServer({})

  await server.listen()
  server.printUrls()
  expect(server).not.empty
})
