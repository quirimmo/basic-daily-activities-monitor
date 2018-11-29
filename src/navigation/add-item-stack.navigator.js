import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import AddItemContainer from '../components/containers/add-item.container';
import { TabBarIcon } from '../components/presentationals/tab-bar-icon.presentational';

export const AddItemStack = createStackNavigator({
	AddItem: AddItemContainer
});

AddItemStack.navigationOptions = {
	tabBarLabel: 'Add Item',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios'
					? `ios-information-circle${focused ? '' : '-outline'}`
					: 'md-information-circle'
			}
		/>
	)
};
