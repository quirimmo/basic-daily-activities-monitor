import { ITEM_ADDED, ITEMS_FETCHED } from '../actions/items.actions';

export const items = (state = [], action) => {
	switch (action.type) {
		case ITEM_ADDED:
			return [].concat(state).concat(action.payload);
		case ITEMS_FETCHED:
			return action.payload;
		default:
			return state;
	}
};
