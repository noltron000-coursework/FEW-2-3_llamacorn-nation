// import react package
import React, { Component } from 'react';

// import components
import EquipSlot from '../jsx/equip-slot.jsx';

class ChoiceWidget extends Component {
	render() {
		return (
			<div id='widget'>
				<h2>Here's your widgets:</h2>
				{/* this will be a selection of accessories for this equip slot */}
				<form id='options'>
					<EquipSlot />
					<EquipSlot />
					<EquipSlot />
				</form>
			</div>
		);
	}
}

export default ChoiceWidget;

// // Hats.js
// export default [
// 	a:1
// ]

// // faces.js
// export default [
// 	a: 1
// ]

// // index.js
// import hats from 'hats'
// import faces from 'faces'

// export default {
// 	hats,
// 	faces
// }
