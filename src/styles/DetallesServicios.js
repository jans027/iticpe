import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContNavigationPc = styled.div`
    /* border: 1px solid red;//.................. */
    
    max-width: 300px;
    width: 26%;
    height: fit-content;
    @media (max-width:1270px) {
        display: none;
    }
    a{
        list-style: none;
        text-decoration: none;
        margin: 2em 0;
        vertical-align: middle;
        div{
            color: var(--color4);
            width: 100%;
            height: 67px;
            display: flex;
            align-items: center;
            border-radius: .8em;
            padding: 1em;
            p{
                font-size: 1.1em;
                font-weight: 800;
            }
        }
    }
`
export const ContCardDeta = styled.div`
    /* border: 1px solid red;//..................... */
`
export const CardDetalles = styled.div`
    /* border: 1px solid green;//..................... */
    display: flex;
    flex-direction: column;
    justify-content: center;
    div{
        margin: auto;
    }
    @media (max-width:1270px) {
        margin: auto;
        max-width: 900px;
        width: 80%;
        margin-top: 3.6em;
    }
    @media (max-width:650px) {
        max-width: 485px;
        width: 100%;
        margin: auto;
        margin-top: 1.6em;
        flex-direction: column-reverse;
    }
`
export const ContImgPc = styled.div`
    /* border: 1px solid red;//.................. */
    height: 250px;
    overflow: hidden;
    @media (max-width:450px) {
        display: none;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }
`
export const ContImgMobile = styled.div`
    /* border: 1px solid red;//.................. */
    display: none;
    img{
        width: 100%;
    }
    @media (max-width:450px) {
        display: block;
    }
`
export const TitleSection = styled.h1`
    /* border: 1px solid red;//.................. */
    width: 82%;
    margin: auto;
    font-size: clamp(25px,3vw, 57px);
    font-weight: 900;
    padding: 2.2vw 0;
`
export const ContTextoG = styled.div`
    /* border: 1px solid red;//....................... */
    width: 82%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
export const ParagraphSection = styled.p`
    /* border: 1px solid red;//.................. */
    height: auto;
    font-size: clamp(17px, 1.5vw, 25px);
    padding:.5em 0;
    .especial{
        margin-bottom:.5em;
        font-weight: 600;
    }
`
export const ButtonSection = styled.div`
    /* border: 1px solid red;//.................. */
    width: 82%;
    margin: auto;
    padding: 2.8em 0;
    div{
        margin: auto;
        max-width: 490px;
        width: 70%;
        height: max-content;
        padding: .5em;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 1em;
        font-size: clamp(17px, 1.5vw, 30px);
        font-weight: 800;
        background-color: var(--color4);
        color: var(--color5);
        &:hover{
            background-color: var(--color1);
            color: var(--color4);
        }
    }
`
export const CardAcredtDetalles = styled.div`
    /* border: 1px solid blue;//....................... */
    width: clamp(200px, 17vw, 290px);
    height: auto;
    border-radius: 30px;
    padding-top: 1.3rem;
    /* margin: 2em 0; */
    background-color: var(--color5);
    text-align: center;
    -webkit-box-shadow: 5px 10px 20px -1px rgba(0,0,0,0.6); 
    box-shadow: 5px 10px 20px -1px rgba(0,0,0,0.6);
    span{
        p{
        /* border: 1px solid red;//............... */
        font-size: 1.1vw;
        line-height: 1.3em;
        padding: .5em;
        text-align: center;
        @media(max-width:950px){
            font-size: 14px;
            }
        }
    }
    img{
        width: 85%;
        /* border: 1px solid red;//............... */
    }
    
    a{
        height: 5vw;
        min-height: 40px;
        font-size: 1.3vw;
        font-weight: 700;
        text-decoration:none;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color4);
        border-radius: 0 0 30px 30px;
        color: var(--color5);
        transition: 30ms;
        &:hover{
        color: var(--color1);
        }
        &:active{
            background-color: var(--color7);
        }
        @media(max-width:700px){
        font-size: 16px;
        }
    }
    svg{
        font-size: 3vw;
        color: var(--color1);
        margin-left: 1rem;
        @media(max-width:700px){
            font-size: 20px;
        }
    }
`
export const ContAcredt = styled.div`
    /* border: 1px solid red;//..................... */
    width: 82%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .especial{
        margin-bottom: 2em;
    }
    .especial1{
        font-size: clamp(25px,3vw, 57px);
        font-weight: 900;
        padding: 2.2vw 0;
    }
    P{
        width: 100%;
        
    }
`
export const BtnPolCol = styled(Link)`
    text-decoration: none;
    padding: .5em;
    border-radius: 1em;
    background-color: var(--color4);
    color: var(--color5);
    font-weight: 700;
    &:hover{
        color: var(--color1);
    }
    &:active{
        background-color: var(--color1);
        color: var(--color4);
    }
`













