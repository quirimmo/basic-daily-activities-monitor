import moment from 'moment';
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import CalendarPicker from 'react-native-calendar-picker';
import globalStyles from '../styles/global.styles';
import DayDataLoader from '../components/presentationals/day-data-loader.presentational';
import { ManageDailyItem } from '../components/presentationals/manage-daily-item.presentational';
import { Item } from '../models/item.model';

export class CalendarViewScreen extends React.Component {
	static navigationOptions = { title: 'Calendar View' };

	static configuration = ['breakfast', 'lunch', 'dinner', 'sleep'];

	constructor(props) {
		super(props);
		this.state = this.buildState();
	}

	componentDidMount() {
		this.retrieveItem();
	}

	componentDidUpdate() {
		if (this.props.items.length) {
			console.log('fetched items:', this.props.items);
			const item = this.props.items.find(
				el => el.date === moment().format('YYYY-MM-DD')
			);
			if (item) {
				console.log('fetched item:', item);
				// this.setState(this.buildState(item));
			}
		}
	}

	buildState = item => {
		const obj = {
			key: item ? item.key : null
		};
		if (!item) {
			obj.currentDay = moment().format('YYYY-MM-DD');
		}
		CalendarViewScreen.configuration.forEach(el => {
			obj[el] = {};
			obj[el].start = item ? moment(item[el].start) : null;
			obj[el].end = item ? moment(item[el].end) : null;
		});
		return obj;
	};

	retrieveItem = async () => {
		this.props.startLoading();
		await this.props.fetchItemByDate(moment().format('YYYY-MM-DD'));
		// console.log('fetching item with date:', moment().format('YYYY-MM-DD'));
		// const item = await this.props.fetchItemByDate(
		// 	moment().format('YYYY-MM-DD')
		// );
		// console.log('fetched item:', item);
		// if (item) {
		// 	this.setState(this.buildState(item));
		// }
		this.props.stopLoading();
	};

	onDateChange = date => {
		this.retrieveItem();
		this.setState({
			currentDay: moment(date).format('YYYY-MM-DD')
		});
	};

	setTime = (property, period, { hour, minute }) => {
		if (hour && minute) {
			this.setState(prevState => ({
				[property]: {
					...prevState[property],
					[period]: moment()
						.hours(hour)
						.minutes(minute)
				}
			}));
		}
	};

	onSaveItem = () => {
		const item = new Item(this.state.currentDay);
		item.initTimes(
			this.state.breakfast,
			this.state.lunch,
			this.state.dinner,
			this.state.sleep
		);
		try {
			if (this.state.key) {
				item.key = this.state.key;
				this.props.updateItem(item);
			} else {
				this.props.addItem(item);
			}
			console.log('Item saved correctly');
		} catch (error) {
			console.error('Error saving the item:', item, 'Error:', error);
		}
	};

	isSaveDisabled = () => {
		if (this.state.key) {
			return false;
		}
		return !CalendarViewScreen.configuration.every(
			el => this.state[el].start && this.state[el].end
		);
	};

	render() {
		return this.props.isLoading ? (
			<DayDataLoader />
		) : (
			<View style={globalStyles.screenContainer}>
				<CalendarPicker
					selectedDayColor="#2f95dc"
					selectedDayTextColor="#fff"
					selectedStartDate={this.state.currentDay}
					startFromMonday={true}
					onDateChange={this.onDateChange}
					maxDate={moment()}
				/>
				<ManageDailyItem
					configuration={CalendarViewScreen.configuration}
					breakfast={this.state.breakfast}
					lunch={this.state.lunch}
					dinner={this.state.dinner}
					sleep={this.state.sleep}
					onSetStartTime={this.setTime}
					onSetEndTime={this.setTime}
				/>
				<View
					style={{
						flex: 1,
						justifyContent: 'flex-end'
					}}
				>
					<Button
						backgroundColor="#2f95dc"
						raised
						icon={{ name: 'save' }}
						title="SAVE ITEM"
						onPress={this.onSaveItem}
						disabled={this.isSaveDisabled()}
					/>
				</View>
			</View>
		);
	}
}
