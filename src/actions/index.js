export const SET_ITEM = 'SET_ITEM'
export const setItem = (slot, item) => {
	return {
		type: SET_ITEM,
		payload: { slot, item }
	}
}
