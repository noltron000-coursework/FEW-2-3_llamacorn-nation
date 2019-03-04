// import react package
import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers'

// import components
import Avatar from '../jsx/avatar.jsx';
import Widget from '../jsx/widget.jsx';

// import other
import '../css/main.css';

const store = createStore(reducers)

class App extends Component {


	render() {
		return (
			<Provider store={store}>
				<div>
					<h1>Llamacorn Nation!</h1>
					<div id='body'>
						<Avatar />
						<Widget />
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
