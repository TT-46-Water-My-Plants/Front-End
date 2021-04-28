import { combineReducers } from "@reduxjs/toolkit";
import plantReducer from "./plants";
import userReducer from "./user";

export default combineReducers({
	plants: plantReducer,
	user: userReducer,
});
