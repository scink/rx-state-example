import createBrowserHistory from 'history/createBrowserHistory';
import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {rootReducer, TRootState} from './reducers';
import sagaMiddlewareFactory from 'redux-saga';
import {REDUX_EXAMPLE_INITIAL_STATE} from './reducers/redux-example.reducer';

export const history = createBrowserHistory({
	basename: process.env.BASE_HREF,
});

const initial: TRootState = {
	router: {location: null},
	reduxExample: REDUX_EXAMPLE_INITIAL_STATE,
};

const sagaMiddleware = sagaMiddlewareFactory();

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose; // tslint:disable-line

export const store = createStore(rootReducer, initial, composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)));

// sagaMiddleware.run({});
