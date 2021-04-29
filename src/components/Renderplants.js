import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlants } from "../store/plants";
import Styled from "styled-components";
import Header from "./Header";

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
	const plantList = useSelector((state) => state.plants.plantList);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPlants());
	}, []);

	return (
		<RenderBox>
			<Info>
				{plantList.map((plant) => {
					return (
						<div key={plant.id}>
							<h4>{plant.species}</h4>
							<h5>{plant.nickname}</h5>
							<h5>{plant.h2oFrequency}</h5>
							<div className="button-con">
								<button
									removeplant={`removePlant`}
									className="remove-plant"
								>
									{" "}
									Remove Plant{" "}
								</button>
								<button
									editplant={`editPlant`}
									className="edit-plant"
								>
									Edit Plant
								</button>
							</div>
						</div>
					);
				})}
			</Info>
		</RenderBox>
	);
}

export default RenderPlants;
