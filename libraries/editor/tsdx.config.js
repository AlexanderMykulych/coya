// tsdx.config.js
module.exports = {
    rollup(config, options) {
        config.external = (id) => id === "vue";
        return config;
    },
};
