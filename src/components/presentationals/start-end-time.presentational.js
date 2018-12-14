import React from 'react';
import { View, Text } from 'react-native';
import DisplaySetTime from './display-set-time.presentational';

const rowCenteredStyle = {
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center'
};
const rowLeftAlignedStyle = {
	flexDirection: 'row',
	justifyContent: 'flex-start',
	alignItems: 'flex-start'
};
const startEndTimeTitleStyle = {
	...rowLeftAlignedStyle,
	flex: 0.3
};
const startEndTimeItemLabelStyle = {
	...rowCenteredStyle,
	flex: 0.35
};

export default class StartEndTime extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	onSetStartTime = time => {
		this.props.onSetStartTime(this.props.title, 'start', time);
	};

	onSetEndTime = time => {
		this.props.onSetEndTime(this.props.title, 'end', time);
	};

	render() {
		return (
			<View style={rowCenteredStyle}>
				<View style={startEndTimeTitleStyle}>
					<Text>{this.props.title.toUpperCase()}</Text>
				</View>
				<View style={startEndTimeItemLabelStyle}>
					<Text>Start:</Text>
					<DisplaySetTime
						date={this.props.startDate}
						onSetTime={this.onSetStartTime}
					/>
				</View>
				<View style={startEndTimeItemLabelStyle}>
					<Text>End:</Text>
					<DisplaySetTime
						date={this.props.endDate}
						onSetTime={this.onSetEndTime}
					/>
				</View>
			</View>
		);
	}
}
