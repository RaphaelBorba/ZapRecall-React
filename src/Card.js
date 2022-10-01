import styled from "styled-components";
import { useState } from "react";

import OpenCard from "./OpenCard";
import CloseCard from "./CloseCard";

export default function Card({
    question,
    answer,
    index,
    isDisable,
    setIsDisable,
    registeredAnswers,
    setRegisteredAnswers }) {

    const [bol, setBol] = useState(true)

    function disableButtons() {
        (bol) ? setBol(false) : setBol(true)
        const array = isDisable.map((val, i) => i === index ? val : true)
        setIsDisable(array)
    }

    function ableButtons(){
        let arr = isDisable.map((a)=>false)
        setIsDisable(arr)
    }



    return (
        <NypeCard style={{ pointerEvents: isDisable[index] ? 'none' : 'initial' }}>


            <CloseCard registeredAnswers={registeredAnswers[index]}
                bol={bol}
                disableButtons={disableButtons}
                index={index} />

            
            <OpenCard index={index}
                ableButtons={ableButtons}
                setBol={setBol}
                bol={bol}
                question={question}
                answer={answer}
                registeredAnswers={registeredAnswers}
                setRegisteredAnswers={setRegisteredAnswers} />
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

