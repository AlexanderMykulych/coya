import vue3Traspiler from "../../../../transpilers/vue3/vue3Traspiler";
import { definePlugin } from "../definePlugin";
import type { AnalysisContextStore } from "./types";

export default definePlugin<AnalysisContextStore>({
  name: 'vue2-sfc-processor',
  isMatch: ({ file, context }) =>
    context.store.get('isVue2', false) && file.file.endsWith('.vue'),
  
  async processFile({ file }) {
    const result = await vue3Traspiler.traspile(file.text)

    return {
      file: `${file.file}.ts`,
      text: result.code,
      maps: result.sourceMaps,
    }
  },

  on: {
    analyzePackageJson({ packageJson, context }) {
      const vueVersion = packageJson?.dependencies?.['vue']
      context.store.set('isVue2', vueVersion?.startsWith('2.') ?? false)
    },
  }
})
