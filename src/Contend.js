import styled from "styled-components";
import Card from "./Card";



export default function Contend({quests}){
    

    

    return(
        <Pack>
            {quests.map((e,i)=><Card key={i} question={e.question} answer={e.answer} index={i} />)}
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
    overflow-y: scroll;
`;