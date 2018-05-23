import {PureComponent} from 'react';
import {Subscription} from 'rxjs/Subscription';
import {PlanetsList, TPlanetsListProps} from '../components/planets-list.pure';
import * as React from 'react';
import {getPlanetsList} from '../../../services/planets-to-visit.service';

export class PlanetsListContainer extends PureComponent<{}, TPlanetsListProps> {
	readonly state: TPlanetsListProps = {
		items: [],
	};

	subscription$?: Subscription;

	componentDidMount() {
		this.subscription$ = getPlanetsList()
			.map(planets => ({items: planets}))
			.do(props => this.setState(props))
			.subscribe();
	}

	componentWillUnmount() {
		this.subscription$ && this.subscription$.unsubscribe();
	}

	render() {
		return <PlanetsList {...this.state} />;
	}
}
