import * as React from 'react';
import {PureComponent} from 'react';
import {PlanetAdderContainer} from '../containers/planet-adder.container';
import {PlanetsListContainer} from '../containers/planets-list.container';
import Row from 'antd/lib/grid/row';
import Col from 'antd/lib/grid/col';

export class Binded extends PureComponent {
	public render() {
		return (
			<>
				<Row>
					<Col span={24}>
						<PlanetAdderContainer />
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<PlanetsListContainer />
					</Col>
				</Row>
			</>
		);
	}
}
