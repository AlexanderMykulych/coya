import { defineConfig } from 'vite'
import path from 'path'
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [dts()],
    build: {
        rollupOptions: {
            external: ['vue', "@vueuse/core"],
            output: {
                format: 'es'
            },
        },
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, "/src/index.ts"),
            name: "coya-core",
            fileName: (format) => `coya-core.${format}.js`,
            formats: ['es', "umd", "cjs"]
        },
        minify: false,
    }
})

