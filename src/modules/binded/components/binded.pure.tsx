import * as React from 'react';
import {CSSProperties, PureComponent} from 'react';
import {EnterContainer} from '../containers/enter.container';
import {ItemsContainer} from '../containers/items.container';
import styled from 'react-emotion';

const css: CSSProperties = {
	display: 'flex',
	justifyContent: 'space-between',
};

const StyledSection = styled('section')(css);

export class Binded extends PureComponent {
	public render() {
		return (
			<StyledSection>
				<EnterContainer />
				<ItemsContainer />
			</StyledSection>
		);
	}
}
