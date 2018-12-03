import { put, takeLatest, select } from 'redux-saga/effects';
import {
	ITEM_ADDED,
	ADD_ITEM,
	FETCH_ITEMS,
	ITEMS_FETCHED
} from '../actions/items.actions';

function* addItem(item) {
	yield put({ type: ITEM_ADDED, payload: item.payload });
}

function* fetchItems() {
	const items = yield select(state => state.items);
	yield put({ type: ITEMS_FETCHED, payload: items });
}

export function* itemsActionWatcher() {
	yield takeLatest(ADD_ITEM, addItem);
	yield takeLatest(FETCH_ITEMS, fetchItems);
}
