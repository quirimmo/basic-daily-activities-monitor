import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { Text, Button, Icon } from 'react-native-elements';
import globalStyles from '../../styles/global.styles';

let appMessageWrapper = {
	backgroundColor: '#fff',
	alignSelf: 'center',
	alignItems: 'center',
	justifyContent: 'center',
	minWidth: 200,
	maxWidth: '90%',
	borderWidth: 1,
	paddingTop: 20,
	paddingLeft: 40,
	paddingRight: 40
};

const appMessageTextWrapper = {
	paddingLeft: 15,
	justifyContent: 'center',
	alignItems: 'center'
};

const appMessageButtonWrapper = {
	alignItems: 'center',
	justifyContent: 'flex-end',
	marginTop: 25,
	marginBottom: 15
};

export default class AppMessage extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	closeMessage = () => {
		this.props.hideMessage();
	};

	getColor = type => {
		switch (type) {
			case 'success':
				return 'green';
			case 'error':
				return 'red';
			case 'warning':
				return 'orange';
			default:
				return '';
		}
	};

	render() {
		const color = this.getColor(this.props.message.type);
		appMessageWrapper = {
			...appMessageWrapper,
			borderColor: color
		};
		const buttonStyle = {};
		if (color) {
			buttonStyle.backgroundColor = color;
		}
		return (
			<Modal
				isVisible={this.props.message.isVisible}
				onBackdropPress={this.closeMessage}
			>
				<View style={appMessageWrapper}>
					<View style={globalStyles.rowContainer}>
						<Icon
							name="exclamation-triangle"
							color={color || 'white'}
							type="font-awesome"
							size={64}
						/>
						<View style={appMessageTextWrapper}>
							<Text>{this.props.message.content}</Text>
						</View>
					</View>
					<View style={appMessageButtonWrapper}>
						<Button
							title="CLOSE"
							buttonStyle={buttonStyle}
							onPress={this.closeMessage}
						/>
					</View>
				</View>
			</Modal>
		);
	}
}
