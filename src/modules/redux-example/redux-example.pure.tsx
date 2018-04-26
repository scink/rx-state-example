import * as React from 'react';
import {PureComponent} from 'react';
import {TCharacter, TPlanet} from '../../models';

export type TReduxExampleData = {
	payload: TPlanet<TCharacter>;
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
		return (
			<>
				<h2>Planet: {data.payload.name}</h2>
				<h3>Residents:</h3>
				{data.payload.residents.map((item, i) => <div key={i}>{item.name}</div>)}
			</>
		);
	}
}
