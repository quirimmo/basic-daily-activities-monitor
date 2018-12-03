import * as React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';

export class PrimaryButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Button
				buttonStyle={{
					backgroundColor: '#2089dc'
				}}
				title={this.props.title}
				onPress={this.props.onPress}
			/>
		);
	}
}

PrimaryButton.propTypes = {
	title: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired
};
