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
import { START_LOADING, STOP_LOADING } from '../actions/loading.actions';

function* addItem(addItemAction) {
	// manage with try catch! and dispathc error action
	yield put({ type: START_LOADING });
	const insertedID = yield ItemsDAO.addItem(addItemAction.payload).then(
		id => id,
		onError
	);
	addItemAction.payload.key = insertedID;
	yield put({ type: ITEM_ADDED, payload: addItemAction.payload });
	yield put({ type: STOP_LOADING });
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
	yield put({ type: START_LOADING });
	const item = yield ItemsDAO.fetchItemByDate(
		fetchItemByDateAction.payload
	).then(fetchedItem => {
		if (fetchedItem.length) {
			return Item.buildFromRaw(fetchedItem[0]);
		}
		return null;
	}, onError);
	if (item) {
		yield put({ type: ITEM_FETCHED, payload: item });
	}
	yield put({ type: STOP_LOADING });
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
