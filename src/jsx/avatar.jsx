// import react package
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Avatar extends Component {
	render() {
		return (
			<div id='avatar'>
				<h2>Here's your avatar:</h2>
				<div>
					<h3>WOAH! An output will go here.</h3>
					<h4>{this.props.items.hats}</h4>
					<h4>{this.props.items.eyes}</h4>
					<h4>{this.props.items.bodies}</h4>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return { items: state.items }
}

export default connect(mapStateToProps)(Avatar);
