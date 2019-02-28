import React, { Component } from 'react';
import Accessory from '../jsx/accessory.jsx';
import '../css/placeholder.css';

class ChoiceWidget extends Component {
	render() {
		return (
			<div>
				{/* this will be a selection of accessories for this equip slot */}
				<h3>Here's a selection of options:</h3>
				<ul>
					<Accessory />
					<Accessory />
					<Accessory />
				</ul>
			</div>
		);
	}
}

export default ChoiceWidget;
