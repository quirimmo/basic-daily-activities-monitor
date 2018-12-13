import moment from 'moment';
import { connect } from 'react-redux';
import { CalendarViewScreen } from '../../screens/calendar-view.screen';
import { addItem, updateItem, fetchItems } from '../../actions/items.actions';
import { Item } from '../../models/item.model';
import { startLoading, stopLoading } from '../../actions/loading.actions';

const mockedItem = new Item(moment());
mockedItem.breakfast.start = moment()
	.hours(8)
	.minutes(8);
mockedItem.breakfast.end = moment()
	.hours(8)
	.minutes(28);

const mapStateToProps = state => ({
	items: state.items,
	isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
	getItem: () =>
		new Promise(resolve => {
			setTimeout(() => {
				resolve(mockedItem);
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
