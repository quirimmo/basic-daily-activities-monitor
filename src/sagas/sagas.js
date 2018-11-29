import { all } from 'redux-saga/effects';
import { watchFetchItems } from './items.sagas';

export function* mySaga() {
	yield all([watchFetchItems()]);
}
