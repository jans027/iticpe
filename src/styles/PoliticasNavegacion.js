import styled from "styled-components";

export const ContPoliticas = styled.div`
    /* border: 1px solid red;//........................ */
    padding-top: 180px;
    padding-bottom: 3em;
    width: 85%;
    margin: 0 auto;
    @media (max-width:1100px) {
        padding-top: 120px;
    }
    @media (max-width:400px) {
        padding-top: 31vw;
        width: 95%;
    }
`
export const TitlePoliticas = styled.h1`
    /* border: 1px solid red;//.............................. */
    font-size: clamp(25px,3vw, 57px);
    font-weight: 900;
    padding: .5em 0;
`
export const TitleCard = styled.p`
    /* border: 1px solid red;//.............................. */
    padding: .5em 0;
    font-size: clamp(20px, 2vw, 40px);
    font-weight: 700;
`
export const ParagraphCard = styled.p`
    /* border: 1px solid red;//.............................. */
    font-size: clamp(14px, 1.5vw, 20px);
`






















