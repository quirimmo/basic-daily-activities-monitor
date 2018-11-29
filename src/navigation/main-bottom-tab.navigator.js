import { createBottomTabNavigator } from 'react-navigation';
import { AddItemStack } from './add-item-stack.navigator';
import { ViewItemsStack } from './view-items-stack.navigator';

export const MainBottomTab = createBottomTabNavigator({
	AddItemStack,
	ViewItemsStack
});
