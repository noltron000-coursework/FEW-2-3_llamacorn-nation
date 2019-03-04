import { SET_ITEM } from '../actions/'

const defaultState = {
	hats: null,
	bodies: null,
	eyes: null
}

const itemsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_ITEM:
			const newState = { ...state }
			newState[action.payload.slot] = action.payload.item
			return newState

		default:
			return state

	}
}

export default itemsReducer
