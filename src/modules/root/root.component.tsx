import React from 'react';
import {Component} from 'react';
import {Redirect, Route, RouteComponentProps, Switch} from 'react-router';
import {css} from 'emotion';
import {Index} from '../index/index.component';
// import {TatooineContainer} from '../tatooine/tatooine.container';
import {PlanetInfoContainer} from '../planet-info/planet-info.container';
import {Binded} from '../planets-to-visit/components/planets-to-visit.pure';

const RootStyle = css({
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
					<Route path={'/first-example'} component={PlanetInfoContainer} />
					{/*<Route path={'/first-rx'} component={TatooineContainer} />*/}
					<Route path={'/second-example'} component={Binded} />

					<Route path={'/*'} component={() => <Redirect to={'/'} />} />
				</Switch>
			</section>
		);
	}
}
