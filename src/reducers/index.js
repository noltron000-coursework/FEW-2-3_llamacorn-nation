import { combineReducers } from 'redux'
import itemsReducer from './item-reducer'

export default combineReducers({
	items: itemsReducer
})
