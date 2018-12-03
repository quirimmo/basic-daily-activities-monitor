import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { ItemsDAO } from '../models/items.dao';
import globalStyles from '../styles/global.styles';
import { AddUpdateItem } from '../components/presentationals/add-update-item.presentational';
import { Item } from '../models/item.model';

export class AddItemScreen extends React.Component {
	static navigationOptions = {
		title: 'Add Item'
	};

	item;

	constructor(props) {
		super(props);
		this.item = new Item();
	}

	testAddItem = () => {
		console.log('testing add of item');
		const item = Item.getTestItem();
		ItemsDAO.addItem(item).then(
			resp => console.log('resp from add item:', resp),
			err => console.error('err from add item', err)
		);
	};

	render() {
		return (
			<View style={globalStyles.screenContainer}>
				<Button title="Test Add Item Button" onPress={() => this.testAddItem()} />
				<AddUpdateItem item={this.item} onSubmitItem={this.props.addItem} />
			</View>
		);
	}
}

AddItemScreen.propTypes = {
	addItem: PropTypes.func.isRequired
};
