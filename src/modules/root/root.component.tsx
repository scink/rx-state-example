import React from 'react';
import {Component} from 'react';
import {Route, RouteComponentProps, Switch} from 'react-router';
import {ReduxExample} from '../redux-example';
import {css} from 'emotion';
import {Index} from '../index/index.component';

const RootStyle = css({
	width: '100%',
	maxWidth: 900,
	marginLeft: 'auto',
	marginRight: 'auto',
	marginTop: 20,
});

export class Root extends Component<RouteComponentProps<{}>> {
	render() {
		return (
			<section className={RootStyle}>
				<Switch>
					<Route exact path={'/'} component={Index} />
					<Route path={'/redux-example'} component={ReduxExample} />
				</Switch>
			</section>
		);
	}
}
