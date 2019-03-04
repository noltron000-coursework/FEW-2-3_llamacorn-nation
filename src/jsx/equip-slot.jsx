// import react package
import React, { Component } from 'react';
import { setItem } from '../actions/';

// import components
import Item from '../jsx/item.jsx';
import { connect } from 'react-redux';

class EquipSlot extends Component {
	constructor(props) {
		super(props);
		this.state = {
			choice: ''
		}
	}

	callSlot(item) {
		this.setState({ choice: item })
		console.log('Slot:' + this.props.slot)
		console.log('item: ' + item)
		this.props.setItem(this.props.slot, item)
	}

	renderItemOption() {
		let itemList = this.props.ItemData[this.props.slot]

		return (
			<div>
				{itemList.map((item) => {
					return (<Item
						key={item}
						item={item}
						slot={this.props.slot}
						ItemData={this.props.ItemData}
						callSlot={(item) => this.callSlot(item)}
					/>)
				})}
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

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = () => {
	return {
		setItem
	}
}

export default connect(mapStateToProps, mapDispatchToProps())(EquipSlot);
