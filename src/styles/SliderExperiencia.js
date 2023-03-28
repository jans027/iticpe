import Slider from "react-slick";
import styled from "styled-components";

export const ConSectionExperiencia = styled.div` 
    /* border: 1px solid red;//....................... */
    background-color: var(--color2);
    text-align: center;
    /* margin: 2rem 0; */
    height: max-content;
    padding: 2rem 0 0 0;
`
export const ContSection = styled.section`
    /* border: 1px solid red;//........................ */
    width: 100%;
    background-color: var(--color3);
`
export const ConSliderExp2 = styled(Slider)`
    /* border: 1px solid red;//...................... */
    height: auto;
    width: 90%;
    margin: auto;
    .global-card-slider{
        width: clamp(275px, 25vw, 25vw)!important;
    }
    .sub_cont_card2{
        /* border: 1px solid red;//...................... */
        display: flex!important;
        justify-content: center;
    }
    .slick-slider{
        margin: auto;
        /* border: 1px solid red;//...............*/
    }
    .slick-prev, .slick-next{
        /* border: 1px solid red;//............... */
        width: 40px!important;
        height: 100%;
        font-size: 10px!important;
    }
    .slick-prev::before, .slick-next::before{
        color: var(--color1)!important;
        font-size: 40px!important;
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
export const ContCardExperiencia2 = styled.div`
    /* border: 1px solid red;//...................... */
    margin-bottom: 1em;
    width: 100%!important;
    height: auto;
    border-radius: 30px;
    padding-top: 1.3rem;

`
export const CardExperiencia2 = styled.div`
    /* border: 1px solid red;//...................... */
    border-radius: 30px;
    width: 100%!important;
    height: 100%;
    a{
            text-decoration: none;
            color: var(--color4);
            
        }
    div{
        overflow: hidden;
        border-radius: 30px 30px 0 0;
        img{
            width: 100%;
            object-fit: cover;
            object-position: center center;
        }
        
    }
    .cardTitle{
        p{
            font-weight:900;
            padding: 1em 0 0 1em;
            font-size: clamp(16px, 1.6vw, 1.6vw);
        }
    }
    .cardText{
        padding: 1em;
        p{
            font-weight:10px;
            font-size: clamp(14px, 1.6vw, 20px);
            padding: 0 .6em;
            &:nth-last-child(1){
                font-weight: 600;
                font-size: 17px;
            }
            /* text-align: justify; */
        }
    }
`
export const Separador = styled.hr`
    border: 1px solid var(--color1);
    width: 90%;
    margin: auto;
`

























