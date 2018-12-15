import React from 'react';
import { Button } from 'react-native-elements';
import { lightBlue } from '../../styles/colors.styles';

export default class SaveItemButton extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Button
				backgroundColor={lightBlue}
				raised
				icon={{ name: 'save' }}
				title="SAVE ITEM"
				onPress={this.props.onSaveItem}
				disabled={this.props.isSaveDisabled()}
			/>
		);
	}
}
