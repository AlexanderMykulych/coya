import { resolve } from 'path'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import ViteRestart from 'vite-plugin-restart'

export default defineConfig({
    resolve: {
        alias: {
            '@/': `${resolve(__dirname, '.vitepress/theme')}/`,
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    windicss: ['windicss'],
                },
            },
        },
    },
    plugins: [
        // https://github.com/antfu/vite-plugin-windicss
        WindiCSS(),
        ViteRestart({
            restart: '.vitepress/*.*',
        }),
    ]
});