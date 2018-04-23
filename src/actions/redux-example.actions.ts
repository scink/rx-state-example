export const REDUX_EXAMPLE_ON_REQUEST_DATA = 'REDUX_EXAMPLE_ON_REQUEST_DATA';
export type TReduxExampleOnRequestDataAction = {
	type: typeof REDUX_EXAMPLE_ON_REQUEST_DATA;
};
export const reduxExampleOnRequestAction = (): TReduxExampleOnRequestDataAction => ({type: REDUX_EXAMPLE_ON_REQUEST_DATA});

export const REDUX_EXAMPLE_ON_SUCCESS_DATA = 'REDUX_EXAMPLE_ON_SUCCESS_DATA';
export type TReduxExampleOnSuccessDataAction = {
	type: typeof REDUX_EXAMPLE_ON_SUCCESS_DATA;
	payload: string[];
};
export const reduxExampleOnSuccessDataAction = (payload: string[]): TReduxExampleOnSuccessDataAction => ({
	type: REDUX_EXAMPLE_ON_SUCCESS_DATA,
	payload,
});

export type TReduxExampleAction = TReduxExampleOnRequestDataAction;
