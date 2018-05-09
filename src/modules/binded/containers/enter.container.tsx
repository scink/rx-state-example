import {PureComponent} from 'react';
import {BindedService} from '../../../services/binded.service';
import {Enter} from '../components/enter.pure';
import * as React from 'react';
import addItem = BindedService.addItem;

export class EnterContainer extends PureComponent {
	render() {
		return <Enter onClick={addItem} />;
	}
}
