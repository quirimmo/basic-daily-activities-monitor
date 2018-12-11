import { START_LOADING, STOP_LOADING } from '../actions/loading.actions';

export const isLoading = (state = false, action) => {
	switch (action.type) {
		case START_LOADING:
			return true;
		case STOP_LOADING:
			return false;
		default:
			return state;
	}
};
