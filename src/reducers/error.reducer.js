import { TRIGGER_ERROR, UNTRIGGER_ERROR } from '../actions/error.actions';

export const error = (
	state = {
		isError: false,
		message: null,
		description: null
	},
	action
) => {
	switch (action.type) {
		case TRIGGER_ERROR:
			return action.payload;
		case UNTRIGGER_ERROR:
			return action.payload;
		default:
			return state;
	}
};
