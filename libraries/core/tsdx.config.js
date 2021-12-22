const replace = require('@rollup/plugin-replace');

// tsdx.config.js
module.exports = {
    rollup(config, options) {
        config.external = (id) => id === "vue";
        config.plugins = config.plugins.map(p =>
            p.name === 'replace'
              ? replace({
                  'process.env.NODE_ENV': JSON.stringify(opts.env),
                  preventAssignment: true,
                })
              : p
          );
        return config;
    },
};
