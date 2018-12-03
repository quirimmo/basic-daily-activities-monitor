import * as React from 'react';
import PropTypes from 'prop-types';
import { FormLabel, Text, Divider } from 'react-native-elements';
import { View } from 'react-native';
import ItemTime from './item-time.presentational';

export class ItemTimeRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<View
					style={{
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Text h4 style={{ fontSize: 18 }}>
						{this.props.title}
					</Text>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flexDirection: 'row', flex: 0.5 }}>
						<FormLabel>Start:</FormLabel>
						<ItemTime
							date={this.props.startDate}
							onSetTime={this.props.onSetStartDate}
						/>
					</View>
					<View style={{ flexDirection: 'row', flex: 0.5 }}>
						<FormLabel>End:</FormLabel>
						<ItemTime
							date={this.props.endDate}
							onSetTime={this.props.onSetEndDate}
						/>
					</View>
				</View>
				<Divider style={{ marginTop: 15, marginBottom: 5 }} />
			</View>
		);
	}
}

ItemTimeRow.propTypes = {
	title: PropTypes.string.isRequired,
	startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	onSetStartDate: PropTypes.func.isRequired,
	onSetEndDate: PropTypes.func.isRequired
};
