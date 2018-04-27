import * as React from 'react';
import {PureComponent} from 'react';
import {History} from 'history';
import {Root} from './root.component';
import {Router, withRouter} from 'react-router';

export type TRootContainerProps = {
	history: History;
};

const RootWithRoute = withRouter(Root);

export class RootContainer extends PureComponent<TRootContainerProps> {
	render() {
		const {history} = this.props;

		return (
			<Router history={history}>
				<RootWithRoute />
			</Router>
		);
	}
}
