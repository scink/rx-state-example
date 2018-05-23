import * as React from 'react';
import {PureComponent} from 'react';
import List from 'antd/lib/list';

export type TPlanetsListProps = {
	items: string[];
};

export class PlanetsList extends PureComponent<TPlanetsListProps> {
	public render() {
		const {items} = this.props;

		return <List dataSource={items} renderItem={(item: string) => <List.Item>{item}</List.Item>} bordered size={'large'} />;
	}
}
