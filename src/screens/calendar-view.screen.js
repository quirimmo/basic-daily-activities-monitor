import moment from 'moment';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import CalendarPicker from 'react-native-calendar-picker';
import globalStyles from '../styles/global.styles';
import StartEndTime from '../components/presentationals/start-end-time.presentational';
import DayDataLoader from '../components/presentationals/day-data-loader.presentational';

const imgLoader = require('../../assets/images/animated-loading.gif');

export class CalendarViewScreen extends React.Component {
	static navigationOptions = {
		title: 'Calendar View'
	};

	constructor(props) {
		super(props);
		this.state = {
			currentDay: moment(),
			breakfast: {
				start: null,
				end: null
			}
		};
	}

	async componentDidMount() {
		this.props.startLoading();
		const item = await this.props.getItem();
		if (item) {
			this.setState({
				breakfast: {
					start: item.breakfast.start,
					end: item.breakfast.end
				}
			});
			this.props.stopLoading();
		}
	}

	onDateChange = date => {
		this.setState({
			currentDay: moment(date),
			breakfast: { start: null, end: null }
		});
	};

	onSetBreakfastStartTime = ({ hour, minute }) => {
		this.setStartTime('breakfast', hour, minute);
	};

	onSetBreakfastEndTime = ({ hour, minute }) => {
		this.setEndTime('breakfast', hour, minute);
	};

	setStartTime = (property, hour, minute) => {
		if (hour && minute) {
			this.setState(prevState => ({
				[property]: {
					start: moment()
						.hours(hour)
						.minutes(minute),
					end: prevState[property].end
				}
			}));
		}
	};

	setEndTime = (property, hour, minute) => {
		if (hour && minute) {
			this.setState(prevState => ({
				[property]: {
					end: moment()
						.hours(hour)
						.minutes(minute),
					start: prevState[property].start
				}
			}));
		}
	};

	render() {
		let content;
		if (this.props.isLoading) {
			content = <DayDataLoader imgLoader={imgLoader} />;
		} else {
			content = (
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
						<Text>
							Current day: {this.state.currentDay.format('YYYY-MM-DD')}
						</Text>
						<StartEndTime
							title="breakfast"
							startDate={this.state.breakfast.start}
							endDate={this.state.breakfast.end}
							onSetStartTime={this.onSetBreakfastStartTime}
							onSetEndTime={this.onSetBreakfastEndTime}
						/>
					</View>
				</View>
			);
		}
		return <React.Fragment>{content}</React.Fragment>;
	}
}
