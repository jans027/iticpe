import styled from "styled-components";


export const ConContacBar = styled.div`
    /* border: 1px solid red;//....................... */
    background-color: var(--color1);
    width: 100%;
    height: 6.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width:1170px) {
        flex-direction: column;
        height: max-content;
        text-align: center;
        padding: 1em;
        .textTitleBar{
            padding-bottom: 1.3vw;
            text-align: center;
            max-width: 85%;
        }
    }
    .textTitleBar{
        /* border: 1px solid red;//....................... */
        font-size:clamp(18px, 1.3vw, 23px);
        font-weight: 600;
    }
    a{
        text-decoration: none;
        div{
            border: 1px solid var(--color4);
            background-color: var(--color4);
            width:clamp(314px, 28vw, 536px);
            height: clamp(40px, 4vw, 51px);
            border-radius: 1.6rem;
            display: flex;
            justify-content:center;
            align-items: center;
            &:active{
                    background-color: var(--color7);
            }
            p{
                font-size: clamp(25px, 1.7vw, 30px);
                font-weight: 600;
                color: var(--color5);
                &:hover{
                    color: var(--color1);
                }
                
            }
        }
    }
`






















