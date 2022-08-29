import { resolve } from 'path'
import { test, expect } from 'vitest'
import { readFile } from '../../../../../project/getEntryPoint'
import vue2Plugin from '../vue2Plugin'

const files = [
  './cmp1.vue',
  './cmp2.vue',
  './cmp3.vue',
]

files.forEach(fileName => {
  test(`should render vue2 component: ${fileName}`, async () => {
    const file = await readFile(resolve(__dirname, fileName))
    const result = await vue2Plugin.processFile({
      file,
      context: {
        store: {
          get: (name: string) => name === 'isVue2',
        }
      }
    })

    expect(result).toMatchSnapshot()
  })
})