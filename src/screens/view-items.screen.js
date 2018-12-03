import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import globalStyles from '../styles/global.styles';

export class ViewItemsScreen extends React.Component {
	static navigationOptions = {
		title: 'View Items'
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={globalStyles.mainContainer}>
				<Text>View Items Screen</Text>
			</View>
		);
	}
}

ViewItemsScreen.propTypes = {};
