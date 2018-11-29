import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

export class AddUpdateItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Text>Add Update Item Component</Text>
			</View>
		);
	}
}

AddUpdateItem.propTypes = {};
