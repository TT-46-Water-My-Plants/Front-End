import { createSlice } from "@reduxjs/toolkit";
import { axiosWithAuth } from "../helper/axiosWithAuth";

const slice = createSlice({
	name: "auth",
	initialState: {
		loading: false,
		attemptMsg: {
			success: true,
			formValidationFailed: false,
			incorrectCredentials: false,
			userAlreadyExists: false,
		},
	},
	reducers: {
		setLoading: (auth) => {
			auth.loading = !auth.loading;
		},
		setAttemptMsg: (auth) => {},
		login: (auth, action) => {
			localStorage.setItem("token", action.payload);
		},
		register: (auth, action) => {
			localStorage.setItem("token", action.payload);
		},
		logout: (auth) => {
			localStorage.removeItem("token");
		},
	},
});

export const authLogin = (formVals) => (dispatch) => {
	dispatch(setLoading());
	axiosWithAuth()
		.post("url", formVals)
		.then((res) => {
			dispatch(login(res.data.token));
			dispatch(setLoading());
		})
		.catch((err) => {
			dispatch(setAttemptMsg({}));
			dispatch(setLoading());
		});
};

export const authRegister = (formVals) => (dispatch) => {
	dispatch(setLoading());
	axiosWithAuth()
		.post("url", formVals)
		.then((res) => {
			dispatch(register(res.data.token));
			dispatch(setLoading());
		})
		.catch((err) => {
			dispatch(setAttemptMsg({}));
			dispatch(setLoading());
		});
};

export const {
	setLoading,
	setAttemptMsg,
	login,
	register,
	logout,
} = slice.actions;

export default slice.reducer;
