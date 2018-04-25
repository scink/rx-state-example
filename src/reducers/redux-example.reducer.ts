import {AnyAction} from 'redux';
import {REDUX_EXAMPLE_ON_ERROR_DATA, REDUX_EXAMPLE_ON_REQUEST_DATA, REDUX_EXAMPLE_ON_SUCCESS_DATA, TReduxExampleAction} from '../actions';
import {TCharacter, TPlanet} from '../models';

export type TReduxExampleState = {
	payload: TPlanet<TCharacter>;
	error: Error | null;
	isPending: boolean;
};

export const REDUX_EXAMPLE_INITIAL_STATE: TReduxExampleState = {
	payload: {
		name: '',
		rotation_period: '',
		orbital_period: '',
		diameter: '',
		climate: '',
		gravity: '',
		terrain: '',
		surface_water: '',
		population: '',
		residents: [],
		films: [],
		created: '',
		edited: '',
		url: '',
	},
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
				error: null,
			};
		}

		case REDUX_EXAMPLE_ON_SUCCESS_DATA: {
			const {payload} = action;

			return {
				...state,
				isPending: false,
				payload,
				error: null,
			};
		}

		case REDUX_EXAMPLE_ON_ERROR_DATA: {
			const {payload: {error}} = action;

			return {
				...state,
				isPending: false,
				error,
			};
		}

		default:
			return state;
	}
};
