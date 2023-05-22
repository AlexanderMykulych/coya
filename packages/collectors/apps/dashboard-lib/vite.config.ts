/// <reference types="vitest" />

import path from "node:path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Unocss from "unocss/vite";
import VueMacros from "unplugin-vue-macros/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import * as fs from 'fs'

export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`
    }
  },
  plugins: [
    // basicSsl(),
    VueMacros({
      plugins: {
        vue: Vue({
          reactivityTransform: true
        })
      }
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ["vue", "vue/macros", "vue-router", "@vueuse/core"],
      dts: true,
      dirs: ["./src/composables/**"],
      vueTemplate: true
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
      resolvers: [
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        IconsResolver({
          prefix: "i"
        })
      ]
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),
    Icons({
      autoInstall: true
    })
  ],
  server: {
    // host: 'localhost',
    https: {
      key: fs.readFileSync(path.resolve(__dirname, './tls/localhost.key')),
      cert: fs.readFileSync(path.resolve(__dirname, './tls/localhost.crt')),
    }
  }
});
