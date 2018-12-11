import moment from 'moment';

export class Item {
	constructor(date) {
		this.key = undefined;
		this.date = date;
		this.sleep = {
			start: moment(),
			end: moment()
		};
		this.breakfast = {
			start: moment(),
			end: moment()
		};
		this.lunch = {
			start: moment(),
			end: moment()
		};
		this.dinner = {
			start: moment(),
			end: moment()
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

	static getTestItem() {
		const item = new Item('2018-12-03');
		item.breakfast = {
			start: moment(item.date)
				.hours(8)
				.minutes(8),
			end: moment(item.date)
				.hours(8)
				.minutes(28)
		};
		item.lunch = {
			start: moment(item.date)
				.hours(13)
				.minutes(13),
			end: moment(item.date)
				.hours(13)
				.minutes(33)
		};
		item.dinner = {
			start: moment(item.date)
				.hours(20)
				.minutes(20),
			end: moment(item.date)
				.hours(20)
				.minutes(40)
		};
		item.sleep = {
			start: moment(item.date)
				.hours(23)
				.minutes(23),
			end: moment(item.date)
				.hours(7)
				.minutes(7)
		};
		return item;
	}
}
