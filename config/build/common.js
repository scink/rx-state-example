const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const {SRC_DIR, DIST_DIR, resolve} = require('./vars');

const DEVTOOL = 'cheap-module-eval-source-map';

// not using
const PRE_TSLINT_RULE = {
	enforce: 'pre',
	include: SRC_DIR,
	exclude: /node_modules/,
	loader: 'tslint-loader',
	test: /\.(ts|tsx)$/,
};

const RULE_CSS = {
	test: /\.css$/,
	use: ['style-loader', 'css-loader'],
};

const RULE_TS_TSX = {
	test: /\.(ts|tsx)$/,
	include: SRC_DIR,
	exclude: /node_modules/,
	use: ['babel-loader', 'ts-loader'],
};

const RULE_SVG = {
	test: /\.svg$/,
	loader: 'svg-react-loader',
};

const DEV_SERVER_CONFIG = {
	compress: true,
	contentBase: DIST_DIR,
	historyApiFallback: true,
	hot: true,
	overlay: {
		errors: true,
		warnings: false,
	},
	port: 7777,
};

const HTML_PLUGIN = new HtmlWebpackPlugin({
	filename: 'index.html',
	template: `./index.html`,
	title: 'pet-proj',
});

const HOT_PLUGIN = new webpack.HotModuleReplacementPlugin();

const COMMON_CONFIG = {
	context: SRC_DIR,
	entry: './index.tsx',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
	},
    module: {rules: [PRE_TSLINT_RULE, RULE_TS_TSX, RULE_CSS, RULE_SVG]},
    output: {
        filename: '[name].[hash:6].js',
        path: DIST_DIR,
        publicPath: '/',
    },
};

module.exports = {
	resolve,
	UglifyjsWebpackPlugin,
	DEVTOOL,
	PRE_TSLINT_RULE,
	RULE_TS_TSX,
	DEV_SERVER_CONFIG,
	HTML_PLUGIN,
	COMMON_CONFIG,
	HOT_PLUGIN,
	RULE_CSS,
	RULE_SVG,
};
