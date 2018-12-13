import * as React from 'react';
import moment from 'moment';
import { TimePickerAndroid } from 'react-native';
import { Icon } from 'react-native-elements';

class TimeSelector extends React.PureComponent {
	constructor(props) {
		super(props);
		this.onSettingTime = this.onSettingTime.bind(this);
	}

	render() {
		return (
			<Icon
				raised
				name="clock-o"
				color="#2f95dc"
				type="font-awesome"
				onPress={this.onSettingTime}
			/>
		);
	}

	async onSettingTime() {
		const hours = this.props.date
			? moment(this.props.date).hours()
			: moment().hours();
		const minutes = this.props.date
			? moment(this.props.date).minutes()
			: moment().minutes();

		try {
			const { action, hour, minute } = await TimePickerAndroid.open({
				hour: hours,
				minute: minutes,
				is24Hour: true
			});

			if (action !== TimePickerAndroid.dismissedAction) {
				this.props.onSetTime({ hour, minute });
			}
		} catch ({ code, message }) {
			console.error('Cannot open time picker', message);
		}
	}
}

export default TimeSelector;
