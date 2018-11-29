import { put } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';

const ITEMS_FETCH_FAILED = 'ITEMS_FETCH_FAILED';
const ITEMS_FETCH_SUCCESS = 'ITEMS_FETCH_SUCCESS';
const ITEMS_FETCH = 'ITEMS_FETCH';

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
