import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: IconsResolver(),
        }),
        Icons({
            autoInstall: true,
            compiler: "vue3"
        }),
        WindiCSS(),
    ],
    build: {
        rollupOptions: {
            external: ['vue', "coya-core"],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue',
                    "coya-core": "coya-core"
                }
            }
        },
        lib: {
            entry: path.resolve(__dirname, "/src/libMain.ts"),
            name: "coya-editor",
            fileName: (format) => `coya-editor.${format}.js`
        },
    }
})