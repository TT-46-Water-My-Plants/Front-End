import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useForm } from "../hooks/useForm";
import { editUser } from "../store/user";
import { initialFormValues } from "./login";

const UpdateDiv = styled.div`
	background-image: url("https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
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
		display: block;
		border-radius: 4px;
		background-color: #deb887;
		border: none;
		color: #ffffff;
		text-align: center;
		font-size: 28px;
		width: 140px;
		transition: all 0.5s;
		cursor: pointer;
		height: 5vh;
	}

	.button:hover {
		background-color: #60a362; /* Green */
		box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
			0 17px 50px 0 rgba(0, 0, 0, 0.19);
		color: white;
	}

	.paragraph {
		margin: -1%;
		color: #deb887;
		font-size: 3rem;
		font-family: "Jomhuria", cursive;
	}
`;
const Update = () => {
	const [formVals, handleChange, clearForm] = useForm(initialFormValues);

	const dispatch = useDispatch();

	const { push } = useHistory();

	const handleClick = (e) => {
		push("/dashboard");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password === "") {
			document.querySelector(".paragraph").textContent = "Missing Field!";
			clearForm();
			return;
		} else if (username === "" && phoneNumber === "") {
			dispatch(editUser({ password }));
			push("/dashboard");
			return;
		} else if (username === "" || phoneNumber === "") {
			if (username === "") {
				dispatch(editUser({ password, phoneNumber }));
				push("/dashboard");
				return;
			}
			if (phoneNumber === "") {
				dispatch(editUser({ password, username }));
				push("/dashboard");
				return;
			}
		}
		dispatch(editUser(formVals));
		push("/dashboard");
	};

	const { username, password, phoneNumber } = formVals;

	return (
		<form onSubmit={handleSubmit}>
			<UpdateDiv>
				<p className="paragraph">Only Password Required:</p>
				<br />
				<label className="label">
					<input
						name="username"
						value={username}
						onChange={handleChange}
						placeholder="username"
					/>
				</label>
				<br />
				<label className="label">
					<input
						name="password"
						type="password"
						value={password}
						onChange={handleChange}
						placeholder="password"
					/>
				</label>
				<br />
				<label className="label">
					<input
						name="phoneNumber"
						value={phoneNumber}
						onChange={handleChange}
						placeholder="(xxx)xxx-xxxx"
					/>
				</label>
				<br />
				<div className="submit">
					<button name="submit" className="button">
						Save
					</button>
					<button
						type="button"
						style={{ marginTop: "15%" }}
						onClick={handleClick}
						name="cancel"
						className="button"
					>
						Cancel
					</button>
				</div>
			</UpdateDiv>
		</form>
	);
};
export default Update;
