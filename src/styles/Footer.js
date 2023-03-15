import { Accordion, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";



export const ContFooter = styled.div`
    margin-top: auto;
    width:100%;
    color: var(--color5);
    background-color: var(--color4);
    a{
        color: var(--color5);
    }
`
export const BlockNav = styled.div`
    /* border: 1px solid red;//................ */
    width: 90%;
    height:auto;
    margin: 0 auto;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    @media (min-width:601px) and (max-width:1070px) {
        flex-wrap:unset;
        justify-content: space-around;
    }
    h3{
        /* border: 1px solid white;//................ */
        font-size: clamp(22px, 1.5vw, 29px);
        padding: 0 0 23px 0;
    }
`
export const Copy = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 3vw;
    min-height: 47px;
    font-weight: 500;
    background-color: var(--color1);
    color: var(--color4);
    bottom: 0;
    a{
        font-size: 15px;
        color: var(--color4);
        text-decoration: none;
        font-weight: 500;
    }
    @media (max-width:600px) {
        padding: 1.3em;
        font-size: 13px;
        flex-direction: column;
        p{
            font-size: 12px;
        }
    }
`
export const Redes = styled.div`
    /* border: 1px solid red;//................. */
    width: 88%;
    margin: 0 auto;
    padding-bottom: 2.3em;
    @media (max-width:768px) {
        padding: .7em 0;
    }
    
    h3{
        font-size: 1.7rem;
        padding-bottom: 1.3rem;
    }
    svg{
        width: 2.5vw;
        height: max-content;
        margin-right:.5em;
        transition: 3ms;
        &:hover{
            color: var(--color1);
        }
        &:active{
            transform: scale(.95);
        }
    }
    @media (max-width:1071px) {
        h3{
            font-size: 17px;
        }
        svg{
            min-width: 30px;
        }
    }
`
export const ConEmprFooter = styled.div`
        width: 20%;
        @media (max-width:1070px) {
        display: none;
        }
    ul{
        li{
            list-style: none;
            padding: .5em 0;
            transition: 3ms;
            border-bottom: var(--color1) ;
            a{
                text-decoration:none;
                font-size: .9rem;
                font-weight: 500;
                line-height: 1.8rem;
                &:hover{
                    color: var(--color1);
                }
                &:active{
                    border-bottom: 1px solid var(--color1);
                    
                }
            }
        }
    } 
`
export const ConServFooter = styled.div`
        width: 21%;
        @media (max-width:1070px) {
        display: none;
        }
    ul{
        li{
            list-style: none;
            padding: .5em 0;
            transition: 3ms;
            border-bottom: var(--color1) ;
            a{
                text-decoration:none;
                font-size: .9rem;
                font-weight: 500;
                line-height: 1.8rem;
                &:hover{
                    color: var(--color1);
                }
                &:active{
                    border-bottom: 1px solid var(--color1);
                    
                }
            }
        }
    } 
`
export const LogoFooter = styled.div`
    /* border: 1px solid red;//............. */
    width:90%;
    padding: 3.5rem 0;
    margin: 0 auto;
    div{
        width:clamp(213px, 15%, 250px);
    }
`
export const AddressFooter = styled.span`
            /* border: 1px solid white;//................... */
        display: flex;
        flex-direction: column;
        @media (max-width:1070px) {
            border-bottom: 1px solid white;//...................
            margin-bottom: 4px;
        }
        a{
            display: flex;
            align-items: center;
            @media (max-width:768px) {
                padding-bottom:.7em;
            }
            svg{
                margin-right: 1em;
            }
        }
        span{
            /* border: 1px solid white;//................... */
            display: flex;
            align-items: center;
            font-size: 18px;
            
            svg{
                margin-right: 1em;
            }
        }
        .address{
            width: 100%;
            margin-bottom: 0;
            font-size: .9rem;
            @media (max-width:768px) {
                padding-bottom:.7em;
                font-size: 16px;
                &:nth-child(5){
                    padding-bottom:0em;
                }
            }
        }
        .building{
            padding-left:3em;
            font-size: .9rem;
            @media (max-width:768px) {
                font-size: 15px;
                padding-bottom:21PX;
            }
        }
`
export const ConsultasFooter = styled.div`
        /* border: 1px solid green;//............ */
        width: 26.5%;
        @media (max-width:768px) {
            max-width: 355px;
            width: 100%;
            height: auto!important;
        }
        @media (min-width:767px) and (max-width:1069px) {
            width: max-content;
        }
        p{
            font-size: .9em;
            font-weight: 600;
            padding: 1rem 0;
            @media (max-width:768px) {
                padding-top: 0;
                font-size: 18px;
            }
        }
        a{
            text-decoration:none;
            font-size: clamp(22px, 1vw, 30px);
            &:nth-child(2){
                font-size: .9rem;
            }
            &:hover{
                color: var(--color1);
            }
        }
        span{
            font-size: clamp(22px, 1.8vw, 32px);
            padding: .1rem 0;
        }
`
export const ContUlPoliticas = styled.ul`
    /* border: 1px solid green;//................... */
    width: 28%;
    margin-bottom: 2em;
    /* display: block; */
    @media (max-width:1070px) {
        display: none;
    }
    li{
        list-style: none;
        padding: .5em 0;
        transition: 3ms;
        border-bottom: var(--color1) ;
        padding: .6rem;
        a{
            text-decoration:none;
            font-size:.9rem;
            font-weight: 400;
            &:hover{
                color: var(--color1);
            }
            &:active{
                border-bottom: 1px solid var(--color1);
                
            }
        }
    }
`
export const LinkConsulta1 = styled.span`
div{
    @media (max-width:1070px) {
        border-bottom: 1px solid white;
        display: none;
        &:nth-child(even){
            padding: 12px 0 6px 0;
        }
    }
    a{
        font-size: clamp(22px, 1vw, 10px);
        font-weight: 600;
        display: flex;
        flex-direction: column;
        padding-bottom: 1.1rem;
        @media (max-width:1070px) {
            font-size: 17.5px;
            padding-bottom: .5em;
        }
    }
}
`
export const LinkConsultaMovile = styled.div`
    display: block;
    div{
        border-bottom: 1px solid white;
        margin: 16px 0;
        width: 100%;
    @media (min-width:1070px) {
        display:none;
    }
    @media (max-width:600px) {
        width: 100%;
    }
    a{
        text-decoration: none;
        font-size: 1.7rem;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        padding-bottom: 1.1rem;
        @media (max-width:1070px) {
            font-size: 17.5px;
            padding-bottom: .5em;
        }
    }
}
`
export const BtnFooter = styled(Link)`
    text-decoration: none;
    /* margin: 26px 0!important; */
    div{
        /* border: 1px solid red;//.......................... */
        width: 90%;
        height: 2.7vw;
        background-color:var(--color1);
        color: var(--color4)!important;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 900!important;
        border-radius: 1.5rem;
        text-align: center;
        @media (max-width:1490px) {
            height: 40px;
            font-size: 14px;
            font-weight: 400;
            width: 100%;
            /* margin: 5px 0; */
        }
        &:active{
        background-color:var(--color8);
        }
    }
`
// Accordion..........................
export const ConAccordion = styled.div`
    /* border: 1px solid red;//........................ */
    max-width: 350px;
    /* padding-bottom: 1em; */
    .MuiButtonBase-root{
        padding: 0!important;
        justify-content: flex-start;
    }
    .MuiAccordionSummary-content{
        /* border: 1px solid white;//.................. */
        max-width: 210px;
        min-width: 100px;
        flex-grow: unset;
        font: var(--Font)!important;
    }
`
export const AccordionFooter = styled(Accordion)`
    border-bottom: 1px solid white;//..................
    /* max-width: 350px!important; */
    display: none;
    background-color: black!important;
    color: white!important;
    padding: 0!important;
    p{
        font-weight: 700!important;
        font-family: var(--Font)!important;
    }
    svg{
        color: white;
    }
    @media (max-width:1070px) {
        display: block;
    }
    @media (max-width:600px) {
        width: 100%;
    }

`
export const EnlaceDesplegable = styled(Typography)`
    li{
        list-style: none;
        margin-bottom: 1em;
        a{
            /* border: 1px solid white;//.................. */
            text-decoration: none;
            font-weight: 300!important;
        }
    }
`
export const TitleAccor = styled(Typography)`
    /* border: 1px solid white;//.................. */
`