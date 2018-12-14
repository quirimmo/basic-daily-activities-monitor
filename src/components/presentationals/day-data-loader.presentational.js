import React from 'react';
import { View, Image } from 'react-native';

const imgLoader = require('../../../assets/images/animated-loading.gif');

const dayDataLoaderContainerStyle = {
	flex: 1,
	backgroundColor: 'white',
	justifyContent: 'center',
	alignItems: 'center'
};

export default class DayDataLoader extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={dayDataLoaderContainerStyle}>
				<Image source={imgLoader} />
			</View>
		);
	}
}
