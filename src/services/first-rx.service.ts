import {ajax} from 'rxjs/observable/dom/ajax';
import {Observable} from 'rxjs/Observable';

export namespace FirstRxService {
	export type Response = {
		name: string;
		rotation_period: string;
		orbital_period: string;
		diameter: string;
		climate: string;
		gravity: string;
		terrain: string;
		surface_water: string;
		population: string;
		residents: string[];
		films: string[];
		created: string;
		edited: string;
		url: string;
	};

	const url = 'https://swapi.co/api/planets/1/';
	export const getData: Observable<Response> = ajax(url)
		.map(res => res.response)
		.shareReplay(1);
}
