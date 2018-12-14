import moment from 'moment';
import React from 'react';
import { View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import globalStyles from '../styles/global.styles';
import DayDataLoader from '../components/presentationals/day-data-loader.presentational';
import { ManageDailyItem } from '../components/presentationals/manage-daily-item.presentational';

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
		const obj = {};
		if (!item) {
			obj.currentDay = moment();
		}
		CalendarViewScreen.configuration.forEach(el => {
			obj[el] = {};
			obj[el].key = item ? item[el].key : null;
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
			this.props.stopLoading();
		}
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

	render() {
		console.log('Current day:', this.state.currentDay.format('YYYY-MM-DD'));
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
				<View>
					<ManageDailyItem
						configuration={CalendarViewScreen.configuration}
						breakfast={this.state.breakfast}
						lunch={this.state.lunch}
						dinner={this.state.dinner}
						sleep={this.state.sleep}
						onSetStartTime={this.setTime}
						onSetEndTime={this.setTime}
					/>
				</View>
			</View>
		);
	}
}
