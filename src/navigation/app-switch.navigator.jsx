import { createSwitchNavigator } from 'react-navigation';
import { MainBottomTab } from './main-bottom-tab.navigator.jsx';

export const AppSwitchNavigator = createSwitchNavigator({
	Main: MainBottomTab
});
