import styled from "styled-components";

export const ButtonTop = styled.button`
    border: 1px solid red;//..................
    position: fixed;
    bottom: 20px;
    right: 10px;
    border: none;
    border-radius: 50%;
    background-color: #333;
    color: #fff;
    font-size: 24px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: opacity 1s linear;
    z-index: 999;
    @media (max-width:600px) {
        width: 40px;
        height: 40px;
    }
    svg{
        font-size: 30px;
        color: var(--color1);
    }
    &:hover{
        opacity: 0.8;
    }
`















