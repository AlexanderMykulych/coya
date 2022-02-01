import { resolve } from 'path'
import { defineConfig } from 'vite'
import ViteRestart from 'vite-plugin-restart'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

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
        Unocss({
            presets: [
                presetAttributify({}),
                presetUno(),
            ]
        }),
        ViteRestart({
            restart: '.vitepress/**',
        }),
    ]
});