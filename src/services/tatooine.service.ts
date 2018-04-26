import {combineLatest} from 'rxjs/observable/combineLatest';
import {RemoteData, success} from '@devexperts/remote-data-ts';
import {Observable} from 'rxjs/Observable';
import {uuid} from '@devexperts/utils/dist/string';
import {ApiClient} from '../utils/api-client.utils';
import {TCharacter, TPlanet} from '../models/star-wars-api.models';

export namespace TatooineService {
	const api = ApiClient.create('https://swapi.co/api/');

	export const getTatooine = api.get<TPlanet>('planets/1/');

	export const getResidents = (residents: string[]): Observable<RemoteData<Error, TCharacter[]>> =>
		combineLatest(...residents.map(item => api.get(item.slice(21))))
			.map(itemsRD =>
				success<Error, TCharacter[]>(itemsRD.reduce((acc, item) => item.fold(acc, acc, () => acc, some => acc.concat([some])), [])),
			)
			.map(itemsRD =>
				itemsRD.map(items =>
					items.map(item => ({
						...item,
						id: uuid(),
					})),
				),
			);
}
