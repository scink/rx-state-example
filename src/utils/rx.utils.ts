import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/ignoreElements';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/subscribeOn';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/withLatestFrom';

import {Observable} from 'rxjs/Observable';
import {isSome, Option} from 'fp-ts/lib/Option';

export function toKeyValue<A>(this: Observable<A>, key: string): Observable<{[key: string]: A}> {
	return this.map(value => ({[key]: value}));
}

Observable.prototype.toKeyValue = toKeyValue;

export function select<A, B>(this: Observable<A>, selector: (value: A) => B): Observable<B> {
	return this.map(selector).distinctUntilChanged();
}

Observable.prototype.select = select;

export function filterOption<A>(this: Observable<Option<A>>): Observable<A> {
	return this.filter(isSome).map(option => option.value);
}
Observable.prototype.filterOption = filterOption;

// tslint:disable-next-line
export function log<A>(this: Observable<A>, ...args: any[]): void {
	this.subscribe(arg => console.info(...args, arg));
}
Observable.prototype.log = log;

declare module 'rxjs/Observable' {
	// tslint:disable-next-line
	interface Observable<T> {
		toKeyValue: typeof toKeyValue;
		select: typeof select;
		filterOption: typeof filterOption;
		log: typeof log;
	}
}
