import moment from 'moment';

export class Item {
	constructor(date) {
		this.key = undefined;
		this.date = date;
		this.sleep = {
			start: undefined,
			end: undefined
		};
		this.breakfast = {
			start: undefined,
			end: undefined
		};
		this.lunch = {
			start: undefined,
			end: undefined
		};
		this.dinner = {
			start: undefined,
			end: undefined
		};
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
