import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';

export namespace BindedService {
	const _items$ = new Subject<string[]>();

	export const addItem = (item: string) => _items$.next([item]);
	export const items$ = _items$.scan((prev, next) => prev.concat(next));
}
