import { Link } from "react-router-dom";
import styled from "styled-components";




export const ContCardServicios = styled.div`
    /* border: 1px solid red;//............. */
    /* width: 90%; */
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    @media (max-width:1270px) {
        max-width:660px;
        width: 100%;
    }
`
export const CardServicios = styled.div`
    /* border: 1px solid blue;//....................... */
    width: clamp(223px, 25vw, 492px);
    height: clamp(200px, 28vw, 371px);
    border-radius: 30px;
    margin-bottom: 1.7em;
    background-color: var(--color5);
    -webkit-box-shadow: 5px 10px 20px -1px rgba(0,0,0,0.6); 
    box-shadow: 5px 10px 20px -1px rgba(0,0,0,0.6);
    @media (max-width:500px) {
        width: 70%;
    }
`
export const ContImage = styled.div`
    /* border: 1px solid red;//................... */
    height: 70%;
    border-radius: 30px 30px 0 0;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }
` 
export const ContLink = styled(Link)`
    text-decoration:none;
    
div{
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color4);
    border-radius: 0 0 30px 30px;
    transition: 30ms;
    &:hover{
    color: var(--color1);
    }
    &:active{
        background-color: var(--color7);
    }
}
p{
    font-size: clamp(10px,1.5vw,26px);
    font-weight: 700;
    color: var(--color5);
    text-align: center;
}
    
svg{
    font-size: 3vw;
    color: var(--color1);
    margin-left: 1rem;
    @media(max-width:700px){
        font-size: 20px;
    }
}
`
