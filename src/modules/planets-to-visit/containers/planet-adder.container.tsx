import {PureComponent} from 'react';
import {PlanetAdder, TPlanetAdderProps} from '../components/planet-adder.pure';
import * as React from 'react';
import {Subscription} from 'rxjs/Subscription';
import {of} from 'rxjs/observable/of';
import {addPlanet} from '../../../services/planets-to-visit.service';

export class PlanetAdderContainer extends PureComponent<{}, TPlanetAdderProps> {
	readonly state: TPlanetAdderProps = {
		onClick: () => {},
	};

	subscription$?: Subscription;

	componentDidMount() {
		this.subscription$ = of(addPlanet)
			.map(onClick => ({onClick}))
			.do(props => this.setState(props))
			.subscribe();
	}

	componentWillUnmount() {
		this.subscription$ && this.subscription$.unsubscribe();
	}

	render() {
		return <PlanetAdder {...this.state} />;
	}
}
