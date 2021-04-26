import React, { useState } from "react";
import styled from "styled-components";

const initialFormValues = {
	id: "",
	nickname: "",
	species: "",
	h2ofrequency: "",
};

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

function PlantForm() {
	const [values, setValues] = useState(initialFormValues);

	const onChange = (evt) => {
		setValues({ ...values, [evt.target.name]: evt.target.value });
	};

	return (
		<Form>
			<div className="container form inputs">
				<label>
					Id
					<input
						type="text"
						value={values.id}
						onChange={onChange}
						name="id"
						placeholder="please enter ID here"
					/>
				</label>

				<label>
					Nickname
					<input
						type="text"
						value={values.nickname}
						onChange={onChange}
						name="nickname"
						placeholder="type a nickname here"
					/>
				</label>

				<label>
					Species
					<input
						type="text"
						value={values.species}
						onChange={onChange}
						name="species"
						placeholder="input species here"
					/>
				</label>

				<label>
					H20 Frequency
					<input
						type="text"
						value={values.h2ofrequency}
						onChange={onChange}
						name="h2ofrequency"
						placeholder="input frequency here"
					/>
				</label>

				<div className="submit">
					<button class="btn-submit">Submit</button>
				</div>
			</div>
		</Form>
	);
}

export default PlantForm;
