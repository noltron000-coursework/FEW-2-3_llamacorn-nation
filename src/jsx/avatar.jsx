// import react package
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Avatar extends Component {
	render() {
		return (
			<div id='avatar'>
				<h2>Here's your avatar:</h2>
				<div className='container'>
					<img alt='body' src={require(`../img/accessories/bodies/${this.props.items.bodies}`)} className='avatar-item' />
					<img alt='eyes' src={require(`../img/accessories/eyes/${this.props.items.eyes}`)} className='avatar-item' />
					<img alt='hat' src={require(`../img/accessories/hats/${this.props.items.hats}`)} className='avatar-item' />
				</div>
			</div >
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return { items: state.items }
}

export default connect(mapStateToProps)(Avatar);
