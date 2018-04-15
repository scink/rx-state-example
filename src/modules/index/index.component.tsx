import * as React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';

export class Index extends Component<{}> {
	public render() {
		return (
			<>
				<Link to={'/redux-example'}>react-example</Link>
			</>
		);
	}
}
