export const TRIGGER_ERROR = 'TRIGGER_ERROR';
export const triggerError = error => ({
	type: TRIGGER_ERROR,
	payload: {
		isError: true,
		message: error.message,
		description: error.description
	}
});

export const UNTRIGGER_ERROR = 'UNTRIGGER_ERROR';
export const untriggerError = () => ({
	type: UNTRIGGER_ERROR,
	payload: {
		isError: false,
		message: null,
		description: null
	}
});
