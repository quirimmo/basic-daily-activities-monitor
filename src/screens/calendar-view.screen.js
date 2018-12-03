import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { Agenda } from 'react-native-calendars';
import globalStyles from '../styles/global.styles';
import { AddUpdateItem } from '../components/presentationals/add-update-item.presentational';
import { Item } from '../models/item.model';

export class CalendarViewScreen extends React.Component {
	static navigationOptions = {
		title: 'Calendar View'
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={globalStyles.screenContainer}>
				<Text>CALENDAR VIEW PAGE FFS FFS</Text>
				<Agenda
					items={{
						'2018-12-03': [
							{ text: 'item 1 - any js object', test: 'I am a test property' }
						]
					}}
					renderEmptyData={() => {
						const item = new Item();
						return (
							<AddUpdateItem
								item={item}
								onSubmitItem={() => console.log('submitting item')}
							/>
						);
					}}
					renderItem={(item, firstItemInDay) => {
						console.log('item:', item, 'firstItemInDay', firstItemInDay);
						return <View />;
					}}
					renderDay={(day, item) => {
						console.log('day:', day, 'item:', item);
						return <View />;
					}}
					rowHasChanged={(r1, r2) => r1.text !== r2.text}
				/>
			</View>
		);
	}
}

CalendarViewScreen.propTypes = {};
