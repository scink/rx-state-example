import {ajax} from 'rxjs/observable/dom/ajax';
import {Observable} from 'rxjs/Observable';

export namespace FirstRxService {
	export type Response = {
		name: string;
		diameter: string;
	};

	export const getData: Observable<Response> = ajax('https://swapi.co/api/planets/1/').map(res => res.response);
}
