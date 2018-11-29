import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import globalStyles from '../styles/global.styles';
import { AddUpdateItem } from '../components/presentationals/add-update-item.presentational';

export class AddItemScreen extends React.Component {
	static navigationOptions = {
		title: 'Add Item'
	};

	constructor(props) {
		super(props);
		this.onAddItem = this.onAddItem.bind(this);
	}

	render() {
		return (
			<View style={globalStyles.screenContainer}>
				<Button title="ADD ITEM" onPress={this.onAddItem} />
				<AddUpdateItem />
			</View>
		);
	}


	onAddItem() {
		console.log('view. Adding item');
		this.props.addItem({});
	}
}

AddItemScreen.propTypes = {
	addItem: PropTypes.func.isRequired
};
