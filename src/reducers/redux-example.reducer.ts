import {AnyAction} from 'redux';
import {TCharacter, TPlanet} from '../models/star-wars-api.models';
import {REDUX_EXAMPLE_ON_REQUEST_DATA, REDUX_EXAMPLE_ON_SUCCESS_DATA, TReduxExampleAction} from '../actions/redux-example.actions';

export type TReduxExampleState = {
	payload: TPlanet<TCharacter>;
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
