import * as React from 'react';
import {PureComponent} from 'react';
import {Subscription} from 'rxjs/Subscription';
import {FirstRx, TFirstRxData} from './first-rx.component';
import {FirstRxService} from '../../services/first-rx.service';
import getData = FirstRxService.getData;

export class FirstRxContainer extends PureComponent<{}, TFirstRxData> {
	private data$?: Subscription;

	componentDidMount() {
		this.data$ = getData
			.map(data => ({
				name: data.name,
				rotationPeriod: data.rotation_period,
				orbitalPeriod: data.orbital_period,
				diameter: data.diameter,
				climate: data.climate,
				gravity: data.gravity,
				terrain: data.terrain,
				surfaceWater: data.surface_water,
				population: data.population,
			}))
			.startWith(null)
			.subscribe(data => this.setState(data));
	}

	componentWillUnmount() {
		this.data$ && this.data$.unsubscribe();
	}

	public render() {
		return <FirstRx data={this.state} />;
	}
}
