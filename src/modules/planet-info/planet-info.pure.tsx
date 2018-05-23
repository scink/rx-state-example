import * as React from 'react';
import {PureComponent} from 'react';
import {classname} from './planet-info.style';

export type TPlanetInfoData = {
	planetName: string;
	planetDiameter: string;
};

export type TPlanetInfoProps = {
	data: TPlanetInfoData;
};

export class PlanetInfo extends PureComponent<TPlanetInfoProps> {
	public render() {
		return (
			<div className={classname.block}>
				<div className={classname.planet}>
					<div className={classname.name}>{this.props.data.planetName}</div>
				</div>
				<div className={classname.size}>
					<div className={classname.diameter}>
						<span className={classname.icon} />
						{this.props.data.planetDiameter}
					</div>
				</div>
			</div>
		);
	}
}
