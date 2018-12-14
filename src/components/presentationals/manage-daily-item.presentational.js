import React from 'react';
import StartEndTime from './start-end-time.presentational';

export class ManageDailyItem extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	onConfigurationMap = (el, ind) => (
		<StartEndTime
			key={ind}
			title={el}
			startDate={this.props[el].start}
			endDate={this.props[el].end}
			onSetStartTime={this.props.onSetStartTime}
			onSetEndTime={this.props.onSetEndTime}
		/>
	);

	render() {
		return (
			<React.Fragment>
				{this.props.configuration.map(this.onConfigurationMap)}
			</React.Fragment>
		);
	}
}
