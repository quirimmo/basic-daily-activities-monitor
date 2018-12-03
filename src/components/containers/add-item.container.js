import { connect } from 'react-redux';
import { AddItemScreen } from '../../screens/add-item.screen';
import { addItem } from '../../actions/items.actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

export const AddItemContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddItemScreen);
