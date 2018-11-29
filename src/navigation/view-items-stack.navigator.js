import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { TabBarIcon } from '../components/presentationals/tab-bar-icon.presentational';
import { ViewItemsContainer } from '../components/containers/view-items.container';

export const ViewItemsStack = createStackNavigator({
	ViewItems: ViewItemsContainer
});

ViewItemsStack.navigationOptions = {
	tabBarLabel: 'View Items',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios'
					? `ios-link${focused ? '' : '-outline'}`
					: 'md-link'
			}
		/>
	)
};
