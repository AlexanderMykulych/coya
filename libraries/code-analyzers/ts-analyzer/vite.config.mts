/// <reference types="vitest" />

import path, { resolve } from 'path'
import { defineConfig, UserConfigExport } from 'vite'
import type { UserConfigExport as VitestUserConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import Inspect from 'vite-plugin-inspect'
import { nodeCoreModuleList } from './externals'
import { vitestAnalyzerPlugin } from './src/vite/vitestAnalyzerPlugin'

export default defineConfig((<UserConfigExport & VitestUserConfig>{
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      'code-block-writer': `code-block-writer/esm/mod.js`,
    }
  },
  plugins: [
    // commonjsExternals({
    //   externals: nodeCoreModuleList,
    // }),
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
    vitestAnalyzerPlugin({
      basePath: __dirname,
    }),
    Inspect(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'coya-vitest-analyzer',
      fileName: 'coya-vitest-analyzer',
      formats: ['cjs'],
    },
    minify: false,
    rollupOptions: {
      external: nodeCoreModuleList,
    }
  },
  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'node',
    testTimeout: 10_000_000,
    coverage: {
      reporter: ['text', 'json', 'html']
    },
    threads: false,
    setupFiles: ['./setup.vitest.ts'],
  },
}) as UserConfigExport)
