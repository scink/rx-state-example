import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './utils/rx.utils';
import 'normalize.css';
import {store, history} from './store';
import 'antd/dist/antd.css';
import {RootContainer} from './modules/root/root.container';

const root = document.getElementById('root');

const render = (Container: typeof RootContainer) => {
	let container = <Container store={store} history={history} />;

	if (process.env.NODE_ENV !== 'production') {
		const AppContainer = require('react-hot-loader').AppContainer; // tslint:disable-line no-require-imports
		container = <AppContainer>{container}</AppContainer>;
	}

	ReactDOM.render(container, root);
};

render(RootContainer);

if (module.hot) {
	module.hot.accept(() => render(require('./modules/root/root.component'))); // tslint:disable-line
}
