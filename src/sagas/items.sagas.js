import { put, takeLatest } from 'redux-saga/effects';
import { ITEM_ADDED } from '../actions/items.actions';

function* addNew(item) {
	yield put({ type: ITEM_ADDED, payload: item });
}

export function* itemsActionWatcher() {
	yield takeLatest('ADD_NEW', addNew);
}
