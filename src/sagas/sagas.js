import { all } from 'redux-saga/effects';
import { itemsActionWatcher } from './items.sagas';

export function* mySaga() {
	yield all([itemsActionWatcher()]);
}
