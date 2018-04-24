import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {getPersonAPI, getPlanetAPI} from '../api/api';
import {
	reduxExampleOnSuccessDataAction,
	REDUX_EXAMPLE_ON_REQUEST_DATA,
	TReduxExampleOnRequestDataAction,
	reduxExampleOnErrorDataAction,
} from '../actions';

function* handleReduxExampleRequest(action: TReduxExampleOnRequestDataAction) {
	try {
		const result = yield call(getPlanetAPI, '1');
		const {residents} = result;
		const requestRersidents = residents.map((resident: string) => call(getPersonAPI, resident));
		const persons = yield requestRersidents;
		yield put(reduxExampleOnSuccessDataAction(persons));
	} catch (error) {
		yield put(reduxExampleOnErrorDataAction(error));
	}
}

export function* reduxExampleSaga() {
	yield takeEvery(REDUX_EXAMPLE_ON_REQUEST_DATA, handleReduxExampleRequest);
}
