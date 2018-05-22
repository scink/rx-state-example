import {PureComponent} from 'react';
import {BindedService} from '../../../services/binded.service';
import {Enter, TEnterProps} from '../components/enter.pure';
import * as React from 'react';
import addItem = BindedService.addItem;
import {Subscription} from 'rxjs/Subscription';
import {of} from 'rxjs/observable/of';

export class EnterContainer extends PureComponent<{}, TEnterProps> {
	subscription$?: Subscription;

	componentDidMount() {
		of(addItem).subscribe(onClick => this.setState({onClick}));
	}

	componentWillUnmount() {
		this.subscription$ && this.subscription$.unsubscribe();
	}

	render() {
		return <Enter {...this.state} />;
	}
}
