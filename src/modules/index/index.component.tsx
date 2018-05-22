import * as React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';

export class Index extends Component<{}> {
	public render() {
		return (
			<>
				<div>
					<Link to={'/first-example'}>first example</Link>
				</div>
				{/*<div>*/}
				{/*<Link to={'/rx-example'}>rx-example</Link>*/}
				{/*</div>*/}
				<div>
					<Link to={'/second-example'}>second example</Link>
				</div>
			</>
		);
	}
}
