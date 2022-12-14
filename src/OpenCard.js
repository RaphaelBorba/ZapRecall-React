import styled from "styled-components";
import spin from './assets/img/setinha.png'
import { useState } from "react";


export default function OpenCard({ plusCount, ableButtons, setBol, bol, answer, question, index, setRegisteredAnswers, registeredAnswers }) {

    const [changeDisplay, setChangeDisplay] = useState(true)

    /* FUNCTION THAT CHANGES THE ARRAY registeredAnswers REGISTERING TYPE ANSWER */
    
    function registerAnswer(val){
        let arr = [...registeredAnswers];
        arr.splice(index,1,val);
        setRegisteredAnswers(arr);
        (bol) ? setBol(false) : setBol(true);
        ableButtons()
        plusCount()

    }

    return (

        <CardOn data-identifier="flashcard-index-item" bol={bol}>

            <h2 data-identifier="flashcard-question" style={{ display: (changeDisplay) ? 'initial' : 'none' }}>{question}</h2>
            <img data-identifier="flashcard-turn-btn" style={{ display: (changeDisplay) ? 'initial' : 'none' }} onClick={() => (changeDisplay) ? setChangeDisplay(false) : setChangeDisplay(true)} src={spin} alt={spin} />
            <h2 data-identifier="flashcard-answer" style={{ display: (changeDisplay) ? 'none' : 'initial' }}>{answer}</h2>

            <DivBut style={{ display: (changeDisplay) ? 'none' : 'initial' }}>

                <Botao data-identifier="forgot-btn" onClick={()=>registerAnswer(1)} left='0' cor='#FF3030' >Não lembrei</Botao>
                <Botao data-identifier="almost-forgot-btn" onClick={()=>registerAnswer(2)} left='90' cor='#FF922E' >Quase não lembrei</Botao>
                <Botao data-identifier="zap-btn" onClick={()=>registerAnswer(3)} left='180' cor='#2FBE34' >Zap!</Botao>

            </DivBut>
        </CardOn>

    );
}
const CardOn = styled.div`
    display: ${props => (props.bol) ? 'none' : 'flex'};
    flex-direction: column;
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
const Botao = styled.button`
    background-color: ${props=>props.cor};
    width: 80px;
    height: 50px;
    border: none;
    color: white;
    border-radius: 5px;
    position: absolute;
    left: ${props => props.left}px;
    bottom: 0;
`;
const DivBut = styled.div`
    
    position: relative;
    margin: 15px auto 0 auto;
    height: 50px;
    width: 100%;
    
`;