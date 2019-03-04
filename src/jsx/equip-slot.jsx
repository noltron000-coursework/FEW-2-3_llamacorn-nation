// import react package
import React, { Component } from 'react';

// import components
import Item from '../jsx/item.jsx';

class EquipSlot extends Component {
	render() {
		return (
			<div className='equip-slot'>
				<h3>This is an equip slot. Choose an option:</h3>
				<ul>
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
				</ul>
			</div >
		);
	}
}

export default EquipSlot;
