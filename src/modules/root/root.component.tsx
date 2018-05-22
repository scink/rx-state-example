import React from 'react';
import {Component} from 'react';
import {Redirect, Route, RouteComponentProps, Switch} from 'react-router';
import {css} from 'emotion';
import {Index} from '../index/index.component';
import {TatooineContainer} from '../tatooine/tatooine.container';
// import {FirstRxContainer} from '../first-rx/first-rx.container';
import {Binded} from '../binded/components/binded.pure';

const RootStyle = css({
	width: '100%',
	maxWidth: 900,
	marginLeft: 20,
	marginRight: 20,
	marginTop: 20,
	fontSize: 50,
});

export class Root extends Component<RouteComponentProps<{}>> {
	render() {
		return (
			<section className={RootStyle}>
				<Switch>
					<Route exact path={'/'} component={Index} />
					<Route path={'/first-example'} component={TatooineContainer} />
					{/*<Route path={'/first-rx'} component={FirstRxContainer} />*/}
					<Route path={'/second-example'} component={Binded} />

					<Route path={'/*'} component={() => <Redirect to={'/'} />} />
				</Switch>
			</section>
		);
	}
}
