import { ADD_ITEM, ITEM_ADDED } from '../actions/items.actions';

export const items = (state = [], action) => {
	switch (action.type) {
		case ADD_ITEM:
			return state;
		case ITEM_ADDED:
			return [].concat(state).concat(action.payload);
		default:
			return state;
	}
};
