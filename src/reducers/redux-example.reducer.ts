import {AnyAction} from 'redux';
import {REDUX_EXAMPLE_ON_REQUEST_DATA, REDUX_EXAMPLE_ON_SUCCESS_DATA, TReduxExampleAction} from '../actions';

export type TReduxExampleState = {
	payload: string[];
	isPending: boolean;
};

export const REDUX_EXAMPLE_INITIAL_STATE: TReduxExampleState = {
	payload: ['string0', 'string1', 'string2', 'string3', 'string4'],
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

		default:
			return state;
	}
};
