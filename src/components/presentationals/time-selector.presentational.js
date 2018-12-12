import * as React from 'react';
import moment from 'moment';
import { TimePickerAndroid, TouchableWithoutFeedback } from 'react-native';

class TimeSelector extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			selectedTime: {
				hour: null,
				minute: null
			}
		};
		this.onSettingTime = this.onSettingTime.bind(this);
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={this.onSettingTime}>
				{this.props.children(this.state.selectedTime)}
			</TouchableWithoutFeedback>
		);
	}

	async onSettingTime() {
		try {
			const { action, hour, minute } = await TimePickerAndroid.open({
				hour: moment(this.props.date).hours(),
				minute: moment(this.props.date).minutes(),
				is24Hour: true
			});
			if (action !== TimePickerAndroid.dismissedAction) {
				this.setState({
					selectedTime: {
						hour,
						minute
					}
				});
			}
		} catch ({ code, message }) {
			console.error('Cannot open time picker', message);
		}
	}
}

export default TimeSelector;
