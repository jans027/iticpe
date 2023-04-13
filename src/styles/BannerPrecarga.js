import styled from "styled-components"



export const ContBanner = styled.div`
    width: 100%;
    height: 31vw;
    background-color: var(--color2);
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:1100px) {
        top: 78px;
    }
    @media (min-width:481px) and (max-width:960px) {
        height: 25rem;
    }
    @media (max-width:481px) {
        height: 400px;
    }
`