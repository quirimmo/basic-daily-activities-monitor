import moment from 'moment';
import React from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import { lightBlue } from '../../styles/colors.styles';

export default class CustomCalendarPicker extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<CalendarPicker
				selectedDayColor={lightBlue}
				selectedDayTextColor="#fff"
				selectedStartDate={this.props.currentDay}
				startFromMonday={true}
				onDateChange={this.props.onDateChange}
				maxDate={moment()}
			/>
		);
	}
}
