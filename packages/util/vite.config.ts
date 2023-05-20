import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const resolvePath = (str: string) => path.resolve(__dirname, str);
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        dts(),
    ],
    build: {
        rollupOptions: {
            output: {
                format: "es",
            },
        },
        sourcemap: true,
        lib: {
            entry: resolvePath("/src/index.ts"),
            name: "coya-util",
            fileName: format => `coya-util.${format}.js`,
            formats: ["es", "cjs"],
        },
    },
});
