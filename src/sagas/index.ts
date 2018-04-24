import {fork} from 'redux-saga/effects';
import {reduxExampleSaga} from './redux-example.saga';

export function* root() {
	yield fork(reduxExampleSaga);
}
