import { defineConfig } from 'vite'
import path from 'path';
import nodeResolve from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-polyfill-node'
import commonjs from '@rollup/plugin-commonjs';
import transformSelfToGlobalThis from './plugins/self';

const resolvePath = (str: string) => path.resolve(__dirname, str)
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        nodeResolve({
            browser: false,
        }),
        // nodePolyfills(),
        commonjs({
            ignoreDynamicRequires: true,
        }),
        transformSelfToGlobalThis(),
    ],
    build: {
        // target: "node14",
        rollupOptions: {
            external: ["vscode", "typescript", "ws", "fs", "child_process", "path"],
            output: {
                dir: "out"
            },
        },
        sourcemap: true,
        lib: {
            entry: resolvePath("/src/extension.ts"),
            name: "coya",
            fileName: (format) => `coya.${format}.js`,
            formats: ['cjs'],
        },
        minify: false,
    },
})
