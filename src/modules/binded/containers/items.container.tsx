import {PureComponent} from 'react';
import {animationFrame} from 'rxjs/scheduler/animationFrame';
import {Subscription} from 'rxjs/Subscription';
import {BindedService} from '../../../services/binded.service';
import getItems = BindedService.items$;
import {Items} from '../components/items.pure';
import * as React from 'react';
import 'rxjs/add/operator/subscribeOn';

export type TItemsContainerState = {
	items: string[];
};

export class ItemsContainer extends PureComponent {
	readonly state: TItemsContainerState = {
		items: [],
	};

	items$?: Subscription;

	componentDidMount() {
		this.items$ = getItems.subscribeOn(animationFrame).subscribe(items => this.setState({items}));
	}

	componentWillUnmount() {
		this.items$ && this.items$.unsubscribe();
	}

	render() {
		return <Items items={this.state.items} />;
	}
}
