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
		this.state = {
			key: null,
			currentDay: moment().format('YYYY-MM-DD'),
			breakfast: { start: null, end: null },
			lunch: { start: null, end: null },
			dinner: { start: null, end: null },
			sleep: { start: null, end: null }
		};
	}

	componentDidMount() {
		this.props.fetchItemByDate(this.state.currentDay);
	}

	componentDidUpdate() {
		if (this.props.items.length && !this.state.key) {
			const item = this.props.items.find(
				el => el.date === this.state.currentDay
			);
			if (item) {
				this.setState({
					key: item.key,
					currentDay: item.date,
					breakfast: { start: item.breakfast.start, end: item.breakfast.end },
					lunch: { start: item.lunch.start, end: item.lunch.end },
					dinner: { start: item.dinner.start, end: item.dinner.end },
					sleep: { start: item.sleep.start, end: item.sleep.end }
				});
			}
		}
	}

	onDateChange = date => {
		this.setState(
			{
				key: null,
				currentDay: moment(date).format('YYYY-MM-DD'),
				breakfast: { start: null, end: null },
				lunch: { start: null, end: null },
				dinner: { start: null, end: null },
				sleep: { start: null, end: null }
			},
			() => this.props.fetchItemByDate(moment(date).format('YYYY-MM-DD'))
		);
	};

	setTime = (property, period, { hour, minute }) => {
		if (typeof hour !== 'undefined' && typeof minute !== 'undefined') {
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
