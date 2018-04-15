const minimist = require('minimist');
const storybook = require('../build/storybook');
const webpack = require('webpack');
const WDS = require('webpack-dev-server');

const {STATS} = require('../build/vars');

const argv = minimist(process.argv.slice(2));
const port = argv['port'] || 9001;
const host = argv['host'] || 'localhost';

console.log('Starting assetmark-portal storybook...');

const config = storybook(host, port);
const compiler = webpack(config);
const server = new WDS(compiler, {
	hot: true,
	historyApiFallback: true,
	stats: STATS,
});

server.listen(port, host, error => {
	if (error) {
		return console.error(error);
	}

	console.log(`Listening at http://${host}:${port}/`);
	console.log('Compiling...');
});
