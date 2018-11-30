import { createBottomTabNavigator } from 'react-navigation';
import { AddItemStack } from './add-item-stack.navigator.jsx';
import { ViewItemsStack } from './view-items-stack.navigator.jsx';

export const MainBottomTab = createBottomTabNavigator({
	AddItemStack,
	ViewItemsStack
});
