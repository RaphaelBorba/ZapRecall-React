import styled from 'styled-components'


export default function Footer({count, registeredAnswers }) {

    
    let nameIcon;
    let colorText;

    /* FUNCTION TO SHOW ICONS ON FOOTER */

    function showIcon(val, i) {

        if (val === 1) {

            nameIcon = 'close-circle'
            return <ion-icon style={{ color: '#FF3030' }} key={i} name={nameIcon} ></ion-icon>
        } else if (val === 2) {

            nameIcon = 'help-circle'
            return <ion-icon style={{ color: '#FF922E' }} key={i} name={nameIcon} ></ion-icon>
        } else if (val === 3) {

            nameIcon = 'checkmark-circle'
            return <ion-icon style={{ color: '#2FBE34' }} key={i} name={nameIcon} ></ion-icon>
        }

    }

    return (
        <BoxFooter colorText={colorText}>
            <h1 data-identifier="flashcard-counter">{count}/{registeredAnswers.length} CONCLUÍDOS</h1>
            <div>
                {registeredAnswers.map((a, i) => showIcon(a, i))}
            </div>
        </BoxFooter>
    );
}

const BoxFooter = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 375px;
    height: 111px;
    position: fixed;
    left: 0;
    top: 589px;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    ion-icon{
        font-size: 25px;
        color: ${props => props.colorText}  ;
    }
`;

