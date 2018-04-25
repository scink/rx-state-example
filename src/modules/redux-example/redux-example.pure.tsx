import * as React from 'react';
import {PureComponent} from 'react';
import {TCharacter, TPlanet} from '../../models';

export type TReduxExampleData = {
	payload: TPlanet<TCharacter>;
	error: Error;
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
		if (data.error) {
			return <span>{data.error.message}</span>;
		}
		return (
			<>
				<h2>Planet: {data.payload.name}</h2>
				<h3>Residents:</h3>
				{data.payload.residents.map((item, i) => <div key={i}>{item.name}</div>)}
			</>
		);
	}
}
