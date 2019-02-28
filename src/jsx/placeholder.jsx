import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../css/placeholder.css';
// import logo from '../img/logo.svg';


class Placeholder extends Component {
	render() {
		return (
			<div className='place'>
				<header className='place-header'>
					<img src={logo} className='place-logo' alt='logo' />
					<p>
						Edit <code>src/placeholder.jsx</code> and save to reload.
					</p>
					<a
						className='place-link'
						href='https://reactjs.org'
						target='_blank'
						rel='noopener noreferrer'
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default Placeholder;
