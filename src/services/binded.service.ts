import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export namespace BindedService {
	export const items$ = new BehaviorSubject<string[]>([]);

	export const addItem = (item: string) => items$.next(items$.value.concat([item]));
}
