import { put, takeLatest } from 'redux-saga/effects';
import {
	ITEM_ADDED,
	ADD_ITEM,
	UPDATE_ITEM,
	FETCH_ITEMS,
	ITEMS_FETCHED,
	ITEM_UPDATED,
	DELETE_ITEM,
	ITEM_DELETED,
	FETCH_ITEM,
	ITEM_FETCHED
} from '../actions/items.actions';
import { ItemsDAO } from '../models/items.dao';
import { Item } from '../models/item.model';

function* addItem(addItemAction) {
	// manage with try catch! and dispathc error action
	const insertedID = yield ItemsDAO.addItem(addItemAction.payload).then(
		id => id,
		onError
	);
	addItemAction.payload.key = insertedID;
	yield put({ type: ITEM_ADDED, payload: addItemAction.payload });
}

function* fetchItems() {
	// manage with try catch! and dispathc error action
	const items = yield ItemsDAO.fetchItems().then(
		allItems => allItems.map(item => Item.buildFromRaw(item)),
		onError
	);
	yield put({ type: ITEMS_FETCHED, payload: items });
}

function* fetchItemByDate(fetchItemByDateAction) {
	// manage with try catch! and dispathc error action
	const item = yield ItemsDAO.fetchItemByDate(
		fetchItemByDateAction.payload
	).then(fetchedItem => Item.buildFromRaw(fetchedItem[0]), onError);
	yield put({ type: ITEM_FETCHED, payload: item });
}

function* updateItem(updateItemAction) {
	// manage with try catch! and dispathc error action
	yield ItemsDAO.updateItem(updateItemAction.payload).then(() => {}, onError);
	yield put({ type: ITEM_UPDATED, payload: updateItemAction.payload });
}

function* deleteItem(deleteItemAction) {
	// manage with try catch! and dispathc error action
	yield ItemsDAO.deleteItem(deleteItemAction.payload).then(() => {}, onError);
	yield put({ type: ITEM_DELETED, payload: deleteItemAction.payload });
}

export function* itemsActionWatcher() {
	yield takeLatest(ADD_ITEM, addItem);
	yield takeLatest(UPDATE_ITEM, updateItem);
	yield takeLatest(DELETE_ITEM, deleteItem);
	yield takeLatest(FETCH_ITEMS, fetchItems);
	yield takeLatest(FETCH_ITEM, fetchItemByDate);
}

function onError(err) {
	console.error(err);
}
