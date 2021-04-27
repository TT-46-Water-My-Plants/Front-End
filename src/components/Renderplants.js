import React from "react";
import Styled from "styled-components";
import Header from "./Header";

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
		<>
			<Header />
			<RenderBox>
				<Info>
					<img src="" alt="Plant"></img>
					<p>Name: </p>
					<p>Nickname: </p>
					<p>Species: </p>
					<p>Watering Frequency: </p>
				</Info>
			</RenderBox>
		</>
	);
}

export default RenderPlants;


const Update = () => {
    
    return (
        <form>
            <div>
                <p>Change details and submit changes</p>
                <br />
                <label className="label">
                    <input
                        name="password"
                        type="password"
                        // value={}
                        // onChange={}
                        placeholder="Password"
                    />
                </label>
                <label className="label">
                    <input
                        name="phoneNumber"
                        // value={}
                        // onChange={}
                        placeholder="(123)456-7890"
                    />
                </label>
                <div className="submit">
                    <button
                        // onClick={}
                        name="login"
                        className="button"
                    >
                        Login
                    </button>
                </div>
            </div>
        </form>
    )
};
