import { resolve } from 'path';
import { Piscina } from 'piscina';
import { test, expect } from 'vitest'

const piscina = new Piscina({
  filename: resolve(__dirname, '../../../../node_modules/coya-ts-analyzer-worker/dist/coya-ts-analyzer-worker.es.js'),
});
test('should run local file', async () => {
  const result = await piscina.run({
    fileName: './test.ts',
    basePath: __dirname,
  }, {
    name: 'run',
  })

  expect(result.default).toStrictEqual("Hello from test.ts")
  expect(result).toMatchSnapshot()
})
