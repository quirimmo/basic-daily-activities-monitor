import { connect } from 'react-redux';
import { ViewItemsScreen } from '../../screens/view-items.screen.jsx';

const mapStateToProps = (state, ownProps) => {
	console.log('state:', state, 'props:', ownProps);
	return {};
};

const mapDispatchToProps = dispatch => {
	console.log('dispatch:', dispatch);
	return {};
};

export const ViewItemsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ViewItemsScreen);
