import React, { Component } from 'react';
import '../css/main.css';
import ChoiceWidget from '../jsx/choice-widget.jsx';
import Avatar from '../jsx/avatar.jsx';

class App extends Component {
	render() {
		return (
			<div id='root'>
				<h1>Llamacorn Nation</h1>
				<div>
					<Avatar />
				</div>
				<h2>Here's an array of widgets</h2>
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
