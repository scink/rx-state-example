import * as React from 'react';
import {Component} from 'react';
import Row from 'antd/lib/grid/row';
import Col from 'antd/lib/grid/col';
import {RemoteData} from '@devexperts/remote-data-ts';
import Card from 'antd/lib/card';
import {renderRemoteData} from '../';

export type TTatooineResident = {
	name: string;
	height: string;
	hairColor: string;
	skinColor: string;
	eyeColor: string;
	birthYear: string;
	id: string;
};

export type TTatooineData = {
	name: string;
	climate: string;
	rotationPeriod: string;
	residents: TTatooineResident[];
};

export type TTatooineProps = {
	data: RemoteData<Error, TTatooineData>;
};

export class Tatooine extends Component<TTatooineProps> {
	public render() {
		const {data} = this.props;

		return renderRemoteData({
			data,
			success: this.renderContent,
		});
	}

	private renderContent = (data: TTatooineData) => (
		<>
			<Row>
				<Col span={24}>Title</Col>
				<Col span={24}>
					<Card title={data.name}>
						<p>Climate: {data.climate}</p>
						<p>Rotation Period: {data.rotationPeriod}</p>
					</Card>
					Residents:
				</Col>
			</Row>
			<Row>
				{data.residents.map(resident => (
					<Col span={12} key={resident.id}>
						<Card title={resident.name}>
							<p>Birth Year: {resident.birthYear}</p>
							<p>Eye Color: {resident.eyeColor}</p>
							<p>Hair Color: {resident.hairColor}</p>
							<p>Height: {resident.height}</p>
							<p>Skin Color: {resident.skinColor}</p>
						</Card>
					</Col>
				))}
			</Row>
		</>
	);
}
