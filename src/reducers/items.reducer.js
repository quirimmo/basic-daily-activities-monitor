import {
	ITEM_ADDED,
	ITEMS_FETCHED,
	ITEM_UPDATED,
	ITEM_DELETED
} from '../actions/items.actions';

export const items = (state = [], action) => {
	switch (action.type) {
		case ITEM_ADDED:
			return state.concat(action.payload);
		case ITEMS_FETCHED:
			return action.payload;
		case ITEM_DELETED:
			return state.filter(item => item.key !== action.payload.key);
		case ITEM_UPDATED:
			return state.map(item => {
				if (item.key !== action.payload.key) {
					return item;
				}
				return action.payload;
			});
		default:
			return state;
	}
};
