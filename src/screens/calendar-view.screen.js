import moment from 'moment';
import React from 'react';
import { View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import PropTypes from 'prop-types';
import globalStyles from '../styles/global.styles';
import { AddUpdateItem } from '../components/presentationals/add-update-item.presentational';
import { Item } from '../models/item.model';

export class CalendarViewScreen extends React.Component {
	static navigationOptions = {
		title: 'Calendar View'
	};

	defaultItem = Item.getTestItem();

	agendaItems;

	constructor(props) {
		super(props);
		this.state = {
			item: new Item(moment())
		};
	}

	updateItem = item => {
		console.log('updating item:', item);
	};

	addItem = () => {
		this.props.addItem(this.state.item);
	};

	getAgendaItems = () => {
		this.agendaItems = this.props.items.reduce((acc, val) => {
			acc[val.date] = val;
			return acc;
		}, {});
	};

	componentDidMount() {
		this.props.fetchItems();
	}

	render() {
		return (
			<View style={globalStyles.screenContainer}>
				<Agenda
					items={this.agendaItems}
					onDayPress={day => {
						this.setState({ item: new Item(day.timestamp) });
					}}
					renderEmptyData={() => (
						<AddUpdateItem
							item={this.state.item}
							onSubmitItem={item => this.addItem(item)}
						/>
					)}
					renderDay={() => null}
					renderItem={item => (
						<AddUpdateItem
							item={item}
							onSubmitItem={currItem => this.updateItem(currItem)}
						/>
					)}
					rowHasChanged={(r1, r2) => r1.key !== r2.key}
				/>
			</View>
		);
	}
}

CalendarViewScreen.propTypes = {
	items: PropTypes.arrayOf(PropTypes.instanceOf(Item)),
	addItem: PropTypes.func
};
