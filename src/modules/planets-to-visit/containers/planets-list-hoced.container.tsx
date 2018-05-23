import {withRX, WithRXSelector} from '../../HOCs/with-rx.hoc';
import {PlanetsList, TPlanetsListProps} from '../components/planets-list.pure';
import * as React from 'react';
import {getPlanetsList} from '../../../services/planets-to-visit.service';

const props$: WithRXSelector<TPlanetsListProps> = () => getPlanetsList().map(items => ({items}));

export const ItemsContainer = withRX(props$)(PlanetsList);

const result = <ItemsContainer items={[]} />;
