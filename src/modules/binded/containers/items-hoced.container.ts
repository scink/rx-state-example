import {compose} from 'fp-ts/lib/function';
import {withDefaults} from '../../HOCs/with-defaults.hoc';
import {Items, TItemsProps} from '../components/items.pure';
import {withRX, WithRXSelector} from '../../HOCs/with-rx.hoc';
import {BindedService} from '../../../services/binded.service';
import getItems = BindedService.items$;

type Default = 'items';

const defaults = withDefaults<TItemsProps, Default>({
	items: [],
});
const props$: WithRXSelector<TItemsProps> = () => getItems.map(items => ({items}));
const enhance = compose(defaults, withRX(props$));

export const ItemsContainer = enhance(Items);
