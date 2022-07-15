import { parse, compileScript, compileTemplate } from 'vue/compiler-sfc'

export default {
  name: 'vue3-traspiler',
  async traspile(code: string): Promise<string> {
    const { descriptor } = parse(code)

    const compiled = compileScript(descriptor, {
      id: `1`
    })

    const template = descriptor.template?.content ? compileTemplate({
      source: descriptor.template.content,
    } as any) : null
    
    const result = `${compiled.content}\n${template?.code}`

    return Promise.resolve(result)
  }
}
