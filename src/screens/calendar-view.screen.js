import moment from 'moment';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { Agenda } from 'react-native-calendars';
import globalStyles from '../styles/global.styles';

const items = {
	// '2018-12-10': [{ test: 'I am the first test' }],
	// '2018-12-11': [{ test: 'I am the second test' }],
	// '2018-12-13': [{ test: 'I am the third test' }],
	// '2018-12-15': [{ test: 'I am the last test' }]
};

export class CalendarViewScreen extends React.Component {
	static navigationOptions = {
		title: 'Calendar View'
	};

	constructor(props) {
		super(props);
		this.state = {
			currentDay: moment()
		};
	}

	onDayPress = day => {
		this.setState({ currentDay: moment(day.timestamp) });
	};

	onRenderItem = item => {
		console.log('current item:', item);
		return <Text>Current Item: {JSON.stringify(item)}</Text>;
	};

	onRenderEmptyData = () => {
		console.log('empty data:');
		return (
			<Text>Current Day: {this.state.currentDay.format('YYYY-MM-DD')}</Text>
		);
	};

	render() {
		return (
			<View style={globalStyles.screenContainer}>
				<Agenda
					items={items}
					onDayPress={this.onDayPress}
					renderEmptyData={this.onRenderEmptyData}
					renderItem={this.onRenderItem}
				/>
			</View>
		);
	}
}

// import moment from 'moment';
// import React from 'react';
// import { View } from 'react-native';
// import { Agenda } from 'react-native-calendars';
// import PropTypes from 'prop-types';
// import globalStyles from '../styles/global.styles';
// import { AddUpdateItem } from '../components/presentationals/add-update-item.presentational';
// import { Item } from '../models/item.model';

// export class CalendarViewScreen extends React.Component {
// 	static navigationOptions = {
// 		title: 'Calendar View'
// 	};

// 	agendaItems;

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			item: new Item(moment())
// 		};
// 	}

// 	updateItem = item => {
// 		console.log('updating item:', item);
// 	};

// 	addItem = () => {
// 		this.props.addItem(this.state.item);
// 	};

// 	getAgendaItems = () => {
// 		this.agendaItems = this.props.items.reduce((acc, val) => {
// 			acc[val.date] = val;
// 			return acc;
// 		}, {});
// 	};

// 	componentDidMount() {
// 		this.props.fetchItems();
// 	}

// 	render() {
// 		console.log('calendar view screen rendering');
// 		return (
// 			<View style={globalStyles.screenContainer}>
// 				<Agenda
// 					items={{}}
// 					onDayPress={day => {
// 						this.setState({ item: new Item(day.timestamp) });
// 					}}
// 					renderEmptyData={() => (
// 						<AddUpdateItem
// 							item={this.state.item}
// 							onSubmitItem={item => this.addItem(item)}
// 						/>
// 					)}
// 					renderItem={item => (
// 						<AddUpdateItem
// 							item={item}
// 							onSubmitItem={currItem => this.updateItem(currItem)}
// 						/>
// 					)}
// 					rowHasChanged={(r1, r2) => r1.key !== r2.key}
// 					renderDay={() => null}
// 				/>
// 			</View>
// 		);
// 	}
// }

// CalendarViewScreen.propTypes = {
// 	items: PropTypes.arrayOf(PropTypes.instanceOf(Item)),
// 	addItem: PropTypes.func
// };
