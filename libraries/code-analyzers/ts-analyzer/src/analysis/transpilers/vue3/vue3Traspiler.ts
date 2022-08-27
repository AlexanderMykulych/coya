import { parse, compileScript, compileTemplate } from 'vue/compiler-sfc'

export default {
  name: 'vue3-traspiler',
  async traspile(code: string): Promise<string> {
    const { descriptor } = parse(code)

    const compiled = descriptor.script || descriptor.scriptSetup ? compileScript(descriptor, {
      id: `1`
    }) : null

    const template = descriptor.template?.content ? compileTemplate({
      source: descriptor.template.content,
    } as any) : null
    
    const result = `${compiled?.content ?? '// no <script> tag'}\n${template?.code}`

    return Promise.resolve(result)
  }
}
