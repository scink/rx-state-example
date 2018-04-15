import {routerReducer as router, RouterState} from 'react-router-redux';
import {combineReducers, Reducer} from 'redux';
import {reduxExampleReducer as reduxExample, TReduxExampleState} from './redux-example.reducer';

export type TRootState = {
	router: RouterState;
	reduxExample: TReduxExampleState;
};

export const rootReducer: Reducer<TRootState> = combineReducers<TRootState>({
	router,
	reduxExample,
} as any);
