import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";



export default function Contend({ plusCount, quests, registeredAnswers, setRegisteredAnswers }) {


    const [isDisable, setIsDisable] = useState([false, false, false, false])
    console.log(isDisable)

    return (
        <Pack>
            {quests.map((e, i) => <Card key={i}
                question={e.question}
                answer={e.answer}
                index={i}
                isDisable={isDisable}
                setIsDisable={setIsDisable}
                registeredAnswers={registeredAnswers}
                setRegisteredAnswers={setRegisteredAnswers}
                plusCount={plusCount} />)}

        </Pack>
    );
}


const Pack = styled.div`
    width: 100%;
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 0 120px 0;
    overflow-y: hidden;
`;