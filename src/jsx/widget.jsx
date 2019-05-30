// import react package
import React, { Component } from 'react';

// import components
import EquipSlot from '../jsx/equip-slot.jsx';

class ChoiceWidget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ItemData: {
				hats: [
					'hat01.png',
					'hat02.png',
					'hat03.png',
					'null'
				],
				eyes: [
					'eye01.png',
					'eye02.png',
					'eye03.png',
					'null'
				],
				bodies: [
					'llamacorn01.png',
					'llamacorn02.jpg',
					'llamacorn03.png',
					'null'
				]
			},
			ChoiceData: {}
		}
	}

	renderEquipSlot() {
		let slotList = []

		for (let slot in this.state.ItemData) {
			slotList.push(slot)
		}

		return (
			<div>
				{slotList.map((slot) => {
					return (<EquipSlot
						key={slot}
						slot={slot}
						ItemData={this.state.ItemData}
					/>)
				})}
			</div>
		);
	}

	render() {
		return (
			<div id='widget'>
				<h2>Here's your widgets:</h2>
				{/* this will be a selection of accessories for this equip slot */}
				<form id='options'>
					{this.renderEquipSlot()}
				</form>
				{/*
					***IMPORTANT***
					This is where a valuable object will be passed in.
					The object will tell the app where images are located,
					what the names of the UI assets are to display,
					and how many radio buttons and widgets it should render.

					It will look like this:
					{
						hats: [
							'hat01.png',
							'hat02.png',
							'hat03.png'
						],
						eyes: [
							'eye01.png',
							'no-naming-convention.png',
							'any-filetype.jpg'
						],
						bodies: [
							'body01.png',
							'body02.jpg',
							'body08.png'
						]
					}
				*/}
			</div>
		);
	}
}

export default ChoiceWidget;
