import * as React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';

export class Index extends Component<{}> {
	public render() {
		return (
			<>
				<div>
					<Link to={'/first-rx'}>first-rx</Link>
				</div>
				<div>
					<Link to={'/rx-example'}>rx-example</Link>
				</div>
				<div>
					<Link to={'/binded'}>binded</Link>
				</div>
			</>
		);
	}
}
