import styled from "styled-components";


export const ContAddress = styled.address `
    background-color: var(--color1);
    height: auto;
    display: flex;
    justify-content: center;
    padding: 1.4em;
    
    div{
        display: flex;
        font-size: 1.8vw;
        font-weight:500;
        height: min-content;
        font-style: normal;
        margin-right: 1.5em;
        @media (max-width:750px) {
            display: none;
            &:nth-last-child(1){
                /* border: 1px solid red;//............. */
                display: block;
                flex-direction:row;
            }
        }
        svg{
            font-size: 1.8vw;
            margin-top: .2em;
            @media (max-width:750px) {
                font-size: 18px;
            }
        }
        p{
            font-size: 1.8vw;
            @media (max-width:750px) {
                font-size: 18px;
            }
        }
    }
`
export const ContMap = styled.div `
    /* border: 5px solid red;//................... */
    width: 100%;
    height: clamp(200px, 30vw, 580px);

    #containerIframe{
        width: 100%;
        height: clamp(200px, 30vw, 580px);
        /* border: 5px solid red;//................... */
    }
`
