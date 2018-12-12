import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';

export default class DailyItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		};
	}

	componentDidUpdate() {
		console.log('updating daily item component');
	}

	toggle = () => {
		this.setState(prevState => ({
			isActive: !prevState.isActive
		}));
	};

	render() {
		let view;
		if (!this.state.isActive) {
			view = <Button title="Add Item" onPress={this.toggle} />;
		} else {
			view = (
				<View>
					<Text>ACTIVE</Text>
				</View>
			);
		}
		return <View>{view}</View>;
	}
}
