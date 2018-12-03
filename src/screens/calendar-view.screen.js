import React from 'react';
// import moment from 'moment';
import { View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import PropTypes from 'prop-types';
import globalStyles from '../styles/global.styles';
import { AddUpdateItem } from '../components/presentationals/add-update-item.presentational';
import { Item } from '../models/item.model';

export class CalendarViewScreen extends React.Component {
	static navigationOptions = {
		title: 'Calendar View'
	};

	defaultItem = Item.getTestItem();

	constructor(props) {
		super(props);
		this.state = {
			item: null
		};
	}

	updateItem = item => {
		console.log('updating item:', item);
	};

	addItem = currItem => {
		const onSetState = () => this.props.addItem(this.state.item);

		this.setState(
			{
				item: Item.buildFromRaw(currItem)
			},
			onSetState
		);
	};

	render() {
		return (
			<View style={globalStyles.screenContainer}>
				<Agenda
					items={{
						'2018-12-03': [this.defaultItem]
					}}
					onDayPress={day => {
						this.setState({ item: new Item(day.timestamp) });
					}}
					renderEmptyData={() => (
						<AddUpdateItem
							item={this.state.item}
							onSubmitItem={item => this.addItem(item)}
						/>
					)}
					renderDay={() => null}
					renderItem={item => (
						<AddUpdateItem
							item={item}
							onSubmitItem={currItem => this.updateItem(currItem)}
						/>
					)}
					rowHasChanged={(r1, r2) => r1.key !== r2.key}
				/>
			</View>
		);
	}
}

CalendarViewScreen.propTypes = {
	items: PropTypes.arrayOf(PropTypes.instanceOf(Item)),
	addItem: PropTypes.func
};
