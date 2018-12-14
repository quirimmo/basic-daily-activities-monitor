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

	buildState = item => {
		const obj = {
			key: item ? item.key : null
		};
		if (!item) {
			obj.currentDay = moment();
		}
		CalendarViewScreen.configuration.forEach(el => {
			obj[el] = {};
			obj[el].start = item ? item[el].start : null;
			obj[el].end = item ? item[el].end : null;
		});
		return obj;
	};

	retrieveItem = async () => {
		this.props.startLoading();
		const item = await this.props.getItem();
		if (item) {
			this.setState(this.buildState(item));
		}
		this.props.stopLoading();
	};

	onDateChange = date => {
		this.retrieveItem();
		this.setState({
			currentDay: moment(date)
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
		if (this.state.key) {
			item.key = this.state.key;
			console.log('updating item', item);
		} else {
			console.log('adding item:', item);
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
