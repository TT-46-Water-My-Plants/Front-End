import { createSlice } from "@reduxjs/toolkit";
import { axiosWithAuth } from "../helper/axiosWithAuth";

const slice = createSlice({
	name: "auth",
	initialState: {
		loggedIn: false,
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
			auth.loggedIn = true;
		},
		register: (auth, action) => {
			localStorage.setItem("token", action.payload);
			auth.loggedIn = true;
		},
		logout: (auth) => {
			localStorage.removeItem("token");
			auth.loggedIn = false;
		},
	},
});

export const authLogin = (formVals) => (dispatch) => {
	dispatch(setLoading());
	axiosWithAuth()
		.post("api/login", formVals)
		.then((res) => {
			dispatch(login(res.data.token));
			dispatch(setLoading());
		})
		.catch((err) => {
			console.log({ err });
			dispatch(setAttemptMsg({}));
			dispatch(setLoading());
		});
};

export const authRegister = (formVals) => (dispatch) => {
	dispatch(setLoading());
	axiosWithAuth()
		.post("api/register", formVals)
		.then((res) => {
			dispatch(register(res.data.token));
			dispatch(setLoading());
		})
		.catch((err) => {
			console.log({ err });
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
