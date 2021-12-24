import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        deps: {
            inline: ['@antv/layout'],
        },
    },
});
