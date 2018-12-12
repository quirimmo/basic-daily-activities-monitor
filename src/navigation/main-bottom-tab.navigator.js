import { createBottomTabNavigator } from 'react-navigation';
import { CalendarViewStack } from './calendar-view.navigator';

export const MainBottomTab = createBottomTabNavigator({
	CalendarViewStack
});
