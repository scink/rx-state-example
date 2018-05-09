import * as React from 'react';
import {PureComponent} from 'react';
import {EnterContainer} from '../containers/enter.container';
import {ItemsContainer} from '../containers/items.container';
import Row from 'antd/lib/grid/row';
import Col from 'antd/lib/grid/col';

export class Binded extends PureComponent {
	public render() {
		return (
			<Row gutter={10}>
				<Col span={12}>
					<EnterContainer />
				</Col>
				<Col span={12}>
					<ItemsContainer />
				</Col>
			</Row>
		);
	}
}
