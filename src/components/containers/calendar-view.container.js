import { connect } from 'react-redux';
import { CalendarViewScreen } from '../../screens/calendar-view.screen';
import { addItem, updateItem } from '../../actions/items.actions';

const mapStateToProps = state => ({
	items: state.items
});

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item)),
	updateItem: item => dispatch(updateItem(item))
});

export const CalendarViewContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CalendarViewScreen);
