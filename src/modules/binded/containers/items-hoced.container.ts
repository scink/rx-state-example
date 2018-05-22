import {withRX, WithRXSelector} from '../../HOCs/with-rx.hoc';
import {Items, TItemsProps} from '../components/items.pure';
import {BindedService} from '../../../services/binded.service';
import getItems = BindedService.items$;

const props$: WithRXSelector<TItemsProps> = () => getItems.map(items => ({items}));

export const ItemsContainer = withRX(props$)(Items);
