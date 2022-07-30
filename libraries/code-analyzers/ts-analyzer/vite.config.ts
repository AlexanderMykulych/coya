/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import Inspect from 'vite-plugin-inspect'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      'code-block-writer': `code-block-writer/esm/mod.js`,
    },
  },
  plugins: [
    // viteCommonjs(),
    Vue({
      reactivityTransform: true,
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),
    Inspect(),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
    testTimeout: 10_000_000,
    coverage: {
      reporter: ['text', 'json', 'html']
    }
  },
})
