import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { AppLoading, Asset } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import SQLiteProxy from './src/services/sqlite-proxy.service';
import { reducers } from './src/reducers/reducers';
import { mySaga } from './src/sagas/sagas';
import globalStyles from './src/styles/global.styles';
import { AppSwitchNavigator } from './src/navigation/app-switch.navigator';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoadingComplete: false
		};
	}

	async componentDidMount() {
		try {
			const sqliteProxy = SQLiteProxy.getInstance();
			await sqliteProxy.createTables();
		} catch (error) {
			console.error('Error creating the database structure', error);
		}
	}

	render() {
		// if the app is still loading and you don't want to skip the loading screen
		if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
			// show the AppLoading component of Expo
			return (
				<AppLoading
					startAsync={this._loadResourcesAsync}
					onError={this._handleLoadingError}
					onFinish={this._handleFinishLoading}
				/>
			);
		}
		// otherwise display the App
		return (
			<Provider store={store}>
				<View style={globalStyles.mainContainer}>
					{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
					<AppSwitchNavigator />
				</View>
			</Provider>
		);
	}

	_loadResourcesAsync = async () =>
		// load async the images
		Promise.all([
			Asset.loadAsync([
				require('./assets/images/robot-dev.png'),
				require('./assets/images/robot-prod.png')
			])
		]);

	_handleLoadingError = error => {
		console.error('Error loading the application', error);
	};

	_handleFinishLoading = () => {
		this.setState({ isLoadingComplete: true });
	};
}
