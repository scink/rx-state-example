const {resolve, NODE_MODULES, ES6} = require('../build/vars');

require('babel-register')({
	ignore(file) {
		const filePath = resolve(file);

		return filePath.startsWith(NODE_MODULES) && !ES6.some(dep => filePath.startsWith(dep));
	},
});
require(resolve(process.argv[2]));
