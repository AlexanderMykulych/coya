import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import ViteComponents from 'vite-plugin-components'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'


export default defineConfig({
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    plugins: [
        Vue(),

        // https://github.com/hannoeru/vite-plugin-pages
        Pages(),

        // https://github.com/antfu/unplugin-auto-import
        AutoImport({
            include: [
                /\.vue\??/, // .vue
                /\.ts\??/, // .vue
            ],
            imports: [
                'vue',
                'vue-router',
                '@vueuse/core',
            ],
        }),

        // https://github.com/antfu/vite-plugin-components
        ViteComponents({
            // generate `components.d.ts` for ts support with Volar
            globalComponentsDeclaration: true,

            // auto import icons
            customComponentResolvers: [
                // https://github.com/antfu/vite-plugin-icons
                ViteIconsResolver({
                    componentPrefix: '',
                    // enabledCollections: ['carbon']
                }),
            ],
        }),

        // https://github.com/antfu/vite-plugin-icons
        ViteIcons(),

        // https://github.com/antfu/vite-plugin-windicss
        WindiCSS()
    ],

    server: {
        fs: {
            strict: true,
        },
    },

    optimizeDeps: {
        include: [
            'vue',
            'vue-router',
            '@vueuse/core'
        ],
        exclude: [
            'vue-demi',
        ],
    },
    build: {
        rollupOptions: {
            external: ['vue'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue'
                }
            }
        },
        lib: {
            entry: path.resolve(__dirname, "/src/lib/libEntry.ts"),
            name: "Coya",
            fileName: (format) => `coya.${format}.js`
        },
        minify: false
    }
})
