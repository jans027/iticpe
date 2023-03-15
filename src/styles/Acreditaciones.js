import styled from "styled-components";


export const ConTitleAcred = styled.div`
    /* border: 1px solid red;//....................... */
    text-align: center;
    padding: 2.4rem 3.5rem 0 3.5rem;
`
export const TitleAcred = styled.div`
    font-size: 3.5rem;
    font-weight: 900;
    @media (max-width:1270px) {
            display: none;
        }
`
export const ContCardsAcred = styled.div`
    /* border: 1px solid red;//....................... */
    width: clamp(700px, 47vw, 870px);
    margin: auto;
    margin-bottom: 4em;
    display: flex;
    flex-wrap:wrap;
    padding: 10px 0;
    gap: 20px;
    justify-content: center;
    @media (max-width:1260px) {
        width: 70%;
        margin: auto;
    }@media (max-width:910px) {
        display: none;
    }
`
export const ContCardsAcredMobile = styled.div`
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
export const CardAcredMobile = styled.div`
    /* border: 1px solid red;//.................... */
    margin: 1em 0;
    width: 25vw!important;
    min-width: 250px;
    height: auto;
    border-radius: 30px;
    padding-top: 1.3rem;
    .cardExperiencia{
        width: 480px;
        
    }
    -webkit-box-shadow: 15px 14px 3px -8px rgba(0,0,0,0.2); 
    box-shadow: 15px 14px 3px -8px rgba(0,0,0,0.2);
    background-color: var(--color5);
    span{
        p{
        font-size: 1.3vw;
        line-height: 1.3em;
        padding: .5em;
        text-align: center;
        /* border: 1px solid red;//............... */
        @media(max-width:950px){
            font-size: 14px;
            }
        }
    }
    img{
        width: 100%;
    }
    
    a{
        height: 5vw;
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
export const CardAcredt = styled.div`
    /* border: 1px solid blue;//....................... */
    width: clamp(293px, 21vw, 330px);
    border-radius: 30px;
    padding-top: 1.3rem;
    background-color: var(--color5);
    text-align: center;
    -webkit-box-shadow: 5px 10px 20px -1px rgba(0,0,0,0.6); 
    box-shadow: 5px 10px 20px -1px rgba(0,0,0,0.6);
    @media (max-width:1400px) {
        
    }
    span{
        p{
        /* border: 1px solid red;//............... */
        font-size: 1.3vw;
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
        font-size: 1.5vw;
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



















