// import react package
import React, { Component } from 'react';

// import components
import Item from '../jsx/item.jsx';

class EquipSlot extends Component {

	renderItemOption() {
		let itemList = this.props.ItemData[this.props.slot]

		console.log(itemList)

		return (
			<div>
				{itemList.map((item) => <Item key={item} item={item} slot={this.props.slot} ItemData={this.props.ItemData} />)}
			</div>
		);
	}

	render() {
		return (
			<div className='equip-slot'>
				<h3>{this.props.slot}:</h3>
				<fieldset>
					{this.renderItemOption()}
				</fieldset>
			</div >
		);
	}
}

export default EquipSlot;
