// import react package
import React, { Component } from 'react';

class Item extends Component {

	render() {
		return (
			<div className='item'>
				<input
					type='radio'
					id={this.props.item}
					name={this.props.slot}
					value={this.props.item}
				/>
				<label htmlFor={this.props.item}>{this.props.item}</label>
			</div>
		);
	}
}

export default Item;
