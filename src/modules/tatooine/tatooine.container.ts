import {compose} from 'fp-ts/lib/function';
import {initial} from '@devexperts/remote-data-ts';
import {merge} from 'rxjs/observable/merge';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {withDefaults} from '../HOCs/with-defaults.hoc';
import {Tatooine, TTatooineProps} from './tatooine.component';
import {withRX, WithRXSelector} from '../HOCs/with-rx.hoc';
import {TatooineService} from '../../services/tatooine.service';
import getTatooine = TatooineService.getTatooine;
import getResidents = TatooineService.getResidents;
import {TatooineUtils} from '../../utils/tatooine.utils';
import toUiResident = TatooineUtils.toUiResident;

type Default = 'data';

const defaults = withDefaults<TTatooineProps, Default>({data: initial});

const props$: WithRXSelector<TTatooineProps> = () => {
	const residents$ = getTatooine
		.switchMap(tatooineRD => getResidents(tatooineRD.fold([], [], () => [], tatooine => tatooine.residents)))
		.map(residentsRD => residentsRD.map(residents => residents.map(toUiResident)));

	const data$ = combineLatest(getTatooine, residents$).map(([tatooineRD, residentsRD]) =>
		tatooineRD.chain(tatooine => residentsRD.map(residents => ({...tatooine, residents}))),
	);

	return merge(data$.toKeyValue('data'));
};

const enhance = compose(defaults, withRX(props$));

export const TatooineContainer = enhance(Tatooine);
