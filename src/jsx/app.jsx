// import react package
import React, { Component } from 'react';

// import components
import Avatar from '../jsx/avatar.jsx';
import Widget from '../jsx/widget.jsx';

// import other
import '../css/main.css';

class App extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.handleClick = this.handleClick.bind(this);
	// }

	// getWidgets(items) {
	// 	for (let slot in items) {
	// 		<ChoiceWidget name={slot} />
	// 	}
	// }

	render() {
		return (
			<div>
				<input type="checkbox" id="check3" /> Fish
				<label htmlFor="check3">TEST</label>

				<h1>Llamacorn Nation!</h1>
				<div id='body'>
					<Avatar />
					<Widget />
				</div>
			</div>
		);
	}
}

export default App;
