const {resolve} = require('path');

const ROOT_DIR = resolve(__dirname, '../../');
const DIST_DIR = resolve(__dirname, '../../dist');
const SRC_DIR = resolve(__dirname, '../../src');
const POLYFILLS = resolve(SRC_DIR, './polyfills.ts');

const NODE_ENV = process.env;
const IS_DEV_MODE = NODE_ENV === 'development';
const IS_PROD_MODE = NODE_ENV === 'production';
const HOST = '0.0.0.0';
const PORT = 7777;

const NODE_MODULES = resolve(ROOT_DIR, 'node_modules');

const ES6 = [resolve(NODE_MODULES, 'redux')];

const STATS = {
	assets: true,
	colors: true,
	version: false,
	hash: false,
	timings: false,
	chunks: false,
	chunkModules: false,
	children: false,
};

module.exports = {
	resolve,
	DIST_DIR,
	SRC_DIR,
	ROOT_DIR,
	IS_DEV_MODE,
	IS_PROD_MODE,
	NODE_MODULES,
	ES6,
	STATS,
	POLYFILLS,
	HOST,
	PORT,
};
