import { all } from 'redux-saga/effects';
import { watchFetchItems, watchAddItem } from './items.sagas';

export function* mySaga() {
	yield all([watchFetchItems(), watchAddItem()]);
}
