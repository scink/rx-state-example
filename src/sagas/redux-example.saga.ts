import {call, put, takeEvery} from 'redux-saga/effects';
import {ReduxExapmleService} from '../services/redux-example.service';
import getPlanet = ReduxExapmleService.getPlanet;
import getPerson = ReduxExapmleService.getPerson;
import {REDUX_EXAMPLE_ON_REQUEST_DATA, reduxExampleOnSuccessDataAction} from '../actions/redux-example.actions';

function* handleReduxExampleRequest() {
	const result = yield call(getPlanet, '1');
	const {residents: persons} = result;
	const requestRersidents = persons.map((person: string) => call(getPerson, person));
	const residents = yield requestRersidents;
	yield put(
		reduxExampleOnSuccessDataAction({
			...result,
			residents,
		}),
	);
}

export function* reduxExampleSaga() {
	yield takeEvery(REDUX_EXAMPLE_ON_REQUEST_DATA, handleReduxExampleRequest);
}
