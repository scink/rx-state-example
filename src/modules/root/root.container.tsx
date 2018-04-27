import * as React from 'react';
import {PureComponent} from 'react';
import {History} from 'history';
import {Root} from './root.component';
import {Router, withRouter} from 'react-router';
import {AnyAction, Store} from 'redux';
import {Provider} from 'react-redux';
import {TRootState} from '../../reducers/root.reducer';

export type TRootContainerProps = {
	store: Store<TRootState, AnyAction>;
	history: History;
};

const RootWithRoute = withRouter(Root);

export class RootContainer extends PureComponent<TRootContainerProps> {
	render() {
		const {store, history} = this.props;

		return (
			<Provider store={store}>
				<Router history={history}>
					<RootWithRoute />
				</Router>
			</Provider>
		);
	}
}
