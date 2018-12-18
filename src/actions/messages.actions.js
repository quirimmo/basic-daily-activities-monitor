export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const showMessage = (content, type) => ({
	type: SHOW_MESSAGE,
	payload: {
		isVisible: true,
		content,
		type
	}
});

export const HIDE_MESSAGE = 'HIDE_MESSAGE';
export const hideMessage = () => ({
	type: HIDE_MESSAGE,
	payload: {
		isVisible: false,
		content: null,
		type: null
	}
});
