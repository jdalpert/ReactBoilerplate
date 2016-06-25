import { CHANGE, GRAB, DELETE, EDIT, GRABE } from "../actions/constants";

const initial_state = {
	data: ""
};

export default function(state = initial_state, action) {
	switch(action.type) {
		case CHANGE:
			return {...state, data: action.payload.data};
		case GRAB:
			return {...state, data: action.payload.data};
		case DELETE:
			return {...state, data: action.payload.data};
		case EDIT:
			return {...state, data: action.payload.data};
		case GRABE:
			return {...state, data: action.payload.data};
		default:
			return state;
	}
}
