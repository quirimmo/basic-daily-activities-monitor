import React from 'react';
import { View } from 'react-native';
import globalStyles from '../styles/global.styles';
import { AddUpdateItem } from '../components/presentationals/add-update-item.presentational';

export class AddItemScreen extends React.Component {
	static navigationOptions = {
		title: 'Add Item'
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={globalStyles.screenContainer}>
				<AddUpdateItem />
			</View>
		);
	}
}

AddItemScreen.propTypes = {};
