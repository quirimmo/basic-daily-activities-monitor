import * as React from 'react';
import { Icon } from 'react-native-elements';
import TimeSelector from './time-selector.presentational';

class DefaultTimeSelector extends React.PureComponent {
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

	onSettingTime(hour, minute) {
		this.props.onSetTime(hour, minute);
		return <Icon raised name="clock-o" color="#2f95dc" type="font-awesome" />;
	}

	render() {
		return (
			<TimeSelector date={this.props.date}>{this.onSettingTime}</TimeSelector>
		);
	}
}

export default DefaultTimeSelector;
