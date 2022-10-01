import styled from "styled-components";
import { useState } from "react";

import OpenCard from "./OpenCard";

export default function Card({ question, answer, index, isDisable, setIsDisable }) {
    
    const [bol, setBol] = useState(true)
    
    

    function disableButtons(){
        (bol) ? setBol(false) : setBol(true)
        const array = isDisable.map((val, i) => i === index ? val : true)
        console.log(array)
        setIsDisable(array)
    }

    return (
        <NypeCard style={{pointerEvents: isDisable[index] ? 'none' : 'initial'}}>

            <CardOff bol={bol}>
                <h1>Pergunta {index + 1}</h1>
                <ion-icon onClick={disableButtons} name="play-outline" ></ion-icon>
            </CardOff>
            
            <OpenCard bol={bol} question={question} answer={answer}/>
        </NypeCard>
    );
}

const NypeCard = styled.div`
    width: 300px;
    min-height: 65px;
    background-color: white;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin: 15px 0;
    h1{
        font-weight: 400;
        font-size: 18px;
    }
`;

const CardOff = styled.div`
    display: ${props => (props.bol) ? 'flex' : 'none'};
    align-items: center ;
    justify-content: space-between;
    margin: 20px;
    ion-icon{
        font-size: 25px;
    }
    
`;