import styled from "styled-components";


export const ConBtnFloat = styled.div`
/* border: 1px solid red;//....................... */
    position:fixed;
    width:8vw;
    min-width: 3.5em;
    right: 0;
    border-radius: 4em 0 0 4em;
    bottom: 10vw;
    cursor: pointer;
    transition: 30ms;
    z-index: 1000;
    display: flex;
    padding-top:.1em;
    overflow: hidden;
    background-color: var(--color4);
    @media (max-width:600px) {
        bottom: 35vw;
    }
    a{
        padding: .5vw;
        float: right;
    }
    img{
        width: 4vw;
        min-width: 38px;
        &:hover{
        transform: scale(1.1);
        
        }
        &:active{
            transform: scale(.99);
        }
    }
    
`