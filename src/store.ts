import createBrowserHistory from 'history/createBrowserHistory';
import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {REDUX_EXAMPLE_INITIAL_STATE, rootReducer, TRootState} from './reducers';
import saga from 'redux-saga';
import {root as rootSaga} from './sagas';

export const history = createBrowserHistory({
	basename: process.env.BASE_HREF,
});

const initial: TRootState = {
	router: {location: null},
	reduxExample: REDUX_EXAMPLE_INITIAL_STATE,
};

const sagas = saga();

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose; // tslint:disable-line

export const store = createStore(rootReducer, initial, composeEnhancers(applyMiddleware(sagas, routerMiddleware(history))));

sagas.run(rootSaga);
