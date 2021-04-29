import { createSlice } from "@reduxjs/toolkit";
import { axiosWithAuth } from "../helper/axiosWithAuth";

const slice = createSlice({
	name: "user",
	initialState: {
		welcomeMessage: "",
		loading: false,
		attemptMsg: "",
	},
	reducers: {
		setLoading: (user) => {
			user.loading = !user.loading;
		},
		setAttemptMsg: (user, action) => {
			user.attemptMsg = action.payload;
		},
		login: (user, action) => {
			user.welcomeMessage = action.payload.message;
			localStorage.setItem("token", action.payload.token);
		},
		logout: (user) => {
			user.welcomeMessage = "";
			localStorage.removeItem("token");
			user.attemptMsg = "";
		},
	},
});

export const userLogin = (formVals) => (dispatch) => {
	dispatch(setLoading());
	axiosWithAuth()
		.post("api/login", formVals)
		.then((res) => {
			dispatch(login(res.data));
			dispatch(setAttemptMsg("loginSuccess"));
			dispatch(setLoading());
		})
		.catch((err) => {
			console.log({ err });
			dispatch(setAttemptMsg("loginFailed"));
			dispatch(setLoading());
		});
};

export const userRegister = (formVals) => (dispatch) => {
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

export const editUser = (fields) => (dispatch) => {
	dispatch(setLoading());
	axiosWithAuth()
		.put("/api/user", fields)
		.then((res) => {
			dispatch(setAttemptMsg("updateUserSuccess"));
			dispatch(setLoading());
		})
		.catch((err) => {
			console.log({ err });
			dispatch(setAttemptMsg("updateUserFailed"));
			dispatch(setLoading());
		});
};

export const { setLoading, setAttemptMsg, login, logout } = slice.actions;

export default slice.reducer;
