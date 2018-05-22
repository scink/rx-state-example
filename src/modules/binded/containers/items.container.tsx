import {PureComponent} from 'react';
import {Subscription} from 'rxjs/Subscription';
import {BindedService} from '../../../services/binded.service';
import getItems = BindedService.items$;
import {Items, TItemsProps} from '../components/items.pure';
import * as React from 'react';

export class ItemsContainer extends PureComponent<{}, TItemsProps> {
	subscription$?: Subscription;

	componentDidMount() {
		this.subscription$ = getItems.subscribe(items => {
			this.setState({items});
		});
	}

	componentWillUnmount() {
		this.subscription$ && this.subscription$.unsubscribe();
	}

	render() {
		return <Items {...this.state} />;
	}
}
