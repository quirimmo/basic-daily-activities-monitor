import React from 'react';
import moment from 'moment';
import { View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import globalStyles from '../styles/global.styles';
import { AddUpdateItem } from '../components/presentationals/add-update-item.presentational';
import { Item } from '../models/item.model';

export class CalendarViewScreen extends React.Component {
	static navigationOptions = {
		title: 'Calendar View'
	};

	defaultItem = new Item('2018-12-03');

	constructor(props) {
		super(props);
		this.state = {
			selectedDay: null
		};

		this.defaultItem.breakfast = {
			start: moment(this.defaultItem.date)
				.hours(8)
				.minutes(8),
			end: moment(this.defaultItem.date)
				.hours(8)
				.minutes(28)
		};
		this.defaultItem.lunch = {
			start: moment(this.defaultItem.date)
				.hours(13)
				.minutes(13),
			end: moment(this.defaultItem.date)
				.hours(13)
				.minutes(33)
		};
		this.defaultItem.dinner = {
			start: moment(this.defaultItem.date)
				.hours(20)
				.minutes(20),
			end: moment(this.defaultItem.date)
				.hours(20)
				.minutes(40)
		};
		this.defaultItem.sleep = {
			start: moment(this.defaultItem.date)
				.hours(23)
				.minutes(23),
			end: moment(this.defaultItem.date)
				.hours(7)
				.minutes(7)
		};
	}

	updateItem = item => {
		console.log('updating item:', item);
	};

	addItem = item => {
		console.log('adding item:', item);
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
							onSubmitItem={() => this.addItem(this.state.selectedDay)}
						/>
					)}
					renderDay={() => null}
					renderItem={item => (
						<AddUpdateItem
							item={item}
							onSubmitItem={() => this.updateItem(item)}
						/>
					)}
					rowHasChanged={(r1, r2) => r1.key !== r2.key}
				/>
			</View>
		);
	}
}

CalendarViewScreen.propTypes = {};
