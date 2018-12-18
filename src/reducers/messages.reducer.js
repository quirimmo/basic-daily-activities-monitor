import { SHOW_MESSAGE, HIDE_MESSAGE } from '../actions/messages.actions';

export const message = (
	state = { isVisible: false, content: null },
	action
) => {
	switch (action.type) {
		case SHOW_MESSAGE:
			return action.payload;
		case HIDE_MESSAGE:
			return action.payload;
		default:
			return state;
	}
};
