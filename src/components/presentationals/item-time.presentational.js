import * as React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { View, TimePickerAndroid } from 'react-native';
import { Text, Button } from 'react-native-elements';
import ItemTimeStyles from '../../styles/item-time.styles';

class ItemTime extends React.Component {
	constructor(props) {
		super(props);
		this.onSettingTime = this.onSettingTime.bind(this);
	}

	render() {
		return (
			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
				<View>
					<Text style={ItemTimeStyles.currentTimeText}>
						{moment(this.props.date).format('HH:mm')}
					</Text>
				</View>
				<View style={ItemTimeStyles.changeTimeButtonContainer}>
					<Button title="Change" onPress={this.onSettingTime} />
				</View>
			</View>
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
				this.props.onSetTime(hour, minute);
			}
		} catch ({ code, message }) {
			console.error('Cannot open time picker', message);
		}
	}
}

ItemTime.propTypes = {
	date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	onSetTime: PropTypes.func.isRequired
};

export default ItemTime;