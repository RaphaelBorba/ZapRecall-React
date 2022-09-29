import styled from "styled-components";
import imgLogo from './assets/img/logo.png'


export default function Top(){
    return(
        <DivTop>
            <img src={imgLogo} alt={imgLogo} />
            <Title>ZapRecall</Title>
        </DivTop>
    );
}



const DivTop = styled.div`
    margin: 0 auto;
    padding-block: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-family: 'Righteous', cursive;
    color: white;
    font-size: 36px;
    margin-left: 20px;
`;