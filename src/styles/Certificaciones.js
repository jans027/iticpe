import styled from "styled-components";
import { CardAcredt } from "./Acreditaciones";

export const TitleCertf = styled.div`
    /* border: 1px solid red;//....................... */
    font-size: 3.5rem;
    font-weight: 900;
    text-align: center;
    padding: 2.7rem 0;
    @media (max-width:1270px) {
            display: none;
        }
`
export const ContCardsCerti = styled.div`
    /* border: 1px solid blue;//....................... */
    display: flex;
    @media (max-width:1270px) {
        max-width: 833px;
        width: 80%;
        margin: auto;
        padding: 2em 0;
    }
    @media (max-width:910px) {
        display: none;
    }

    .ContCardsPrincipal{
        /* border: 1px solid blue;//....................... */
        width: 33.33%;
        display: flex;
        justify-content: center;
    }

`
export const CardCertificaciones = styled.div`
    /* border: 1px solid blue;//....................... */
    width: 80%;
    border-radius: 30px;
    padding-top: 1.3rem;
    background-color: var(--color5);
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 5px 10px 20px -1px rgba(0,0,0,0.6); 
    box-shadow: 5px 10px 20px -1px rgba(0,0,0,0.6);

    a{
        width: 100%;
        height: 15%;
        min-height: 40px;
        font-size: 1.5vw;
        font-weight: 700;
        text-decoration:none;
        display: flex;
        cursor: initial;
        align-items: center;
        justify-content: center;
        background-color: var(--color4);
        border-radius: 0 0 30px 30px;
        color: var(--color5);
        @media(max-width:700px){
            font-size: 16px;
        }
    }
`
export const ContImgCard = styled.div`
        /* border: 1px solid red;//............... */
        width: 100%;
        height: 85%;
        padding-bottom: 1em;
        display: flex;
        justify-content: center!important;
    img{
        width: 90%;
    }
`
export const ContCardsCertiMobile = styled.div`
    /* border: 1px solid green;//....................... */
    width: 100%;
    display: none;
    margin: auto;
    height: auto;
    @media (max-width:910px) {
        display: block;
        width: 92%;
        padding: 0 0 66px 0;
    }
    @media (max-width:630px) {
        width: 76%;
    }
    @media (max-width:380px) {
        width: 100%;
    }
    .cont_card_mobile_acred{
        /* border: 1px solid red;//....................... */
        display: flex!important;
        justify-content: center!important;
    }
    .slick-slider{
        /* border: 1px solid red;//...................... */
    }
    .slick-prev, .slick-next{
        width: 30px!important;

    }
    .slick-prev::before, .slick-next::before{
        /* border: 1px solid red;//............. */
        color: var(--color1)!important;
        font-size: 50px!important;
        opacity: 1!important;
        border-radius: 50%;
    }

    .slick-prev{
        left: -1px;
        z-index: 1;
        @media(min-width:830px){
            left: -30px;
        }
    }
    .slick-next{
        right: 18px;
        z-index: 1;
        @media(min-width:830px){
            right: -30px;
        }
    }
`
export const CardCertifMobile = styled.div`
    /* border: 1px solid red;//.................... */
    margin: 1em 0;
    width: 25vw!important;
    min-width: 250px;
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    padding-top: 1.3rem;
    .cardExperiencia{
        width: 480px;
        
    }
    -webkit-box-shadow: 15px 14px 3px -8px rgba(0,0,0,0.2); 
    box-shadow: 15px 14px 3px -8px rgba(0,0,0,0.2);
    background-color: var(--color5);
    img{
        /* border: 1px solid red;//............... */
        margin: 0 auto;
        width: 90%;
    }
    
    a{
        height: 15%;
        min-height: 40px;
        font-size: 1.5vw;
        font-weight: 700;
        text-decoration:none;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color4);
        border-radius: 0 0 30px 30px;
        color: var(--color5);
        @media(max-width:700px){
            font-size: 16px;
        }
    }
`














