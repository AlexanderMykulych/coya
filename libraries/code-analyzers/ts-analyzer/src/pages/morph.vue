<script setup lang="ts">
import {ref, computed} from 'vue'
import { Project, SyntaxKind, Node, TypeFormatFlags } from 'ts-morph';
import "vue3-json-viewer/dist/index.css";
import {JsonViewer} from "vue3-json-viewer"
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'

import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css'
import { useDebounceFn } from '@vueuse/core';
import { getNodeName } from '../components/utils';

const highlighter = (code: string) => highlight(code, languages.js)

const modules = import.meta.globEager('../../test/analysis/cases/03_function_relation/*.*', { as: 'raw' })

const props = defineProps<{ code: string }>()


const project = new Project({
  // fileSystem: inMemoryFileSystem,
  useInMemoryFileSystem: true,
  compilerOptions: {
    allowJs: true,
  },
})

const getFileName = (path: string) => path.substring(path.lastIndexOf('/'))
Object.entries(modules)
  .forEach(([key, code]) =>  project.createSourceFile(getFileName(key), code))

project.saveSync()

const sourceFile = project.getSourceFile('/main.js')!

const calc = () => ({
  baseName: sourceFile.getBaseName(),
  childCount: sourceFile.getChildCount(),
  exportsCount: sourceFile.getExportSymbols().length,
  declarations: sourceFile.getDescendants()
    .filter(x => Node.isFunctionDeclaration(x) || Node.isVariableDeclaration(x) || Node.isMethodDeclaration(x))
    .map(d => ({
        type: d.getType().getText(undefined, TypeFormatFlags.NoTruncation | TypeFormatFlags.UseFullyQualifiedType),
        kind: d.getKindName(),
        name: getNodeName(d),
        refs: d.getDescendantsOfKind(SyntaxKind.Identifier)
        .map(x => ({
          text: x.getText(),
          defs: x.getDefinitions().map(d => {
            const inN = d.getDeclarationNode()
            return ({
            fileName: d.getSourceFile().getBaseName(),
            import: Node.isImportSpecifier(inN) ? inN.getImportDeclaration().getModuleSpecifierValue() : '',
            text: d.getDeclarationNode()?.getText(),
            originName: getNodeName(d.getDeclarationNode()),
            type: d.getDeclarationNode()?.getKindName(),
            y: d.getDeclarationNode()?.getLocals().map(x => x.getName()),
          })})?.[0],
        })), 
      })),
  exportDeclarations: sourceFile.getExportDeclarations().map(x => ({
    text: x.getFullText(),
  })),
  exportAssignments: sourceFile.getExportAssignments().map(x => ({
    x: x.getFullText(),
  })),
  imports: sourceFile.getImportDeclarations()
    .map(x => ({
      text: x.getText(),
      member: x.getModuleSpecifierValue(),
    })),
  refs: sourceFile.getReferencedSourceFiles().map(x => x.getFilePath()),
});
const result = ref(calc())

const codeVal = ref(props.code ?? sourceFile.getText())
const updateSourceFile = useDebounceFn(() => {
  sourceFile.replaceWithText(codeVal.value)
  sourceFile.saveSync()
  result.value = calc()
}, 1000)
const code = computed({
  get: () => codeVal.value,
  set: (val) => {
    codeVal.value = val
    updateSourceFile()
  }
})
</script>

<template>
  <div class="flex text-left">
    <PrismEditor class="flex-1 my-editor" mx-10 v-model="code" :highlight="highlighter" line-numbers />
    <JsonViewer class="flex-1" :value="result" mx-10 :expanded="true" :expandDepth="15"></JsonViewer>
  </div>
</template>

<style>
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #2d2d2d;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
  height: 500px
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>