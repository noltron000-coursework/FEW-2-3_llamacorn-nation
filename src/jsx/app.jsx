import React, { Component } from 'react';
import '../css/main.css';
import ChoiceWidget from '../jsx/choice-widget.jsx';
import Avatar from '../jsx/avatar.jsx';
import * as fs from 'fs';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const files = fs.readdirSync('../img/accessories/');
		console.log(files);
	}

	render() {
		return (
			<div id='root'>
				<h1>Llamacorn Nation!</h1>
				<button onClick={this.handleClick}>Click Me</button>

				<h2>Here's your avatar:</h2>
				<div>
					<Avatar />
				</div>

				<h2>Here's an array of widgets:</h2>
				<div>
					<ChoiceWidget />
					<ChoiceWidget />
					<ChoiceWidget />
				</div>
			</div>
		);
	}
}

export default App;
