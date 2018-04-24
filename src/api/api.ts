import axios from 'axios';
const PLANET_PATH = 'https://swapi.co/api/planets/';

export const getPlanetAPI = (id: string) =>
	axios
		.get(`${PLANET_PATH}${id}`, {
			headers: {
				Accept: 'application/json',
			},
		})
		.then(response => response.data)
		.catch(err => {
			throw err;
		});
export const getPersonAPI = (path: string) =>
	axios
		.get(path, {
			headers: {
				Accept: 'application/json',
			},
		})
		.then(response => response.data)
		.catch(err => {
			throw err;
		});
