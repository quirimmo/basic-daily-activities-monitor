import * as React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import { Item } from '../../models/item.model';
import { ItemTimeRow } from './item-time-row.presentational';
import { PrimaryButton } from './primary-button.presentational';

export class AddUpdateItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: this.props.item
		};
	}

	getMomentTime = (hours, minutes) =>
		moment()
			.hours(hours)
			.minutes(minutes);

	onSetDateTime = (hours, minutes, property, field) => {
		this.setState(prevState => ({
			item: {
				...prevState.item,
				[property]: {
					...prevState.item[property],
					[field]: this.getMomentTime(hours, minutes)
				}
			}
		}));
	};

	render() {
		return (
			<ScrollView style={{ backgroundColor: 'white' }}>
				<ItemTimeRow
					title="Breakfast"
					startDate={this.state.item.breakfast.start}
					endDate={this.state.item.breakfast.end}
					onSetStartDate={(hours, minutes) =>
						this.onSetDateTime(hours, minutes, 'breakfast', 'start')
					}
					onSetEndDate={(hours, minutes) =>
						this.onSetDateTime(hours, minutes, 'breakfast', 'end')
					}
				/>
				<ItemTimeRow
					title="Lunch"
					startDate={this.state.item.lunch.start}
					endDate={this.state.item.lunch.end}
					onSetStartDate={(hours, minutes) =>
						this.onSetDateTime(hours, minutes, 'lunch', 'start')
					}
					onSetEndDate={(hours, minutes) =>
						this.onSetDateTime(hours, minutes, 'lunch', 'end')
					}
				/>
				<ItemTimeRow
					title="Dinner"
					startDate={this.state.item.dinner.start}
					endDate={this.state.item.dinner.end}
					onSetStartDate={(hours, minutes) =>
						this.onSetDateTime(hours, minutes, 'dinner', 'start')
					}
					onSetEndDate={(hours, minutes) =>
						this.onSetDateTime(hours, minutes, 'dinner', 'end')
					}
				/>
				<ItemTimeRow
					title="Sleep"
					startDate={this.state.item.sleep.start}
					endDate={this.state.item.sleep.end}
					onSetStartDate={(hours, minutes) =>
						this.onSetDateTime(hours, minutes, 'sleep', 'start')
					}
					onSetEndDate={(hours, minutes) =>
						this.onSetDateTime(hours, minutes, 'sleep', 'end')
					}
				/>
				<View style={{ marginTop: 10, marginBottom: 15 }}>
					<PrimaryButton
						title="SAVE ITEM"
						onPress={() => this.props.onSubmitItem(this.state.item)}
					/>
				</View>
			</ScrollView>
		);
	}
}

AddUpdateItem.propTypes = {
	item: PropTypes.instanceOf(Item).isRequired,
	onSubmitItem: PropTypes.func.isRequired
};
