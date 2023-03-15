import styled from "styled-components";

export const ContModalCookie = styled.div`
    /* display:none; */
    width: 100%;
    height: auto;
    position: fixed;
    bottom: 0;
    background-color: var(--color4);
    z-index: 998;
    transition: linear;
    .SubContCookie{
        width: 100%;
        display: flex;
        justify-content: center;
    }
`
export const ContInfo = styled.div`
    /* border: 1px solid red;//..................... */
    width: 100%;
    max-width: 1200px;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width:1200px) {
        flex-direction: column;
        text-align: center;
    }
`
export const TextInfo = styled.button`
    /* border: 1px solid red;//..................... */
    color: var(--color5);
    background-color: var(--color4);
    border: none;
    text-align: justify;
    width: 70%;
    @media (max-width:1200px) {
        text-align: center;
        max-width: 650px;
        width: 95%;
    }
    .titleCookie{
        font-size: 20px;
        padding-bottom: .5em;
    }
    .textCookie{
        padding-bottom: .5em;
        font-size: 18px;
    }
    a{
        color: var(--color5);        
        font-size: 18px;
        margin-left:.9em;
    }
`

export const ButtonCookie = styled.button`
    max-width: 280px;
    width: 25%;
    padding: 0 1.6em;
    border-radius: 1em;
    height: 40px!important;
    font-size: 20px;
    font-weight: 700;
    cursor:pointer;
    border: none;
    @media (max-width:640px) {
        width: 75%;
        margin: .5em;
    }
    &:active{
        background-color: var(--color1);
    }
`

















