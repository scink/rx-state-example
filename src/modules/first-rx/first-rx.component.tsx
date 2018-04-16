import * as React from 'react';
import {Component} from 'react';
import {isNull} from 'util';
import Spin from 'antd/lib/spin';

export type TFirstRxData = {
	name: string;
	rotationPeriod: string;
	orbitalPeriod: string;
	diameter: string;
	climate: string;
	gravity: string;
	terrain: string;
	surfaceWater: string;
	population: string;
};

export type TFirstRxProps = {
	data: TFirstRxData;
};

export class FirstRx extends Component<TFirstRxProps> {
	public render() {
		const {data} = this.props;

		return isNull(data) ? (
			<Spin size={'large'} />
		) : (
			<div>
				<p>Name: {data.name}</p>
				<p>Climate: {data.climate}</p>
				<p>Diameter: {data.diameter}</p>
				<p>Gravity: {data.gravity}</p>
				<p>Orbital Period: {data.orbitalPeriod}</p>
				<p>Population: {data.population}</p>
				<p>Rotation Period: {data.rotationPeriod}</p>
				<p>Surface Water: {data.surfaceWater}</p>
				<p>Terrain: {data.terrain}</p>
			</div>
		);
	}
}
