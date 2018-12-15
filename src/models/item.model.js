import moment from 'moment';

export class Item {
	constructor(date) {
		this.key = null;
		this.date = date;
		this.initTimes();
	}

	initTimes(breakfast, lunch, dinner, sleep) {
		this.breakfast = breakfast || { start: null, end: null };
		this.lunch = lunch || { start: null, end: null };
		this.dinner = dinner || { start: null, end: null };
		this.sleep = sleep || { start: null, end: null };
	}

	static buildFromRaw(rawObject) {
		const item = new Item(rawObject.date);
		item.key = rawObject.key;
		item.date = rawObject.date;
		item.breakfast.start = moment(+rawObject.breakfast_start_date);
		item.breakfast.end = moment(+rawObject.breakfast_end_date);
		item.lunch.start = moment(+rawObject.lunch_start_date);
		item.lunch.end = moment(+rawObject.lunch_end_date);
		item.dinner.start = moment(+rawObject.dinner_start_date);
		item.dinner.end = moment(+rawObject.dinner_end_date);
		item.sleep.start = moment(+rawObject.sleep_start_date);
		item.sleep.end = moment(+rawObject.sleep_end_date);
		return item;
	}
}
