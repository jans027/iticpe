import styled from "styled-components";


export const ContSlideLogo = styled.div`
    /* border: 1px solid red;//.................. */
    margin-bottom:3rem;
    .slideCont2{
        /* border: 1px solid red;//............... */
        width: 90%;
        height: auto;
        margin: 0 auto;
    }
    .slick-slider{
        /* border: 1px solid red;//...............*/
        margin: auto;
    }
    .slick-prev, .slick-next{
        /* border: 1px solid red;//...............*/
        width: 40px!important;
        height: 100%;
        font-size: 10px!important;
        display: none!important;
    }
    .slick-prev::before, .slick-next::before{
        color: var(--color2)!important;
        font-size: 50px!important;
        opacity: .5;
    }
    .slick-prev{
        left: -20px;
        z-index: 1;
    }
    .slick-next{
        right: -20px;
        z-index: 1;
    }
`
export const CardLogo = styled.div`
        /* border: 1px solid blue;//.................. */
        text-align: center;
        height:150px!important;
        display: flex!important;
        justify-content: center!important;
        align-items: center!important;
        @media (max-width:800px) {
            height:12vmax!important;
        }

`
export const CardCarouselLogo = styled.div`
    /* border: 1px solid red;//..................... */
    width: 150px;
    height: auto;
    display: flex!important;
    justify-content: center!important;
    align-items: center!important;
    border-radius:50%;
    overflow: hidden;
    @media (max-width:800px) {
            width:12vmax!important;
            height:12vmax!important;
        }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }
`
export const LinkExperiencia = styled.div`
        /* border: 1px solid red;//.............. */
        width: 100%;
        text-align: center;
        margin: 4rem 0 1em 0;
        a{
        padding: .5vw 2vw;
        font-size: 20px;
        text-decoration: none;
        font-weight: 600;
        color: var(--color5);
        background-color:var(--color4);
        border: 2px solid var(--color4);
        border-radius: 1rem;
        &:hover{
            color: var(--color1);
        }
        &:active{
            background-color: var(--color7);
            text-decoration: none;
            }
        }

`










