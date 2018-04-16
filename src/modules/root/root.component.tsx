import React from 'react';
import {Component} from 'react';
import {Route, RouteComponentProps, Switch} from 'react-router';
import {css} from 'emotion';
import {Index, TatooineContainer, FirstRxContainer, ReduxExample} from '../';

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
					<Route path={'/rx-example'} component={TatooineContainer} />
					<Route path={'/first-rx'} component={FirstRxContainer} />
				</Switch>
			</section>
		);
	}
}
