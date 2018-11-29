export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';

export function addItem(item) {
	return {
		type: ADD_ITEM,
		item
	};
}

export function addItemSuccess() {
	return {
		type: ADD_ITEM_SUCCESS
	};
}
