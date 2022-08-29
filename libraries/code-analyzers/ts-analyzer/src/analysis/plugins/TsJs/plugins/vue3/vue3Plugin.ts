import vue3Traspiler from "../../../../transpilers/vue3/vue3Traspiler";
import { definePlugin } from "../definePlugin";
import { AnalysisContextStore } from "./types";

export default definePlugin<AnalysisContextStore>({
  name: 'vue3-sfc-processor',
  isMatch: ({ file, context }) =>
    context.store.get('isVue3', false) && file.file.endsWith('.vue'),
  
  async processFile({ file }) {
    const code = await vue3Traspiler.traspile(file.text)

    return {
      file: `${file.file}.ts`,
      text: code,
    }
  },

  on: {
    analyzePackageJson({ packageJson, context }) {
      const vueVersion = packageJson?.dependencies?.['vue']
      context.store.set('isVue3', !vueVersion || vueVersion.startsWith('3.'))
    }
  }
})
