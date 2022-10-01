import styled from 'styled-components'


export default function Footer(){

    return(
        <BoxFooter></BoxFooter>
    );
}

const BoxFooter = styled.div`
    background-color: white;
    width: 375px;
    height: 111px;
    position: fixed;
    left: 0;
    top: 589px;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`;

