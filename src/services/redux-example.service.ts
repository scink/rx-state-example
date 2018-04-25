import axios from 'axios';

export namespace ReduxExapmleService {
	const PLANET_PATH = 'https://swapi.co/api/planets/';
	const headers = {Accept: 'application/json'};

	export const getPlanet = (id: string) =>
		axios
			.get(`${PLANET_PATH}${id}`, {headers})
			.then(response => response.data)
			.catch(err => {
				throw err;
			});

	export const getPerson = (path: string) =>
		axios
			.get(path, {headers})
			.then(response => response.data)
			.catch(err => {
				throw err;
			});
}
