export const ADD_ITEM = 'ADD_ITEM';
export const ITEM_ADDED = 'ITEM_ADDED';
export const addItem = item => ({
	type: ADD_ITEM,
	payload: item
});

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const ITEMS_FETCHED = 'ITEMS_FETCHED';
export const fetchItems = () => ({
	type: FETCH_ITEMS
});

export const UPDATE_ITEM = 'UPDATE_ITEM';
export const ITEM_UPDATED = 'ITEM_UPDATED';
export const updateItem = item => ({
	type: UPDATE_ITEM,
	payload: item
});
