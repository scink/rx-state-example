import {configure} from '@storybook/react';

const req = require.context('./../../src/modules', true, /\.story\.tsx$/);

configure(() => {
	req
		.keys()
		.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
		.forEach(req);
}, module);
