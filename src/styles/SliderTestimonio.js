import Slider from "react-slick";
import styled from "styled-components";



// styles slider and arrow testimonio
export const ConSliderExp = styled(Slider)`
    /* border: 1px solid red;//.................. */
    
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
        left: -15px;
        z-index: 1;
        
    }
    .slick-next{
        right: -15px;
        z-index: 1;
        
    }
`
export const ContCardTestimonio = styled.div`
    /* border: 1px solid green;//..................... */
    /* width: clamp(313px, 27vw, 486px); */
    height: auto;
    display: flex!important;
    justify-content: center;
    
`
export const CardsTestimonio = styled.div`
    /* border: 1px solid blue;//................... */
    margin-top: 1rem!important;
    margin-bottom: 1rem!important;
    width: clamp(290px, 27vw, 486px);
    height: auto;
    padding: 1.5em;
    border-radius: 30px;
    background-color: var(--color5);
    -webkit-box-shadow: 15px 14px 3px -8px rgba(0,0,0,0.2); 
    box-shadow: 15px 14px 3px -8px rgba(0,0,0,0.2);
    .ContCarExp1{
        /* border: 1px solid blue;//............ */
        display: flex;
        .ConImgCard{
            width: 34%;
            height: 110px;
            border: 1px solid black;
        }
        .cardTitle1{
            /* border: 1px solid red;//............... */
            width: 66%;
            display: flex;
            padding-left:.5em;
            flex-direction: column;
            justify-content: center;
            
            p{
                text-align: left;
                /* line-height: 1.3vw; */
                &:nth-child(1){
                    font-size: 20px;
                    font-weight: 600;
                }
            }
        }
    }
    .ContCarExp2{
        /* border: 1px solid black;//............ */
        text-align: left;
        padding-top: 2rem;
        p{
            font-size: clamp(13px, 1vw, 18px);
        }
    }
`

