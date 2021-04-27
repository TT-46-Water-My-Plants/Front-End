import React from "react";
import Styled from "styled-components";

const RenderBox = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #49FCD4;
    width: 40%;
    margin: auto;
    border-radius: 10%;
`;
const Info = Styled.div`
    color: #454848;
    font-weight: 4.5rem;
`;

function RenderPlants(props) {
	// const plantList = useSelector((state) => state.plants.plantList);
	// const dispatch = useDispatch();

	return (
		<RenderBox>
			<Info>
				<img src="" alt="Plant"></img>
				<p>Name: </p>
				<p>Nickname: </p>
				<p>Species: </p>
				<p>Watering Frequency: </p>
			</Info>
		</RenderBox>
	);
}

export default RenderPlants;
