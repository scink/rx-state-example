import * as React from 'react';
import {PureComponent} from 'react';
import List from 'antd/lib/list';

export type TItemsProps = {
	items: string[];
};

export class Items extends PureComponent<TItemsProps> {
	public render() {
		const {items} = this.props;

		return <List dataSource={items} renderItem={(item: string) => <List.Item>{item}</List.Item>} bordered size={'large'} />;
	}
}
