<script setup lang="ts">
import {ref, computed} from 'vue'
import "vue3-json-viewer/dist/index.css";
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'

import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css'
import { parse, compileScript, compileTemplate } from 'vue/compiler-sfc'
import cmpText from '../../test/analysis/cases/04_vue/cmp.vue?raw'
import morphVue from './morph.vue';

const highlighter = (code: string) => highlight(code, languages.js)

const code = ref(cmpText)

const compiled = computed(() => {
  if (!code.value) {
    return
  }
  const { descriptor } = parse(code.value)
  const { script, scriptSetup } = descriptor

  const compiled = compileScript(descriptor, {
    id: `1`
  })

  const template = compileTemplate({
    source: descriptor.template?.content || '',
  })

  return compiled.content + `\n` + template.code
})
</script>

<template>
  <div>
    <div class="flex text-left">
      <PrismEditor class="flex-1 my-editor" mx-10 v-model="code" :highlight="highlighter" line-numbers />
      <PrismEditor class="flex-1 my-editor" mx-10 :modelValue="compiled" :highlight="highlighter" line-numbers />
    </div>
    <morphVue v-if="compiled" my-10 :code="compiled"/>
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