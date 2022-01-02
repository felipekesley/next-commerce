import { actionTypes } from '../actions/cart.action'

const initialState = {
	total: 0,
	quantity: 0,
	products: []
}

export default function CartReducer(state = initialState, { type, payload }) {
	switch (type) {
		case actionTypes.CHANGE:
			return {
				...state,
				...payload
			}

		default:
			return state
	}
}
