import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";



export default function Contend({ plusCount, quests, registeredAnswers, setRegisteredAnswers }) {


    const [isDisable, setIsDisable] = useState(registeredAnswers.map((a)=>false))

    return (
        <Pack registeredAnswers={registeredAnswers}>
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
    height: 480px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: scroll;
`;