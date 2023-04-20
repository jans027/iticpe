import React, { useEffect, useState } from 'react'
//importv data
import { data } from '../data/data';
//styles
import { ContMapa, ContTexto1, ContTexto2 } from '../styles/SectionServicios';


const MapaPer = (props) => {

    // get data
    const [datos] = data;
    //destructuring data
    const { empresa: { dropDownMenu: { proyectos: { banner2, textMap: { text3, text4, text5 } } } } } = datos;

    const [isVisible, setIsVisible] = useState(false);
    // console.log(isVisible)

    //animation............................................
    function handleScroll() {
        const image = document.querySelector('.image2');
        const top = image.getBoundingClientRect().top;
        const bottom = image.getBoundingClientRect().bottom;

        if (top < window.innerHeight && bottom >= 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        const image = document.querySelector('.image2');

        if (isVisible) {
            image.classList.add('animate');
        } else {
            image.classList.remove('animate');
        }
    }, [isVisible]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    //animation............................................



    return (
        <>
            <ContMapa>
                <ContTexto1>
                    <p className='text_title'>{text4}</p>
                </ContTexto1>
                <img className='image2' src={require(`../images/${banner2}`)} alt={banner2} />
                <ContTexto2/>
            </ContMapa>
        </>
    )
}

export default MapaPer;