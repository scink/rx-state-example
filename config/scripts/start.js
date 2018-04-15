const WDS = require('webpack-dev-server');
const minimist = require('minimist');
const webpack = require('webpack');
const {STATS, HOST, PORT} = require('../build/vars');
const {DEV_SERVER_CONFIG} = require('../build/common');
const {DEV_CONFIG} = require('../build/dev');

const argv = minimist(process.argv.slice(2));
const port = argv['port'] || PORT;
const host = argv['host'] || HOST;
const api = argv['api'] || 'http://localhost:8888/';

console.log('Starting dev...');

const config = DEV_CONFIG(host, port);
const compiler = webpack(config);
const server = new WDS(
	compiler,
	Object.assign({}, DEV_SERVER_CONFIG, {
		stats: STATS,
		// proxy: [
		// 	{
		// 		context: ['/api/**', '/auth/**'],
		// 		target: api,
		// 		secure: false,
		// 	},
		// ],
	}),
);

server.listen(port, host, error => {
	if (error) {
		return console.error(error);
	}

	console.log(`Listening at http://${host}:${port}/`);
	console.log('Compiling...');
});
