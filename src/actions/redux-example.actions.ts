import {TCharacter, TPlanet} from '../models';

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

export const REDUX_EXAMPLE_ON_ERROR_DATA = 'REDUX_EXAMPLE_ON_ERROR_DATA';
export type TReduxExampleOnErrorDataAction = {
	type: typeof REDUX_EXAMPLE_ON_ERROR_DATA;
	payload: {
		error: Error;
	};
};

export const reduxExampleOnErrorDataAction = (error: Error): TReduxExampleOnErrorDataAction => ({
	type: REDUX_EXAMPLE_ON_ERROR_DATA,
	payload: {
		error,
	},
});

export type TReduxExampleAction = TReduxExampleOnRequestDataAction | TReduxExampleOnSuccessDataAction | TReduxExampleOnErrorDataAction;
