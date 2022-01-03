import { defineConfig } from 'vite'
import path from 'path';
// import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2'
const resolvePath = (str: string) => path.resolve(__dirname, str)
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        // typescript({
        //     'target': 'es2020',
        //     'rootDir': resolvePath('./src'),
        //     'declaration': true,
        //     'declarationDir': resolvePath('./dist'),
        //     exclude: resolvePath('./node_modules/**'),
        //     allowSyntheticDefaultImports: true
        // })
        typescript({
            check: false,
            tsconfig: resolvePath('./tsconfig.json'),
            tsconfigOverride: {
                compilerOptions: {
                    sourceMap: false,
                    declaration: true,
                    declarationMap: false,
                    target: 'es2020',
                },
                exclude: ['**/__tests__']
            }
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                format: 'es'
            },
        },
        sourcemap: true,
        lib: {
            entry: resolvePath("/src/index.ts"),
            name: "coya-util",
            fileName: (format) => `coya-util.${format}.js`,
            formats: ['es']
        },
    }
})
