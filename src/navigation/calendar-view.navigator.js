import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { TabBarIcon } from '../components/presentationals/tab-bar-icon.presentational';
import { CalendarViewContainer } from '../components/containers/calendar-view.container';

export const CalendarViewStack = createStackNavigator({
	CalendarView: CalendarViewContainer
});


CalendarViewStack.navigationOptions = {
	tabBarLabel: 'Calendar View',
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
