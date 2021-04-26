import React from 'react';
import Styled from 'styled-components'


const RenderBox=Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #49FCD4;
    width: 45%;
    margin: auto;
`;
function RenderPlants() {


    return (
        <RenderBox>
            <div>
                <p>Name: </p>
                <p>Nickname: </p>
                <p>Species: </p>
                <p>Watering Frequency: </p>
            </div>
        </RenderBox>
    );
}

export default RenderPlants;