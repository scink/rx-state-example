import * as React from 'react';
import {PureComponent} from 'react';

export type TReduxExampleData = {
	payload: any[];
	isPending: boolean;
};

export type TReduxExampleProps = {
	data: TReduxExampleData;
	onRequestData: () => void;
};

export class ReduxExample extends PureComponent<TReduxExampleProps> {
	componentDidMount() {
		this.props.onRequestData();
	}

	public render() {
		const {data} = this.props;
		return <>{data.payload.map((item, i) => <div key={i}>{item.name}</div>)}</>;
	}
}
