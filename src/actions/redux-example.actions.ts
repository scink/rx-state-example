export const REDUX_EXAMPLE_ON_REQUEST_DATA = 'REDUX_EXAMPLE_ON_REQUEST_DATA';
export type TReduxExampleOnRequestDataAction = {
	type: typeof REDUX_EXAMPLE_ON_REQUEST_DATA;
	payload: {
		id: string;
	};
};

export const reduxExampleOnRequestAction = (id: string): TReduxExampleOnRequestDataAction => ({
	type: REDUX_EXAMPLE_ON_REQUEST_DATA,
	payload: {id},
});

export type TReduxExampleAction = TReduxExampleOnRequestDataAction;
