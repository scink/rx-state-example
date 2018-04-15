const {SRC_DIR, DIST_DIR} = require('./vars');

const {
	DEVTOOL,
	DEV_SERVER_CONFIG,
	HTML_PLUGIN,
	HOT_PLUGIN,
    PRE_TSLINT_RULE,
	RULE_TS_TSX,
	RULE_CSS,
	RULE_SVG,
} = require('./common');
const {POLYFILLS} = require('./vars');

const DEV_CONFIG = {
    context: SRC_DIR,
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
    },
    module: {rules: [PRE_TSLINT_RULE, RULE_TS_TSX, RULE_CSS, RULE_SVG]},
    output: {
        filename: '[name].[hash:6].js',
        path: DIST_DIR,
        publicPath: '/',
    },
	entry: {
		app: [
			POLYFILLS,
			'react-hot-loader/patch',
			`webpack-dev-server/client?http://0.0.0.0:7777`,
			'webpack/hot/only-dev-server',
			`./index.tsx`,
		],
		vendor: ['react', 'react-dom'],
	},
	plugins: [HTML_PLUGIN, HOT_PLUGIN],
	devServer: DEV_SERVER_CONFIG,
	devtool: DEVTOOL,
};

module.exports = DEV_CONFIG;
