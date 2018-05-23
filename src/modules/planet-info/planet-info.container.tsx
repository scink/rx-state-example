import * as React from 'react';
import {PureComponent} from 'react';
import {Subscription} from 'rxjs/Subscription';
import {PlanetInfo, TPlanetInfoProps} from './planet-info.pure';
import {getPlanetInfoData} from '../../services/planet-info.service';

export class PlanetInfoContainer extends PureComponent<{}, TPlanetInfoProps> {
	readonly state: TPlanetInfoProps = {
		data: {
			planetName: 'N/A',
			planetDiameter: 'N/A',
		},
	};

	subscription$?: Subscription;

	componentDidMount() {
		this.subscription$ = getPlanetInfoData
			.map(data => ({
				data: {
					planetName: data.name,
					planetDiameter: data.diameter,
				},
			}))
			.do(props => this.setState(props))
			.subscribe();
	}

	componentWillUnmount() {
		this.subscription$ && this.subscription$.unsubscribe();
	}

	render() {
		return <PlanetInfo {...this.state} />;
	}
}
