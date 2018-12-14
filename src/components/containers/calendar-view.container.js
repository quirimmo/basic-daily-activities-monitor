import moment from 'moment';
import { connect } from 'react-redux';
import { CalendarViewScreen } from '../../screens/calendar-view.screen';
import { addItem, updateItem, fetchItems } from '../../actions/items.actions';
import { Item } from '../../models/item.model';
import { startLoading, stopLoading } from '../../actions/loading.actions';

const mockedItem = new Item(moment().format('YYYY-MM-DD'));
mockedItem.key = 'i am a key';
mockedItem.breakfast.start = moment()
	.hours(8)
	.minutes(8);
mockedItem.breakfast.end = moment()
	.hours(8)
	.minutes(28);
mockedItem.lunch.start = moment()
	.hours(13)
	.minutes(13);
mockedItem.lunch.end = moment()
	.hours(13)
	.minutes(33);
mockedItem.dinner.start = moment()
	.hours(20)
	.minutes(20);
mockedItem.dinner.end = moment()
	.hours(20)
	.minutes(40);
mockedItem.sleep.start = moment()
	.hours(1)
	.minutes(0);
mockedItem.sleep.end = moment()
	.hours(8)
	.minutes(0);

const mapStateToProps = state => ({
	items: state.items,
	isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
	getItem: () =>
		new Promise(resolve => {
			setTimeout(() => {
				resolve(undefined);
				// resolve(mockedItem);
			}, 2000);
		}),
	addItem: item => dispatch(addItem(item)),
	updateItem: item => dispatch(updateItem(item)),
	fetchItems: () => dispatch(fetchItems()),
	startLoading: () => dispatch(startLoading()),
	stopLoading: () => dispatch(stopLoading())
});

export const CalendarViewContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CalendarViewScreen);
