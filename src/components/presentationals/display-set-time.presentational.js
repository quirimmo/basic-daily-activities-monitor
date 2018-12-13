import React from 'react';
import { View, Text } from 'react-native';
import TimeSelector from './time-selector.presentational';

export default class DisplaySetTime extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const date = this.props.date ? this.props.date.format('HH:mm') : '-';
		return (
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Text>{date}</Text>
				<TimeSelector date={this.props.date} onSetTime={this.props.onSetTime} />
			</View>
		);
	}
}
