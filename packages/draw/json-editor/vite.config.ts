import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import WindiCSS from 'vite-plugin-windicss';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

const markdownWrapperClasses = 'prose prose-sm m-auto text-left';

const prefix = 'monaco-editor/esm/vs';
export default defineConfig({
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    plugins: [
        Vue({
            include: [/\.vue$/, /\.md$/],
        }),

        // https://github.com/antfu/unplugin-auto-import
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                'vue-i18n',
                '@vueuse/head',
                '@vueuse/core',
            ],
            dts: 'src/auto-imports.d.ts',
        }),

        // https://github.com/antfu/unplugin-vue-components
        Components({
            // allow auto load markdown components under `./src/components/`
            extensions: ['vue', 'md'],

            // allow auto import and register components used in markdown
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

            // custom resolvers
            resolvers: [
                // auto import icons
                // https://github.com/antfu/unplugin-icons
                IconsResolver({
                    customCollections: [
                        'my-icons',
                    ],
                }),
            ],

            dts: 'src/components.d.ts',
        }),

        // https://github.com/antfu/unplugin-icons
        Icons({
            autoInstall: true,
            customCollections: {
                'my-icons': FileSystemIconLoader(
                    './src/assets',
                ),
            },
        }),

        // https://github.com/antfu/vite-plugin-windicss
        WindiCSS({
            safelist: markdownWrapperClasses,
        }),
    ],

    server: {
        fs: {
            strict: false,
        },
    },

    // https://github.com/antfu/vite-ssg
    ssgOptions: {
        script: 'async',
        formatting: 'minify',
    },

    optimizeDeps: {
        include: [
            'vue',
            'vue-router',
            '@vueuse/core',
            '@vueuse/head',
            'vue-color-kit',
        ],
        exclude: [
            'vue-demi',
        ],
    },
    build: {
        rollupOptions: {
            external: ['vue', 'coya-util'],
            output: {
                globals: {
                    vue: 'Vue',
                },
                format: 'es',
                manualChunks: {
                    jsonWorker: [`${prefix}/language/json/json.worker`],
                    cssWorker: [`${prefix}/language/css/css.worker`],
                    htmlWorker: [`${prefix}/language/html/html.worker`],
                    tsWorker: [`${prefix}/language/typescript/ts.worker`],
                    editorWorker: [`${prefix}/editor/editor.worker`],
                },
            },
        },
        lib: {
            entry: path.resolve(__dirname, '/src/libMain.ts'),
            name: 'coya-json-editor',
            fileName: format => `coya-json-editor.${format}.js`,
            formats: ['es'],
        },
    },
});
