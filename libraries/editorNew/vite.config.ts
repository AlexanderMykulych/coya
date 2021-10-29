import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
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
