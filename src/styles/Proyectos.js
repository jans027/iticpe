import styled from "styled-components";

export const TitleSectionPro = styled.div`
    /* border: 1px solid red;//........................ */
    text-align: center;
    margin: 43px 0 0 0;
    @media (max-width:1270px) {
        display: none;
    }
    p{
        font-size: 3.1vw;
        font-weight: 900;
    }
`
export const ContCardProyect = styled.div`
    /* border: 1px solid red;//.................... */
    /* width: 88%; */
    margin: auto;
    .Cont_slider_proyects{
        display: none;
        @media (max-width:890px) {
            display: block;
        }
    }
    @media (max-width:1270px) {
        width:75%
    }
    @media (max-width:1060px) {
        width:80%
    }
    @media (max-width:890px) {
        width:100%
    }
`
export const ContCardProyecto = styled.div`
    /* border: 1px solid red;//.................... */
    display: flex;
    margin: auto;
    width: 90%;
    margin-bottom: 30px;
    &:nth-child(even){
        flex-direction: row-reverse;
        @media (max-width:726px) {
        flex-direction: column;
        
        }
    }
    @media (max-width:726px) {
        flex-direction: column;
        
    }
`
export const ContTextP = styled.div`
    /* border: 1px solid red;//.................... */
    width: 50%;
    padding:  0 1rem;
    height:auto;
    background-color: var(--color5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    .text_card_1{
        font-size: 2em;
        font-weight: 800;
        margin-bottom: .5em;
    }
    .text_card_2{
        font-size: 1.2em;
    }
    @media (max-width:726px) {
        height:auto;
        width: 100%;
        text-align: center;
        padding: 1rem;
    }
`
export const ContImgCardP = styled.div`
    /* border: 1px solid red;//.................... */
    width: 50%;
    height:18em;
    overflow: hidden;
    img{
        height:auto;
        width: 100%;
        object-fit: cover;
        object-position: center center;
    }
    @media (max-width:726px) {
        width: 100%;
        
    }
`



















