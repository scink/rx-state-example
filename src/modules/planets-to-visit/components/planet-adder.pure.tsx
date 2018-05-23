import * as React from 'react';
import {PureComponent} from 'react';
import Search from 'antd/lib/input/Search';

export type TPlanetAdderProps = {
	onClick: (value: string) => void;
};

export class PlanetAdder extends PureComponent<TPlanetAdderProps> {
	public render() {
		const {onClick} = this.props;

		return <Search placeholder={'enter new item'} enterButton={'add'} onSearch={onClick} size={'large'} />;
	}
}
