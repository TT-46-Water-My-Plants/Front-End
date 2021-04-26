import React from 'react';
import Styled from 'styled-components'


const RenderBox=Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #49FCD4;
    width: 40%;
    margin: auto;
`;
const Info=Styled.div`
    color: #454848;
    font-weight: 4.5rem;
`;

function RenderPlants() {


    return (
        <RenderBox>
            <Info>
                <img src='' alt='Plant'></img>
                <p>Name: </p>
                <p>Nickname: </p>
                <p>Species: </p>
                <p>Watering Frequency: </p>
            </Info>
        </RenderBox>
    );
}

export default RenderPlants;