import Slider from "react-slick";
import styled from "styled-components";


// styles slider and arrow logos
export const ContSlideLogoExp = styled(Slider)`
    /* border: 1px solid red;//.................. */
    width: 90%;
    margin: auto;
    margin-top: 1.2em;
    margin-bottom:2em;
    .slideCont2{
        /* border: 1px solid red;//............... */
        width: 90%;
        height: auto;
        margin: 0 auto;
    }
    .slick-slider{
        margin: auto;
        /* border: 1px solid red;//...............*/
    }
    .slick-prev, .slick-next{
        border: 1px solid red;//...............
        width: 40px!important;
        height: 100%;
        font-size: 10px!important;
        display: none!important;
    }
    .slick-prev::before, .slick-next::before{
        /* border: 1px solid red;//............... */
        color: var(--color2)!important;
        font-size: 40px!important;
        opacity: .5;
    }
    .slick-prev{
        left: -15px;
        z-index: 1;
        
    }
    .slick-next{
        right: -20px;
        z-index: 1;
        
    }
`
export const CardLogoExp = styled.div`
    &{
        /* border: 1px solid red;//.................. */
        text-align: center;
        width: 100%;
        height: 100%;
        display: flex!important;
        justify-content: center;
    }
`
export const CardCarouselLogoExp = styled.div`
    /* border: 1px solid red;//..................... */
    width: 140px;
    height: auto;
    display: flex!important;
    justify-content: center!important;
    align-items: center!important;
    border-radius:50%;
    overflow: hidden;
    @media (max-width:500px) {
        width: 100px;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }
`