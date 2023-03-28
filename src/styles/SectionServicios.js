import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from {transform: translate(-20%);}
    to {transform: translate(0);}
`
export const ConSectionServicios = styled.div` 
    /* border: 1px solid red;//....................... */
    background-color: var(--color2);
    text-align: center;
    /* margin: 2rem 0; */
    height: max-content;
    padding: 2rem 0;
`
export const ContCardsServi = styled.div`
    /* border: 1px solid red;//....................... */
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px 0;
`
export const CardServicios = styled.div`
    /* border: 1px solid red;//.................. */
    width: 27%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    transition: 30ms;
    @media(max-width:800px){
        width: 50%;
    }
    img{
        border-radius:50%;
        border: 9px solid var(--color1);
        width: 17vw;
        min-width:140px;
        
    }
`
export const EnlaceImg = styled(Link)`
    border-radius:50%;
    position: relative;
    display: inline-block;
    &::before{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius:50%;
        background-color: var(--color1);
        z-index: 1;
        opacity: 0;
        transition: opacity 20ms;
    }
    &:hover::before{
        opacity: 0.7; 
        background-color: var(--color8);
    }
    img{
        transition: 80ms;
        display: block;
        max-width: 100%;
        height: auto;
        z-index: 2;
        }
        &:active{
            transform: scale(1);
    }
    
`
export const ContTextCard = styled.div`
    width: 75%;
    margin: auto; 
    padding-bottom: 2em;
    /* border: 1px solid blue;//............ */
    h4{
        font-size: 1.5rem;
        font-weight: 800;
    }
    p{
        font-size: clamp(14px, 1.1vw, 18px);
        line-height: 24px;
    }
    @media (max-width:1200px) {
        p{
            display: none;
        }
        h4{
            font-size: 15px;
        }
    }
`
export const EnlaceBtnS = styled(Link)`
    margin: 10px 0;
    padding: .5vw 2vw;
    font-size: 20px;
    top: 50px;
    text-decoration: none;
    font-weight: 500;
    color: var(--color5);
    background-color:var(--color4);
    border: 2px solid var(--color4);
    border-radius: 1rem;
    @media(max-width:1200px){
        position: relative;
        top: 0px;
        font-size: 15px;
    }
    &:hover{
        color: var(--color1);
    }
    &:active{
    background-color: var(--color7);
    
    }
`
export const ContMapa = styled.div`
    /* border: 1px solid red;//..................... */
    width: 90%;
    margin: auto;
    @media (max-width:1000px) {
        margin-bottom: 1em;
    }
    img{
        /* border: 1px solid red;//..................... */
        width: 80%;
        transition: opacity 0.5s;
        &.animate {
            animation: ${spin} 1s alternate forwards;
        }
        @media (max-width:1000px) {
            width: 100%;
        }
    }
`
export const ContTexto1 = styled.div`
    /* border: 1px solid red;//..................... */
    width: 50%;
    margin:0 auto;
    padding: 1.8em 0;
    .text_title{
        margin-bottom:1em ;
        font-size: clamp(20px, 1.5vw, 42px);
        font-weight:900;
    }
    @media (max-width:1000px) {
            width: 90%;

    }
`
export const ContTexto2 = styled.div`
    /* border: 1px solid red;//..................... */
    width: 60%;
    margin:auto;
    padding: 1.8em 0;
    .countries{
        font-size: clamp(18px, 1.5vw, 36px);
        font-weight:600;
    }
    .text2{
        font-size: clamp(16px, 1.3vw, 26px);
    }
    @media (max-width:1000px) {
            width: 90%;
    }
`
