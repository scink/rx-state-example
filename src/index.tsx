import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './utils/rx.utils';
import 'normalize.css';
import {RootContainer} from './modules/root/root.container';
import 'antd/dist/antd.css';
import createBrowserHistory from 'history/createBrowserHistory';

const root = document.getElementById('root');
export const history = createBrowserHistory({
	basename: process.env.BASE_HREF,
});

const render = (Container: typeof RootContainer) => {
	let container = <Container history={history} />;

	if (process.env.NODE_ENV !== 'production') {
		const AppContainer = require('react-hot-loader').AppContainer; // tslint:disable-line no-require-imports
		container = <AppContainer>{container}</AppContainer>;
	}

	ReactDOM.render(container, root);
};

render(RootContainer);

if (module.hot) {
	module.hot.accept(() => render(require('./modules/root/root.container'))); // tslint:disable-line
}
