import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useForm } from "../hooks/useForm";
import { addPlant } from "../store/plants";

const Form = styled.form`
	box-sizing: border-box;
	width: 100%;
	font-family: Original Surfer, sans-serif;
	font-size: 1.5rem;
	color: black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 20px;
	margin: auto auto;

	.btn-submit {
		margin-top: 20px;
		margin-left: 20px;
		border: 2px solid red;
		font-size: 1rem;
	}

	.btn-submit:hover {
		background-color: black;
		color: white;
	}
`;

export const initialFormValues = {
	nickname: "",
	species: "",
	h2oFrequency: "",
};

function PlantForm() {
	const [formVals, handleChange, clearForm] = useForm(initialFormValues);

	const dispatch = useDispatch();
	const { push } = useHistory();

	const handleCancel = (e) => {
		clearForm();
		push("/dashboard");
	};

	const validate = () => {
		return nickname === "" || species === "" || h2oFrequency === ""
			? false
			: true;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (validate()) {
			dispatch(addPlant(formVals));
			push("/dashboard");
		} else {
			clearForm();
			document
				.querySelectorAll("input")
				.forEach((i) => (i.placeholder = "Missing Field?"));
		}
	};

	const { nickname, species, h2oFrequency } = formVals;

	return (
		<Form onSubmit={handleSubmit}>
			<div className="container form inputs">
				<label>
					Species
					<input
						type="text"
						value={formVals.species}
						onChange={handleChange}
						name="species"
						placeholder="input species here"
					/>
				</label>
				<label>
					Nickname
					<input
						type="text"
						value={formVals.nickname}
						onChange={handleChange}
						name="nickname"
						placeholder="type a nickname here"
					/>
				</label>
				<label>
					H20 Frequency
					<input
						type="text"
						value={formVals.h2oFrequency}
						onChange={handleChange}
						name="h2oFrequency"
						placeholder="input frequency here"
					/>
				</label>

				<div className="submit">
					<button className="btn-submit">Submit</button>
					<button
						type="button"
						onClick={handleCancel}
						className="btn-submit"
					>
						Cancel
					</button>
				</div>
			</div>
		</Form>
	);
}

export default PlantForm;
