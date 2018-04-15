import * as React from 'react';
import {PureComponent} from 'react';
import Search from 'antd/lib/input/Search';

export type TReduxExampleProps = {};
export type TReduxExampleState = {};

export class ReduxExample extends PureComponent<TReduxExampleProps, TReduxExampleState> {
	public readonly state: TReduxExampleState = {};

	public render() {
		const {} = this.props;
		const {} = this.state;

		return (
			<section>
				<Search placeholder={'id'} enterButton={'load'} onSearch={this.handleSearch} />
			</section>
		);
	}

	handleSearch = (id: string) => {
		console.log(id);
		// dispatch
	};
}
