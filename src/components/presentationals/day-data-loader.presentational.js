import React from 'react';
import { View, Image } from 'react-native';

export default class DayDataLoader extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: 'white',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Image source={this.props.imgLoader} />
			</View>
		);
	}
}
