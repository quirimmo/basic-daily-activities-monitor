import { connect } from 'react-redux';
import { CalendarViewScreen } from '../../screens/calendar-view.screen';
import {
	addItem,
	updateItem,
	fetchItemByDate
} from '../../actions/items.actions';
import { showMessage } from '../../actions/messages.actions';

const mapStateToProps = state => ({
	items: state.items,
	isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item)),
	updateItem: item => dispatch(updateItem(item)),
	fetchItemByDate: itemDate => dispatch(fetchItemByDate(itemDate)),
	showMessage: (content, type) => dispatch(showMessage(content, type))
});

export const CalendarViewContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CalendarViewScreen);
