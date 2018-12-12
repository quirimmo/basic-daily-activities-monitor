import moment from 'moment';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import CalendarPicker from 'react-native-calendar-picker';
import globalStyles from '../styles/global.styles';
import ItemTime from '../components/presentationals/item-time.presentational';
import TimeSelector from '../components/presentationals/time-selector.presentational';

export class CalendarViewScreen extends React.Component {
	static navigationOptions = {
		title: 'Calendar View'
	};

	constructor(props) {
		super(props);
		this.state = {
			currentDay: moment()
		};
	}

	onDateChange = date => {
		this.setState({ currentDay: moment(date) });
	};

	render() {
		console.log('rendering');
		return (
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
					<Text>Current day: {this.state.currentDay.format('YYYY-MM-DD')}</Text>
					<ItemTime onSetTime={() => console.log('setting time')} />
					<TimeSelector date={moment()}>
						{({ hour, minute }) => (
							<Text>
								HOURS: {hour} - MINUTES: {minute}
							</Text>
						)}
					</TimeSelector>
				</View>
			</View>
		);
	}
}
