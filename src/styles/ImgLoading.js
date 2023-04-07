import styled, { keyframes } from "styled-components";


export const BannerLoading = styled.span`
    width: 100%;
    height: 600px;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoadingAnimation = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
`

export const BannerLoadingSpinner = styled.span`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #eee;
    overflow: hidden;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background-color: #aaa;
        animation: ${LoadingAnimation} 2s ease-in-out infinite;
    }
`