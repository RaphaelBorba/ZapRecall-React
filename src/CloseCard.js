import styled from "styled-components";


export default function CloseCard({ registeredAnswers, bol, index, disableButtons }) {

    let nameIcon = 'play-outline'
    let colorText = 'black'

    function choseTypeCards() {

        if (registeredAnswers === 1) {
            colorText = '#FF3030'
            nameIcon = 'close-circle'
        } else if (registeredAnswers === 2) {
            colorText = '#FF922E'
            nameIcon = 'help-circle'
        } else if (registeredAnswers === 3) {
            colorText = '#2FBE34'
            nameIcon = 'checkmark-circle'
        }
    }

    choseTypeCards()


    return (

        <CardOff registeredAnswers={registeredAnswers} colorText={colorText} bol={bol}>
            <h1>Pergunta {index + 1}</h1>
            <ion-icon onClick={(registeredAnswers === 0) ? disableButtons : null} name={nameIcon} ></ion-icon>
        </CardOff>
    );
}


const CardOff = styled.div`
    display: ${props => (props.bol) ? 'flex' : 'none'};
    align-items: center ;
    justify-content: space-between;
    margin: 20px;
    color: ${props => props.colorText};
    text-decoration:  ${props => (props.registeredAnswers !== 0) ? 'line-through' : 'none'};
    ion-icon{
        font-size: 25px;
        color: ${props => props.colorText}  ;
    }
    
`;