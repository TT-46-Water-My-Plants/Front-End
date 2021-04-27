import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useForm } from "./hooks/useForm";
import { authLogin, authRegister } from "./store/authLoginRegister";

const initialFormValues = {
	username: "",
	password: "",
	phoneNumber: "",
};

const Container = styled.div`
	background-image: url("https://images.unsplash.com/photo-1497990571654-77aa8ec36038?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80");
	background-repeat: no-repeat;
	background-size: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;

	.label {
		margin: -0.5%;
	}

	.button {
		transition-duration: 0.4s;
		border-radius: 8px;
		font-size: 20px;
	}

	.button:hover {
		background-color: #60a362; /* Green */
		color: white;
	}
`;

const Login = () => {
	const [formVals, changeFormVals] = useForm(initialFormValues);
	const loggedIn = useSelector((state) => state.auth.loggedIn);
	const dispatch = useDispatch();
	const { push } = useHistory();

	const handleSubmit = (e) => {
		e.persist();
		e.preventDefault();

		if (e.target.name === "login") {
			dispatch(authLogin(formVals));
		} else if (e.target.name === "register") {
			dispatch(authRegister(formVals));
		}
	};

	useEffect(() => {
		if (loggedIn) push("/dashboard");
	}, [loggedIn]);

	return (
		<form>
			<Container>
				<h1>Welcome</h1>
				<label className="label">
					<input
						name="username"
						value={formVals.username}
						onChange={changeFormVals}
						placeholder="Username"
					/>
				</label>
				<br />
				<label className="label">
					<input
						name="password"
						type="password"
						value={formVals.password}
						onChange={changeFormVals}
						placeholder="Password"
					/>
				</label>
				<br />
				<label className="label">
					<input
						name="phoneNumber"
						value={formVals.phoneNumber}
						onChange={changeFormVals}
						placeholder="(123)456-7890"
					/>
				</label>
				<br />
				<div className="submit">
					<button
						onClick={handleSubmit}
						name="login"
						className="button"
					>
						Login
					</button>
					<button
						onClick={handleSubmit}
						name="register"
						className="button"
					>
						Register
					</button>
				</div>
			</Container>
		</form>
	);
};

export default Login;
