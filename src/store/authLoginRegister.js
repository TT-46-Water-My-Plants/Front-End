import { createSlice } from "@reduxjs/toolkit";
import { axiosWithAuth } from "../helper/axiosWithAuth";

const slice = createSlice({
	name: "auth",
	initialState: {
		loading: false,
		attemptMsg: "",
	},
	reducers: {
		setLoading: (auth) => {
			auth.loading = !auth.loading;
		},
		setAttemptMsg: (auth, action) => {
			auth.attemptMsg = action.payload;
		},
		login: (auth, action) => {
			localStorage.setItem("token", action.payload);
			auth.attemptMsg = "loginSuccess";
		},
		logout: (auth) => {
			localStorage.removeItem("token");
			auth.attemptMsg = "";
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
			dispatch(setAttemptMsg("loginFailed"));
			dispatch(setLoading());
		});
};

export const authRegister = (formVals) => (dispatch) => {
	dispatch(setLoading());
	axiosWithAuth()
		.post("api/register", formVals)
		.then((res) => {
			dispatch(setAttemptMsg("registerSuccess"));
			dispatch(setLoading());
		})
		.catch((err) => {
			console.log({ err });
			dispatch(setAttemptMsg("registerFailed"));
			dispatch(setLoading());
		});
};

export const { setLoading, setAttemptMsg, login, logout } = slice.actions;

export default slice.reducer;
