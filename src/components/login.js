import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useForm } from "../hooks/useForm";
import { useLogin } from "../hooks/useLogin";
import { authLogin, authRegister } from "../store/authLoginRegister";

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

const initialFormValues = {
	username: "",
	password: "",
	phoneNumber: "",
};

const Login = () => {
	const dispatch = useDispatch();

	const [formVals, handleChange, clearForm] = useForm(initialFormValues);

	const attemptMsg = useLogin();

	const { username, password, phoneNumber } = formVals;

	const validate = () => {
		return username === "" || password === "" || phoneNumber === ""
			? false
			: true;
	};

	const handleSubmit = (e) => {
		e.persist();
		e.preventDefault();

		if (!validate()) {
			clearForm();
			return;
		}

		if (e.target.name === "login") {
			dispatch(authLogin(formVals));
		} else if (e.target.name === "register") {
			dispatch(authRegister(formVals));
			clearForm();
		}
	};

	return (
		<form>
			<Container>
				<h1>Welcome</h1>
				<p>{attemptMsg}</p>
				<label className="label">
					<input
						name="username"
						value={username}
						onChange={handleChange}
						placeholder="Username"
					/>
				</label>
				<br />
				<label className="label">
					<input
						name="password"
						type="password"
						value={password}
						onChange={handleChange}
						placeholder="Password"
					/>
				</label>
				<br />
				<label className="label">
					<input
						name="phoneNumber"
						value={phoneNumber}
						onChange={handleChange}
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
