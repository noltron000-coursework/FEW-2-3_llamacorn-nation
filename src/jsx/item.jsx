// import react package
import React, { Component } from 'react';

class Item extends Component {

	sendToParent = () => {
		this.props.callSlot(this.props.item);
	}

	render() {
		return (
			<div className='item'>
				<input
					type='radio'
					id={this.props.item}
					key={this.props.item}
					name={this.props.slot}
					value={this.props.item}
					onInput={this.sendToParent}
				/>
				<label htmlFor={this.props.item}>{this.props.item}</label>
			</div>
		);
	}
}

export default Item;
