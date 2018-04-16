import {ApiClient} from '../utils';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {RemoteData, success} from '@devexperts/remote-data-ts';
import {Observable} from 'rxjs/Observable';
import {uuid} from '@devexperts/utils/dist/string';

export type TInfo = {
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

export type TResident = {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: string[];
	species: string[];
	vehicles: string[];
	starships: string[];
	created: string;
	edited: string;
	url: string;
	id: string;
};

export namespace TatooineService {
	const api = ApiClient.create('https://swapi.co/api/');

	export const getTatooine = api.get<TInfo>('planets/1/');

	export const getResidents = (residents: string[]): Observable<RemoteData<Error, TResident[]>> =>
		combineLatest(...residents.map(item => api.get(item.slice(21))))
			.map(itemsRD =>
				success<Error, TResident[]>(itemsRD.reduce((acc, item) => item.fold(acc, acc, () => acc, some => acc.concat([some])), [])),
			)
			.map(itemsRD => itemsRD.map(items => items.map(item => ({...item, id: uuid()}))));
}
