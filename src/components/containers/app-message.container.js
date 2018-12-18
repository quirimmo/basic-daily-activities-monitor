import { connect } from 'react-redux';
import AppMessage from '../presentationals/app-message.presentational';
import { hideMessage } from '../../actions/messages.actions';

const mapStateToProps = state => ({
	message: state.message
});

const mapDispatchToProps = dispatch => ({
	hideMessage: () => dispatch(hideMessage())
});

export const AppMessageContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppMessage);
