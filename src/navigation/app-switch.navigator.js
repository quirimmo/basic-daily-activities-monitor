import { createSwitchNavigator } from 'react-navigation';
import { MainBottomTab } from './main-bottom-tab.navigator';

export const AppSwitchNavigator = createSwitchNavigator({
	Main: MainBottomTab
});
