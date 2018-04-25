import {call, put, takeEvery} from 'redux-saga/effects';
import {reduxExampleOnSuccessDataAction, REDUX_EXAMPLE_ON_REQUEST_DATA, reduxExampleOnErrorDataAction} from '../actions';
import {ReduxExapmleService} from '../services';
import getPlanet = ReduxExapmleService.getPlanet;
import getPerson = ReduxExapmleService.getPerson;

function* handleReduxExampleRequest() {
	try {
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
	} catch (error) {
		yield put(reduxExampleOnErrorDataAction(error));
	}
}

export function* reduxExampleSaga() {
	yield takeEvery(REDUX_EXAMPLE_ON_REQUEST_DATA, handleReduxExampleRequest);
}
