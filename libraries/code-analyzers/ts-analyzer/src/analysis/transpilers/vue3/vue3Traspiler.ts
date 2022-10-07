import { parse, compileScript, compileTemplate } from 'vue/compiler-sfc'
import type { TranspilerResult } from '../types'

export default {
  name: 'vue3-traspiler',
  async traspile(code: string): Promise<TranspilerResult> {
    const { descriptor } = parse(code, { sourceMap: true })

    const compiled = descriptor.script || descriptor.scriptSetup ? compileScript(descriptor, {
      id: `1`,
      sourceMap: true,
    }) : null

    const template = descriptor.template?.content ? compileTemplate({
      source: descriptor.template.content,
      filename: 'test.vue',
      id: 'test.vue',
      compilerOptions: {
        sourceMap: true,
      }
    }) : null
    
    const result = `${compiled?.content ?? '// no <script> tag'}\n${template?.code}`

    return Promise.resolve({
      code: result,
      sourceMaps: compiled?.map,
    })
  },
}
