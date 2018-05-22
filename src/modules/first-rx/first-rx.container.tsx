import * as React from 'react';
import {PureComponent} from 'react';
import {Subscription} from 'rxjs/Subscription';
import {FirstRx, TFirstRxProps} from './first-rx.component';
import {FirstRxService} from '../../services/first-rx.service';
import getData = FirstRxService.getData;

export class FirstRxContainer extends PureComponent<{}, TFirstRxProps> {
	subscription$?: Subscription;

	componentDidMount() {
		this.subscription$ = getData
			.map(data => ({
				planetName: data.name,
				planetDiameter: data.diameter,
			}))
			.subscribe(data => this.setState({data}));
	}

	componentWillUnmount() {
		this.subscription$ && this.subscription$.unsubscribe();
	}

	public render() {
		return <FirstRx {...this.state} />;
	}
}
