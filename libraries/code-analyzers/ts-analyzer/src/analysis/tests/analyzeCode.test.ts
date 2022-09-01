import { test, expect } from 'vitest'
import { analyzeCode } from '../analyzeCode'

test('should analyze code as string', async () => {
  const code = `
    function f1() {
      return 1
    }
  `
  const fileName = 'funcs.ts'

  const codeInfos = await analyzeCode({
    code,
    fileName,
  })

  expect(codeInfos).toMatchSnapshot()
  expect(codeInfos.length).greaterThan(0)
})

test.only('should analyze vue code as string', async () => {
  const code = `
<script lang="ts">
import { fn1 } from './utils/util';

export default {
  data() {
    return {
      val: fn1(1)
    }
  }
}
</script>

<template>
  <div>
    {{val}}
  </div>
</template>
  `
  const fileName = 'cmp.vue'

  const codeInfos = await analyzeCode({
    code,
    fileName,
  })

  expect(codeInfos.length).greaterThan(0)
})
