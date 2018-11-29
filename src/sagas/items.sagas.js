import { put } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/items.actions';

const ITEMS_FETCH_FAILED = 'ITEMS_FETCH_FAILED';
const ITEMS_FETCH_SUCCESS = 'ITEMS_FETCH_SUCCESS';
export const ITEMS_FETCH = 'ITEMS_FETCH';

function* fetchItems() {
	try {
		// const user = yield call(Api.fetchUser, action.payload.userId);
		const items = [];
		yield put({ type: ITEMS_FETCH_SUCCESS, items });
	} catch (e) {
		yield put({ type: ITEMS_FETCH_FAILED, message: e.message });
	}
}

export function* watchFetchItems() {
	yield takeEvery(ITEMS_FETCH, fetchItems);
}

// const ITEMS_FETCH_FAILED = 'ITEMS_FETCH_FAILED';
// const ITEM_ADD_SUCCESS = 'ITEM_ADD_SUCCESS';
// export const ITEM_ADD = 'ITEM_ADD';

// function* addItem(item) {
// 	console.log('adding item', item);
// 	yield put({ type: ITEM_ADD_SUCCESS, item: item.item });
// }

// export function* watchAddItem() {
// 	yield takeEvery(ITEM_ADD, addItem);
// }

export function* addItem(item) {
	console.log('adding item', item);
	yield put(actions.addItem(item));
	// const items = [];
	yield put(actions.addItemSuccess());
	// yield put(actions.requestPosts(reddit));
	// const posts = yield call(fetchPostsApi, reddit);
	// yield put(actions.receivePosts(reddit, posts));
}
