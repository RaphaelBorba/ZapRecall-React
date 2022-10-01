import styled from "styled-components";
import { useState } from "react";
import { createGlobalStyle } from 'styled-components';
import Top from "./Top";
import Contend from "./Contend";
import Footer from "./Footer";

const quests = [{question:'O que é JSX', answer:'Uma extensão de linguagem do JavaScript'},
                {question:'O React é?', answer:'Uma biblioteca JavaScript para construção de interfaces'},
                {question:'Componentes devem iniciar com?', answer:'Letra maiúscula'},
                {question:'Podemos colocar __ dentro do JSX', answer:'Expressões'},
                {question:'O ReactDOM nos ajuda __', answer:'interagindo com a DOM para colocar componentes React na mesma'},
                {question:'Usamos o npm para __', answer:'gerenciar os pacotes necessários e suas dependências'},
                {question:'Usamos props para __', answer:'passar diferentes informações para componentes '},
                {question:'Usamos estado (state) para __', answer:'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'}]



export default function App(){

    function randomQuestsList(){
        const randomList = quests.sort(() => 0.5 - Math.random())
        return randomList.slice(0,4)
    }
    
    return(
        <>
            <GlobalStyle/>
            <Body>
                <Top/>
                <Contend quests={randomQuestsList()}/>
                <Footer/>
            </Body>
        </>
    );
}



const Body = styled.div`
    width: 375px;
    background-color: #FB6B6B;
    min-height: 700px;
`;


const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    *{
        box-sizing: border-box; 
        font-family: 'Recursive', sans-serif;
    }
`;