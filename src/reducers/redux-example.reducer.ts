import {AnyAction} from 'redux';
import {REDUX_EXAMPLE_ON_REQUEST_DATA, TReduxExampleAction} from '../actions';

export type TReduxExampleState = {
	selectedId: string;
	payload: any[];
};

export const REDUX_EXAMPLE_INITIAL_STATE: TReduxExampleState = {
	selectedId: '',
	payload: [],
};

export const reduxExampleReducer = (
	state: TReduxExampleState = REDUX_EXAMPLE_INITIAL_STATE,
	preAction: TReduxExampleAction,
): TReduxExampleState => {
	const action = preAction as AnyAction;

	switch (action.type) {
		case REDUX_EXAMPLE_ON_REQUEST_DATA: {
			const {id} = action.payload;

			return {
				...state,
				selectedId: id,
			};
		}

		default:
			return state;
	}
};
