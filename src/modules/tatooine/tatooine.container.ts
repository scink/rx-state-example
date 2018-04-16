import {compose} from 'fp-ts/lib/function';
import {initial} from '@devexperts/remote-data-ts';
import {withDefaults, withRX, WithRXSelector} from '../';
import {Tatooine, TTatooineProps} from './';
import {merge} from 'rxjs/observable/merge';
import getTatooine = TatooineService.getTatooine;
import getResidents = TatooineService.getResidents;
import {TatooineService} from '../../services';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {TatooineUtils} from '../../utils';
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
