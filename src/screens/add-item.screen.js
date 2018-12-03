import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
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

	render() {
		return (
			<View style={globalStyles.screenContainer}>
				<AddUpdateItem item={this.item} onSubmitItem={this.props.addItem} />
			</View>
		);
	}
}

AddItemScreen.propTypes = {
	addItem: PropTypes.func.isRequired
};
