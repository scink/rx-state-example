const {
    HTML_PLUGIN,
    COMMON_CONFIG,
} = require('./common');
const {POLYFILLS} = require('./vars');

const DEV_CONFIG = () => ({
    ...COMMON_CONFIG,
    entry: {
        app: [
            POLYFILLS,
            `./index.tsx`,
        ],
        vendor: ['react', 'react-dom'],
    },
    plugins: [HTML_PLUGIN],
});

module.exports = {DEV_CONFIG};
