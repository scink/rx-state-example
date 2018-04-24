import {AnyAction} from 'redux';
import {REDUX_EXAMPLE_ON_ERROR_DATA, REDUX_EXAMPLE_ON_REQUEST_DATA, REDUX_EXAMPLE_ON_SUCCESS_DATA, TReduxExampleAction} from '../actions';

export type TReduxExampleState = {
	payload: any[];
	error?: string | null;
	isPending: boolean;
};

export const REDUX_EXAMPLE_INITIAL_STATE: TReduxExampleState = {
	payload: [],
	error: null,
	isPending: false,
};

export const reduxExampleReducer = (
	state: TReduxExampleState = REDUX_EXAMPLE_INITIAL_STATE,
	preAction: TReduxExampleAction,
): TReduxExampleState => {
	const action = preAction as AnyAction;

	switch (action.type) {
		case REDUX_EXAMPLE_ON_REQUEST_DATA: {
			return {
				...state,
				isPending: true,
			};
		}

		case REDUX_EXAMPLE_ON_SUCCESS_DATA: {
			const {payload} = action;

			return {
				...state,
				isPending: false,
				payload,
			};
		}

		case REDUX_EXAMPLE_ON_ERROR_DATA: {
			const {payload: {error}} = action;

			return {
				...state,
				isPending: false,
				error: error.message,
			};
		}

		default:
			return state;
	}
};
