import { Project } from "ts-morph";
import { expect, test } from "vitest";
import { fileTraverser } from "../fileTraverser";

test('should travers files in project', async () => {
  const project = new Project({
    useInMemoryFileSystem: true,
  })

  const mainSourceFile = project.createSourceFile('main.ts', `
  import fn from './dep1'

  export default fn(1)
  `)

  await fileTraverser(mainSourceFile, (file: string) => {
    if (file === './dep1') {
      return project.createSourceFile(`${file}.ts`, `
        import fn from './dep2'
        export default (a: number) => fn(a) + 1
      `)
    } else if (file === './dep2') {
      return project.createSourceFile(`${file}.ts`, `
        export default (a: number) => a + 1
      `)
    }
  })

  const sourceFiles = project.getSourceFiles()

  expect(sourceFiles).toHaveLength(3)
})