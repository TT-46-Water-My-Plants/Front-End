import React from 'react'
import styled from 'styled-components'


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
		display: inline-block;
        border-radius: 4px;
        background-color: #deb887;
        border: none;
        color: #FFFFFF;
        text-align: center;
        font-size: 28px;
        padding: ;
        width: 140px;
        transition: all 0.5s;
        cursor: pointer;
        height: 5vh;
	}

	.button:hover {
		background-color: #60a362; /* Green */
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
		color: white;
	}

    .paragraph {
        margin: -1%;
        color: #deb887;
        font-size: 3rem;
        font-family: 'Jomhuria', cursive;
    }
`;



const Update = () => {
    
    return (
        <form>
            <UpdateDiv>
                <p className ='paragraph'>Enter new password and or phone number</p>
                <br />
                <label className="label">
                    <input
                        name="password"
                        type="password"
                        // value={}
                        // onChange={}
                        placeholder="password"
                    />
                </label>
                <br />
                <label className="label">
                    <input
                        name="phoneNumber"
                        // value={}
                        // onChange={}
                        placeholder="(xxx)xxx-xxxx"
                    />
                </label>
                <br />
                <div className="submit">
                    <button 
                        // onClick={}
                        name="submit"
                        className="button"
                    >
                        Save
                    </button>
                </div>
            </UpdateDiv>
        </form>
    )
};
 export default Update