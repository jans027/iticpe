import styled from "styled-components";


export const CardAcred = styled.div`
    /* border: 1px solid red;//.................... */
    margin: 1em 0;
    width: 17vw!important;
    min-width: 200px;
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
        font-size: 1.1vw;
        line-height: 1.3em;
        /* border: 1px solid red;//............... */
        @media(max-width:950px){
            font-size: 14px;
            }
        }
    }
    img{
        width: 90%;
        margin: auto;
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
export const TitleSection = styled.h1`
        font-size: clamp(28px, 3.8vw, 70px);
        font-weight: 900;
        padding:1rem 0 1rem 0;
        @media(max-width:710px){
            font-size: 8vw;
            width: 90%;
            margin: auto;
        }
` 
export const SubTitleSection = styled.p`
    /* border: 1px solid red;//........................ */
    width: 90%;
    margin: auto;
    font-size: clamp(16px, 1.6vw, 30px);
    padding: 1rem 0 3rem 0;
    font-weight: 300;
    span{
        font-size: clamp(16px, 1.6vw, 32px);
    }
    @media(max-width:600px){
        padding:0 0 20px 0;
        width: 88%;
        height: auto;
    }
`
// stiles slider and arrow
export const ContSliderAcr = styled.div`
    /* border: 1px solid red;//...................... */
    width: 92%;
    margin: auto;
    height: auto;
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
        right: 10px;
        z-index: 1;
        @media(min-width:830px){
            right: -10px;
        }
    }
`















