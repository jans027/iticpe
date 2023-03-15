import styled from "styled-components";


// stiles slider and arrow
export const ContcarouselPilares = styled.div`
    /* border: 1px solid blue;//...................... */
    display: none;
    width: 100%;
    margin: auto;
    @media (max-width:990px) {
        display: block;
    }
    @media (max-width:550px) {
        width: 95%;
    }
    .slick-slide{
        /* border: 1px solid red;//...................... */
    }
    .slick-prev, .slick-next{
        width: 30px!important;

    }
    .slick-prev::before, .slick-next::before{
        /* border: 1px solid red;//............. */
        color: var(--color1)!important;
        font-size: 30px!important;
        opacity: 1!important;
        border-radius: 50%;
        @media(min-width:435px){
            font-size: 50px!important;
        }
    }

    .slick-prev{
        left: -1px;
        z-index: 1;
        @media(max-width:435px){
            left: -8px;
        }
    }
    .slick-next{
        right: 20px;
        z-index: 1;
        @media(max-width:435px){
            right: -7px;
        }
    }
`
export const CardCarousel = styled.div`
    /* border: 1px solid red;//..................... */
    width: 100%;
    height: auto;
    margin: 1em 0;
    display: flex!important;
    justify-content: center!important;
    align-items: center!important;
`
export const Cards03 = styled.div`
    /* border: 1px solid red;//..................... */
    width: 300px!important;
    height: 491px;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.1em;
    -webkit-box-shadow: 2px 2px 7px 3px rgba(0,0,0,0.33); 
    box-shadow: 2px 2px 7px 3px rgba(0,0,0,0.33);
    background-color: var(--color5);
    img{
        border-radius: 50%;
        width: 150px;
        height: auto;
        border: 10px solid var(--color1);
    }
    .title_p01{
        font-size: 1.5em;
        font-weight: 900;
        margin: 1rem 0;
    }
    .paragraph_p01{
        /* border: 1px solid red;//.................. */
        font-size: clamp(14px, 1.1vw, 20px);
        text-align: left;
    }
`