import * as React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';

export class Index extends Component<{}> {
	public render() {
		return (
			<>
				<div>
					<Link to={'/first-example'}>Planet Info</Link>
				</div>
				{/*<div>*/}
				{/*<Link to={'/rx-example'}>rx-example</Link>*/}
				{/*</div>*/}
				<div>
					<Link to={'/second-example'}>Planets To Visit</Link>
				</div>
			</>
		);
	}
}
