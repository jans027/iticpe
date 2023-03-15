import styled from "styled-components";



export const ConNosotros = styled.div`
    /* border: 2px solid green;//.................... */
    width: 72%;
    background-color: var(--color2);
    margin-bottom: 4.1rem;
    @media (max-width:1270px) {
        width: 100%;
        padding: 0;
        margin-bottom: 0;
    }
`
export const ContNumber1 = styled.div`
    /* border: 2px solid green;//.................... */
    background-color: var(--color2);
    height: max-content;
    padding: 5%;
    @media (max-width:800px) {
        padding: 1em;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
    }
    div{
    /* border: 2px solid green;//.................... */
    width: clamp(225px, 17vw, 384px);
    height: clamp(225px, 17vw, 384px);
    overflow: hidden;
    margin: 0 1.8em 0 1.4em;
    float: right;
    @media (max-width:800px) {
        float: none;
    }
    img{
        height: 100%;
        object-fit: cover;
        object-position: center center;
        border-radius: 50%;
        
        }

    }
    .title_section{
        font-size: 3.7vw;
        font-weight: 900;
        line-height: 1.1em;
        margin-bottom: .5em;
        @media (max-width:1270px) {
            display: none;
        }
    }
    .paragraph_section{
        width:100%;
        font-size: clamp(14px, 1.3vw, 25px);
        margin-bottom: .8em;
        @media (max-width:800px) {
                margin-top: 16px;
            }
    }
`
export const TitleSection = styled.div`
    /* border: 2px solid green;//.................... */
    text-align:center;
    background-color: var(--color2);
    p{
        font-size: clamp(25px,3vw, 57px);
        font-weight: 900;
    }
`
export const ConCards = styled.div`
    /* border: 1px solid red;//.................. */
    background-color: var(--color2);
    width: 90%;
    padding: 1.5em 0;
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
export const Cards = styled.div`
    /* border: 1px solid blue;//.................. */
    width: 100%;
    height: 24vw;
    min-height: 250px;
    display: flex;
    background-color: var(--color3);
    margin-bottom: 2rem;
    @media (max-width:568px) {
        flex-wrap:wrap;
        height: 450px;
        width: 318px;
    }
    &:nth-child(even){
        flex-direction: row-reverse;
        background-color: var(--color1);
    }
    

`
export const ConImg = styled.div`
    /* border: 1px solid red;//................. */
    width: 47%;
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
export const Paragraph = styled.div`
    /* border: 1px solid blue;//................. */
    width: 53%;
    padding: 2.5vw 2.2vw;
    div{
        /* border: 1px solid blue;//................. */
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title_card{
        font-size: clamp(20px,2.2vw, 45px);
        font-weight: 900;
        margin-bottom: 1rem;
    }
    .p_card{
        font-size: clamp(14px, 1.3vw, 25px);
    }
    }
    @media (max-width:568px) {
        padding: 1em;
        width: 100%;
        height:50%;
    }
`
export const MenuMobileNos = styled.div`
        /* border: 1px solid red;//....................... */
        display: none;
        background-color: var(--color4);
        a{
            text-decoration: none;
            color: var(--color1);
            div{
                /* border: 1px solid red;//....................... */
                height: 52px;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                font-weight: 800;
            }
        }
        @media (max-width:1270px) {
            display: block;
        }
`
export const MobileTitle = styled.div`
    background-color: var(--color1);
    height: 52px;
    color: var(--color4);
    display: none;
    p{
        font-weight: 800;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (max-width:1270px) {
            display: block;
        }
`








