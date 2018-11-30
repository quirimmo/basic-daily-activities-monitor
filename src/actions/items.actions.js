export const ADD_ITEM = 'ADD_ITEM';
export const ITEM_ADDED = 'ITEM_ADDED';
export const addItem = item => ({
	type: ADD_ITEM,
	payload: item
});
