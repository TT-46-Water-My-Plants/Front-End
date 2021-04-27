import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Styled from "styled-components";
import { fetchPlants, addPlant, removePlant, editPlant } from "../store/plants";

const RenderBox = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #49FCD4;
    width: 40%;
    margin: auto;
    border-radius: 12%;
`;
const Info = Styled.div`
    color: #454848;
    font-weight: 4.5rem;
`;
const Buttons = Styled.button`
    background-color: black;
    color: white;
    padding: 2%;
`;

function RenderPlants(props) {
	const plantList = useSelector((state) => state.plants.plantList);
	const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchPlants())
    }, [])

    useEffect(()=>{
        dispatch(removePlant)
    }, [])

    useEffect(() => {
        dispatch(editPlant)
    }, [])
    console.log(plantList);

	return (
		<RenderBox>
			<Info>
			{plantList.map((plants) => {
                return 
            })}
			</Info>
            <Buttons>Remove Plant {removePlant} </Buttons>
            <Buttons>Edit Plant {editPlant} </Buttons>
		</RenderBox>
	);
}

export default RenderPlants;
