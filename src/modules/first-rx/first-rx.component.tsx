import * as React from 'react';
import {PureComponent} from 'react';
import Spin from 'antd/lib/spin';

export type TFirstRxData = {
	name: string;
	diameter: string;
};

export type TFirstRxProps = {
	data: TFirstRxData;
};

export class FirstRx extends PureComponent<TFirstRxProps> {
	public render() {
		const {data} = this.props;

		if (!data) {
			return <Spin size={'large'} />;
		}

		return (
			<div>
				<p>Name: {data.name}</p>
				<p>Diameter: {data.diameter}</p>
			</div>
		);
	}
}
