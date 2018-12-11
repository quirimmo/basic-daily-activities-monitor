import { put, takeLatest } from 'redux-saga/effects';
import {
	ITEM_ADDED,
	ADD_ITEM,
	FETCH_ITEMS,
	ITEMS_FETCHED
} from '../actions/items.actions';
import { ItemsDAO } from '../models/items.dao';
import { Item } from '../models/item.model';

function* addItem(addItemAction) {
	// manage with try catch! and dispathc error action
	const insertedID = yield ItemsDAO.addItem(addItemAction.payload).then(
		id => id
	);
	addItemAction.payload.key = insertedID;
	yield put({ type: ITEM_ADDED, payload: addItemAction.payload });
}

function* fetchItems() {
	// manage with try catch! and dispathc error action
	const items = yield ItemsDAO.fetchItems().then(allItems =>
		allItems.map(item => Item.buildFromRaw(item))
	);
	yield put({ type: ITEMS_FETCHED, payload: items });
}

export function* itemsActionWatcher() {
	yield takeLatest(ADD_ITEM, addItem);
	yield takeLatest(FETCH_ITEMS, fetchItems);
}
