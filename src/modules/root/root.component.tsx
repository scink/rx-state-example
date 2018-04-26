import React from 'react';
import {Component} from 'react';
import {Route, RouteComponentProps, Switch} from 'react-router';
import {css} from 'emotion';
import {Index} from '../index/index.component';
import {ReduxExampleContainer} from '../redux-example/redux-example.container';
import {TatooineContainer} from '../tatooine/tatooine.container';
import {FirstRxContainer} from '../first-rx/first-rx.container';

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
					<Route path={'/redux-example'} component={ReduxExampleContainer} />
					<Route path={'/rx-example'} component={TatooineContainer} />
					<Route path={'/first-rx'} component={FirstRxContainer} />
				</Switch>
			</section>
		);
	}
}
