import { Project } from "ts-morph";
import { expect, test } from "vitest";
import vue3Traspiler from "../vue3Traspiler";

const vueCode = `
<script lang="ts" setup>
import { ref } from 'vue'
import { utilFn } from './utils'

const count = ref(utilFn(1, 2))
</script>

<template>
<div>
  {{ count }}
</div>
</template>
`
test('should transpile vue file to ts with default export and render fn export', async () => {
  const tsCode = await vue3Traspiler.traspile(vueCode)

  const project = new Project({
    useInMemoryFileSystem: true,
    skipFileDependencyResolution: true,
  })
  const sourceFile = project.createSourceFile('component.vue.ts', tsCode)

  const exportDeclarations = sourceFile.getExportedDeclarations()

  expect(exportDeclarations).toHaveLength(2)
  expect(exportDeclarations.get('render')).not.empty
  expect(exportDeclarations.get('default')).not.empty
})

test('should transpile vue code to correct TS code', async () => {
  const tsCode = await vue3Traspiler.traspile(vueCode)

  const project = new Project({
    useInMemoryFileSystem: true,
    skipFileDependencyResolution: true,
  })
  const fs = project.getFileSystem()

  await fs.writeFile('/node_modules/vue/index.js', 'export const ref = () => {}')
  await fs.writeFile('/node_modules/vue/index.d.ts', `
  export const ref: any
  export const defineComponent: any
  export const toDisplayString: any
  export const openBlock: any
  export const createElementBlock: any
  `)
  project.createSourceFile('utils.ts', `export const utilFn = (a, b) => {}`)
  const sourceFile = project.createSourceFile('component.vue.ts', tsCode)

  const diagnostincs = sourceFile.getPreEmitDiagnostics()


  console.log(diagnostincs.map(x => x.getMessageText()))
  expect(diagnostincs).is.empty
})
