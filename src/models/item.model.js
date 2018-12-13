export class Item {
	constructor(date) {
		this.key = null;
		this.date = date;
		this.sleep = {
			start: null,
			end: null
		};
		this.breakfast = {
			start: null,
			end: null
		};
		this.lunch = {
			start: null,
			end: null
		};
		this.dinner = {
			start: null,
			end: null
		};
	}

	static buildFromRaw(rawObject) {
		const item = new Item(rawObject.date);
		item.key = rawObject.key;
		item.date = rawObject.date;
		item.breakfast.start = rawObject.breakfast_start_date;
		item.breakfast.end = rawObject.breakfast_end_date;
		item.lunch.start = rawObject.lunch_start_date;
		item.lunch.end = rawObject.lunch_end_date;
		item.dinner.start = rawObject.dinner_start_date;
		item.dinner.end = rawObject.dinner_end_date;
		item.sleep.start = rawObject.sleep_start_date;
		item.sleep.end = rawObject.sleep_end_date;
		return item;
	}
}
