import React from 'react';
import moment from 'moment';
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
			selectedDay: null
		};
	}

	updateItem = item => {
		console.log('updating item:', item);
	};

	addItem = item => {
		console.log('adding item:', item);
		this.props.addItem(item);
		setTimeout(() => console.log('state:', this.props.items), 2000);
	};

	render() {
		return (
			<View style={globalStyles.screenContainer}>
				<Agenda
					items={{
						'2018-12-03': [this.defaultItem]
					}}
					onDayPress={day => {
						this.setState({ selectedDay: moment(day.timestamp) });
					}}
					renderEmptyData={() => (
						<AddUpdateItem
							item={new Item(this.state.selectedDay)}
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
