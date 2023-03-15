import { Link } from "react-router-dom";
import styled from "styled-components";
import ImgBanner from '../images/banner_2_desktop.png'




export const ContEnfoque = styled.div`
    /* border:2px solid red;//.................. */
    width: 100%;
    height:auto;
    background-image: url(${ImgBanner});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:1166px) {
        background-position: -22vh;
        
    }
`
export const ContTextEnfoque = styled.div`
        /* border:2px solid red;//.................. */
        width: 90%;
        height:auto;
        margin: clamp(36px, 3.3vw, 60px);
        display: flex;
        /* flex-grow: 1; */

        @media (max-width:1166px) {
            flex-direction:column;
            width: 95%;
        }
        .contEnfoque2{
            /* border:2px solid blue;//.................. */
            width: 35%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @media (max-width:1166px) {
                width: 100%;
                justify-content: space-evenly;
                .title{
                    margin-bottom: .7em;
                }
            }
            .title{
                font-size:clamp(40px, 4vw, 78px);
                font-weight: 900;
            }
            .subTitle{
                font-size:clamp(18px, 3vw, 52px);
                font-weight: 900;
                /* margin: 3rem 0; */
            }
        }
`
export const ContEnfoque3 = styled.div`
    width: 66%;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    @media (max-width:1160px) {
        width: 100%;
    }
    .ContParr{
        font-size: clamp(16px, 1.6vw, 30px);
        @media (max-width:1160px) {
            margin: 1em 0;
        }
    }
    
    .contEnfoque5{
        /* border:2px solid red;//.................. */
        display: flex;  
        justify-content: space-between;
        @media (max-width:890px) {
            flex-direction: column;
        }
        .cardsEnfoque{
            /* border:2px solid red;//.................. */
            display: flex;
            flex-direction: column;
            justify-content: end;
            align-items:center;
            height: 16vw;
            @media (max-width:1160px) {
                justify-content: flex-start;
                height: auto;
                margin-bottom: 1.4em;
            }
            span{
                /* border:2px solid red;//.................. */
                font-size:clamp(80px, 6vw, 150px);
                font-weight: 900;
            }
            svg{
                /* font-size:clamp(88px, 6vw, 150px); */
            }
            .cardText1{
                
                font-size:clamp(23px, 1.6vw, 32px);
                font-weight: 900;
            }
            .cardText2{
                font-size:clamp(20px, 1.5vw, 32px);
                font-weight: 600;
                padding: .2em .5em;
                border-radius: 13px;
                margin-top: 1em;
                border: 2px solid var(--color4);
                color: var(--color4);
                text-decoration: none;
                &:hover{
                    background-color:var(--color1);
                }
            }
            .cardText3{
                font-size:clamp(20px, 1.5vw, 32px);
                font-weight: 900;
            }
        }
    }
`
export const ImgCard = styled.img`
    /* border: 1px solid red;//........... */
    width: 7.2vw;
    @media (max-width:1200px) {
        width: 7.2em;
        
    }
`
export const BtnEnfoque1 = styled(Link)`
    text-decoration: none;
    font-size: clamp(20px, 1.4vw, 35px);
    font-weight: 700;
    color:var(--color5);
    display: block;
    @media (max-width:1166px) {
        display: none;
    }
    div{
        /* border:2px solid blue;//.................. */
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 60px;
        border-radius: 15px;
        background-color: var(--color4);
        border: 1px solid black;
    }
    &:hover{
    color: var(--color1);
    }
    &:active{
    background-color: var(--color7);
    }
`
export const BtnEnfoque2 = styled(Link)`
    /* border: 1px solid red;//...................... */
    display: none;
    margin: auto;
    text-decoration: none;
    margin-top: 1em;
    border-radius: 15px;
    background-color: var(--color4);
    div{
        width: 226pt;
        height: 32pt;
        font-size: 15pt;
        font-weight: 900;
        color: var(--color5);
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            color:var(--color1);
        }
        &:active{
            color: var(--color7);
        }
    }
    @media (max-width:1166px) {
        display: block;
    }
`










