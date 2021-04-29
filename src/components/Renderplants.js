import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlants, editPlant, removePlant } from "../store/plants";
import { initialFormValues } from "./PlantForm";
import Styled from "styled-components";
import Header from "./Header";
import { useForm } from "../hooks/useForm";
import { useCustomInput } from "../hooks/useCustomInput";

const RenderBox = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #49FCD4;
    width: 65%;
    margin: auto;
    border-radius: 12%;
`;
const Info = Styled.div`
    color: #454848;
    font-weight: 4.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space around;
    .button-con{
        display: flex;
        flex-direction: row;
        justicy-content: space-between;
    }
    .remove-plant{
        background-color: black;
        color: white;
        padding: 2%;
        margin: auto;
    }
    .edit-plant{
        background-color: black;
        color: white;
        padding: 2%;
        margin: auto;
    }
`;

function RenderPlants(props) {
	const [editing, setEditing] = useState(false);
	const [activePlant, setActivePlant] = useState({});

	const [formVals, handleChange, clearForm] = useForm(initialFormValues);
	const [speciesVal, nicknameVal, h2oVal, changeInput] = useCustomInput();
	const plantList = useSelector((state) => state.plants.plantList);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPlants());
	}, []);

	useEffect(() => {
		if (!editing) setActivePlant({});
	}, [editing]);

	const handleSubmit = (e, id) => {
		e.preventDefault();
		const editedSpecies = document.querySelector("#species").value;
		const editedNickname = document.querySelector("#nickname").value;
		const editedH2o = document.querySelector("#h2oFrequency").value;
		dispatch(
			editPlant(id, {
				species: editedSpecies,
				nickname: editedNickname,
				h2oFrequency: editedH2o,
			})
		);
		setEditing(false);
	};

	const { nickname, species, h2oFrequency } = formVals;

	return (
		<>
			<Header />
			<RenderBox>
				<Info>
					{plantList.map((plant) => {
						return (
							<div key={plant.plant_id}>
								{editing && activePlant === plant ? (
									<label>
										Species:
										<input
											style={{ margin: "5% 0" }}
											id="species"
											name="species"
											value={
												speciesVal
													? species
													: plant.species
											}
											onChange={handleChange}
											onFocus={changeInput}
										/>
									</label>
								) : (
									<h4>{plant.species}</h4>
								)}
								{editing && activePlant === plant ? (
									<label>
										Nickname:
										<input
											style={{ margin: "5% 0" }}
											id="nickname"
											name="nickname"
											value={
												nicknameVal
													? nickname
													: plant.nickname
											}
											onChange={handleChange}
											onFocus={changeInput}
										/>
									</label>
								) : (
									<h5>{plant.nickname}</h5>
								)}
								{editing && activePlant === plant ? (
									<label>
										Frequency:
										<input
											style={{ margin: "5% 0" }}
											id="h2oFrequency"
											name="h2oFrequency"
											value={
												h2oVal
													? h2oFrequency
													: plant.h2oFrequency
											}
											onChange={handleChange}
											onFocus={changeInput}
										/>
									</label>
								) : (
									<h5>{plant.h2oFrequency}</h5>
								)}
								<div className="button-con">
									{editing && activePlant === plant ? null : (
										<button
											onClick={() =>
												dispatch(removePlant(plant))
											}
											className="remove-plant"
										>
											{" "}
											Remove Plant{" "}
										</button>
									)}
									{editing && activePlant === plant ? (
										<>
											<button
												onClick={(e) => {
													handleSubmit(
														e,
														plant.plant_id
													);
													changeInput(e);
													clearForm();
												}}
												name="save"
												className="edit-plant"
											>
												Save
											</button>
											<button
												onClick={(e) => {
													setEditing(!editing);
													changeInput(e);
													clearForm();
												}}
												name="cancel"
												className="edit-plant"
											>
												Cancel
											</button>
										</>
									) : (
										<button
											onClick={() => {
												setEditing(!editing);
												setActivePlant(
													plantList.find(
														(p) => p === plant
													)
												);
											}}
											className="edit-plant"
										>
											Edit Plant
										</button>
									)}
								</div>
							</div>
						);
					})}
				</Info>
			</RenderBox>
		</>
	);
}

export default RenderPlants;
