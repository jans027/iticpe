import React from 'react'
import styled from 'styled-components'
import img from '../images/enCons.jpg'

const PageInConstruction = () => {

    const StylePage = styled.div`
        width: 100%;
        height: auto;
        /* margin-top: 8.5em; */
        overflow: hidden;
        @media (max-width:1100px) {
            height: 92vh;
        }
        
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
        }
    `
    return (
        <>
            <StylePage>
                <img src={img} alt="Pagina en Construccion" />
            </StylePage>
        </>
    )
}

export default PageInConstruction