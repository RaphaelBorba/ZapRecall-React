import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";



export default function Contend({quests}){

    
    const [isDisable, setIsDisable] = useState([false, false, false, false])

    return(
        <Pack>
            {quests.map((e,i)=><Card key={i} 
            question={e.question} 
            answer={e.answer} 
            index={i} 
            isDisable={isDisable} 
            setIsDisable={setIsDisable} />)}
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