import { connect } from 'react-redux';
import { AddItemScreen } from '../../screens/add-item.screen';

const mapStateToProps = () => ({});

// const mapDispatchToProps = dispatch => ({});
const mapDispatchToProps = () => ({});

const AddItemContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddItemScreen);

export default AddItemContainer;
