import React from 'react';
import { View, Text } from 'react-native';
import DisplaySetTime from './display-set-time.presentational';

export default class StartEndTime extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'flex-start',
						alignItems: 'flex-start',
						flex: 0.3
					}}
				>
					<Text>{this.props.title.toUpperCase()}</Text>
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						flex: 0.35
					}}
				>
					<Text>Start:</Text>
					<DisplaySetTime
						date={this.props.startDate}
						onSetTime={this.props.onSetStartTime}
					/>
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						flex: 0.35
					}}
				>
					<Text>End:</Text>
					<DisplaySetTime
						date={this.props.endDate}
						onSetTime={this.props.onSetEndTime}
					/>
				</View>
			</View>
		);
	}
}
