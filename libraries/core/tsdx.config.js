const replace = require('@rollup/plugin-replace');
const commonjs = require('rollup-plugin-commonjs');

// tsdx.config.js
module.exports = {
    rollup(config, options) {
        config.external = (id) => id === "vue";
        config.plugins = config.plugins.map(p =>
            p.name === 'replace'
              ? replace({
                  'process.env.NODE_ENV': JSON.stringify(options.env),
                  preventAssignment: true,
                })
              : p
        );
        config.plugins = [
            ...config.plugins,
            commonjs({
                include: [
                    "node_modules/**",
                ]
                // include: [
                // /node_modules\/@antv\/layout/,
                // ],
            })
        ]
        return config;
    },
};
