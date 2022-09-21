/// <reference types="vitest" />

import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import vuetify from 'vite-plugin-vuetify'
import VueTypeImports from 'vite-plugin-vue-type-imports'
import Inspect from 'vite-plugin-inspect'
import Layouts from 'vite-plugin-vue-layouts'
// import { vitestAnalyzerPlugin } from 'coya-ts-analyzer'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      reactivityTransform: resolve(__dirname, './src'),
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
        '@vueuse/core'
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
      resolvers: [
        IconsResolver(),
      ],
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),
    Icons({
      autoInstall: true,
      
    }),
    vuetify({
      autoImport: true,
    }),
    VueTypeImports(),
    // vitestAnalyzerPlugin(),
    Inspect({
      // change this to enable inspect for debugging
      enabled: true,
    }),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
