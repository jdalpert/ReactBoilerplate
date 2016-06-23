import { combineReducers } from 'redux';
import change_main from "./change_main.reducer";

const rootReducer = combineReducers({
	list: change_main,
});

export default rootReducer;
