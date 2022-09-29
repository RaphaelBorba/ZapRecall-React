import styled from "styled-components";
import { useState } from "react";
import spin from './assets/img/setinha.png'

export default function Card({ question, answer, index }) {
    const [bol, setBol] = useState(true)
    const [changeDisplay, setChangeDisplay] = useState(true)


    return (
        <NypeCard>
            <CardOff bol={bol}>
                <h1>Pergunta {index + 1}</h1>
                <ion-icon onClick={() => (bol) ? setBol(false) : setBol(true)} name="play-outline" ></ion-icon>
            </CardOff>
            <CardOn bol={bol}>
                <h2 style={{display:(changeDisplay)?'initial':'none'}}>{question}</h2>
                <h2 style={{display:(changeDisplay)?'none':'initial'}}>{answer}</h2>
                <img style={{display:(changeDisplay)?'initial':'none'}} onClick={() => (changeDisplay) ? setChangeDisplay(false) : setChangeDisplay(true)} src={spin} alt={spin} />
            </CardOn>
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
const CardOn = styled.div`
    display: ${props => (props.bol) ? 'none' : 'flex'};
    position: relative;
    margin: 20px;
    h2{
        font-weight: 400;
        font-size: 18px;
    }
    img{
        position: absolute;
        bottom: -10px;
        right: 0;
        width: 20px;
    }
    
`;