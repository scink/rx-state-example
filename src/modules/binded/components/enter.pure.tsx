import * as React from 'react';
import {PureComponent} from 'react';
import Search from 'antd/lib/input/Search';

export type TEnterProps = {
	onClick: (value: string) => void;
};

export class Enter extends PureComponent<TEnterProps> {
	public render() {
		const {onClick} = this.props;

		return <Search placeholder={'enter new item'} enterButton={'add'} onSearch={onClick} size={'large'} />;
	}
}
