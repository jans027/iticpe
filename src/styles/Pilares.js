import styled from "styled-components";


export const TitleP = styled.div`
    /* border: 1px solid green;//.................. */
    width: 100%;
    font-size: clamp(25px, 3.3vw, 57px);
    font-weight: 900;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ConCardsPi = styled.div`
    /* border: 1px solid green;//.................. */
    background-color: var(--color2);
    width: 90%;
    padding: 1em 0;
    margin: auto;
    /* flex-direction: column; */
    align-items: center;
    @media (max-width:568px) {
        display: flex;
        flex-direction:column;
    }
    @media (max-width:1270px) {
        width: 90%;
        margin: auto;
    }
`
export const CardsPi = styled.div`
    /* border: 1px solid blue;//.................. */
    width: 100%;
    height: auto;
    display: flex;
    background-color: var(--color3);
    margin-bottom: 2rem;
    @media (max-width:568px) {
        flex-wrap:wrap;
        height: 600px;
        width: 318px;
    }
    &:nth-child(even){
        flex-direction: row-reverse;
        background-color: var(--color1);
    }
    

`
export const ConImgPi = styled.div`
    /* border: 1px solid red;//................. */
    width: 50%;
    overflow: hidden;
    @media (max-width:568px) {
        height:50%;
        width: 100%;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position:center center;
    }
`
export const ParagraphPi = styled.div`
    /* border: 1px solid blue;//................. */
    width: 50%;
    display: flex;
    align-items: center;
    padding: 0 2.2vw;
    div{
    /* border: 1px solid blue;//................. */
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title_card{
        font-size: clamp(16px, 1.8vw, 40px);
        font-weight: 900;
        margin-bottom: 1rem;
    }
    .p_card{
        font-size: clamp(14px, 1.3vw, 27px);
    }
    }
    @media (max-width:568px) {
        padding: 1em;
        width: 100%;
        height:50%;
    }
`
export const ContCards2 = styled.div`
    /* border: 1px solid red;//.................... */
    background-color: var(--color2);
    /* width: 95%; */
    margin: 0!important;
    @media (max-width:740px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 2em;
    }
`
export const Cards02 = styled.div`
    /* border: 1px solid blue;//.................... */
    display: flex;
    background-color: var(--color2);
    margin: 3rem 0;
    width: 100%;
    @media (max-width:740px) {
        margin:0;
        width: 390px;
        height: 482px;
        flex-direction: column;
    }
    @media (max-width:450px) {
        width: 100%;
        margin-bottom: 16px;
    }
    &:nth-child(odd){
        flex-direction: row-reverse;
        @media (max-width:740px) {
        flex-direction: column;
        }
    }
`
export const ConImgP = styled.div`
    /* border: 1px solid blue;//.................... */
    width: 50%;
    /* height: 25rem; */
    overflow: hidden;
    @media (max-width:740px) {
            width: 100%;
            height: 50%;
        }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }
`
export const ConParagraphP =styled.div`
    /* border: 1px solid red;//.................... */
    width:50%;
    /* height: 25rem; */
    text-align: justify;
    padding: 1.5vw;
    @media (max-width:740px) {
            width: 100%;
            /* height: 50%; */
    }
    @media (max-width:450px) {
        padding: 1.5em;
        text-align: center;
        height: auto;
    }
    .title_p02{
        /* border: 1px solid red;//.................... */
        font-size: clamp(30px, 2.5vw, 57px);
        font-weight:900;
        padding-bottom: 1em;
    }
    .paragraph_p02{
        /* border: 1px solid blue;//.................... */
        font-size: clamp(16px, 1.2vw, 23px);
        text-align: left;
    }
`






