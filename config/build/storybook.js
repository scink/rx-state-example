const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const {resolve} = require('../build/vars');

const {COMMON_CONFIG, RULE_TS_TSX, PRE_TSLINT_RULE, DEVTOOL, RULE_SVG} = require('./common');
const {SRC_DIR, DIST_DIR} = require('./vars');

const plugins = [
	new webpack.HotModuleReplacementPlugin(),
	new HtmlWebpackPlugin({
		filename: 'index.html',
		template: resolve(SRC_DIR, 'storybook/index.html'),
		chunks: ['manager'],
		inject: 'body',
	}),
	new HtmlWebpackPlugin({
		filename: 'iframe.html',
		template: resolve(SRC_DIR, 'storybook/iframe.html'),
		chunks: ['preview'],
		inject: 'body',
	}),
];

const storybookConfig = (host, port) =>
	Object.assign({}, COMMON_CONFIG, {
		output: {
			publicPath: '',
			path: resolve(DIST_DIR, 'storybook'),
		},
		entry: {
			manager: [
				require.resolve('@storybook/react/dist/server/addons.js'),
				require.resolve('@storybook/react/dist/client/manager/index.js'),
			],
			preview: [
				'react-hot-loader/patch',
				`webpack-dev-server/client?http://${host}:${port}`,
				'webpack/hot/only-dev-server',
				require.resolve('@storybook/react/dist/server/addons.js'),
				require.resolve('../storybook/config.js'),
			],
		},
		module: {rules: [PRE_TSLINT_RULE, RULE_TS_TSX, RULE_SVG]},
		plugins,
		devtool: DEVTOOL,
	});

module.exports = storybookConfig;
