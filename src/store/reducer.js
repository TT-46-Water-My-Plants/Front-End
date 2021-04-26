import { combineReducers } from "@reduxjs/toolkit";
import plantReducer from "./plants";
import authReducer from "./authLoginRegister";

export default combineReducers({
	plants: plantReducer,
	auth: authReducer,
});
