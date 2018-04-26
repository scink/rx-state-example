import {TCharacter, TPlanet} from '../models/star-wars-api.models';

export const REDUX_EXAMPLE_ON_REQUEST_DATA = 'REDUX_EXAMPLE_ON_REQUEST_DATA';
export type TReduxExampleOnRequestDataAction = {
	type: typeof REDUX_EXAMPLE_ON_REQUEST_DATA;
};
export const reduxExampleOnRequestAction = (): TReduxExampleOnRequestDataAction => ({type: REDUX_EXAMPLE_ON_REQUEST_DATA});

export const REDUX_EXAMPLE_ON_SUCCESS_DATA = 'REDUX_EXAMPLE_ON_SUCCESS_DATA';
export type TReduxExampleOnSuccessDataAction = {
	type: typeof REDUX_EXAMPLE_ON_SUCCESS_DATA;
	payload: TPlanet<TCharacter>;
};
export const reduxExampleOnSuccessDataAction = (payload: TPlanet<TCharacter>): TReduxExampleOnSuccessDataAction => ({
	type: REDUX_EXAMPLE_ON_SUCCESS_DATA,
	payload,
});

export type TReduxExampleAction = TReduxExampleOnRequestDataAction | TReduxExampleOnSuccessDataAction;
