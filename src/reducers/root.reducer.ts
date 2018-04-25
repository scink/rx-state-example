import {combineReducers, Reducer} from 'redux';
import {reduxExampleReducer, TReduxExampleState} from './redux-example.reducer';
import {routerReducer, RouterState} from 'react-router-redux';

export type TRootState = {
	router: RouterState;
	reduxExample: TReduxExampleState;
};

export const rootReducer: Reducer<TRootState> = combineReducers<TRootState>({
	router: routerReducer as Reducer<RouterState>,
	reduxExample: reduxExampleReducer,
});
