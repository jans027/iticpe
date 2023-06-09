import React, { useEffect, useState } from 'react'
import { data } from '../data/data';
import { SubTitleSection, TitleSection } from '../styles/SecAcreditaciones';
import { ConSectionServicios, ContMapa, ContTexto1, ContTexto2 } from '../styles/SectionServicios';
import { ConSectionExperiencia, Separador } from '../styles/SliderExperiencia';
import SliderExperiencias from './SliderExperiencia';
import MapaPer from './MapaPer';



const SecExperiencia = (props) => {

    // get data
    const [datos] = data;
    const { empresa: { dropDownMenu: { proyectos: { nameSecction, banner1,
            textMap: { text1, text2, text3, text4, text5 } } } } } = datos;
    // console.log(nameSecction, subTitle)

    const [isVisible, setIsVisible] = useState(false);

    function handleScroll() {
        const image = document.querySelector('.image');
        const top = image.getBoundingClientRect().top;
        const bottom = image.getBoundingClientRect().bottom;

        if (top < window.innerHeight && bottom >= 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        const image = document.querySelector('.image');

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



    return (
        <>
            <ConSectionExperiencia>
                <TitleSection>{nameSecction}</TitleSection>
                <ContMapa>
                    <ContTexto1>
                        <p className='text_title'>{text1}</p>
                    </ContTexto1>
                    <img isVisible={isVisible} className='image' src={require(`../images/${banner1}`)} alt={banner1} />
                    <ContTexto2>
                        <p className='countries'>{text2}</p>
                        <p className='text2'>{text3}</p>
                    </ContTexto2>
                </ContMapa>
                <Separador />
                <MapaPer/>
                <SliderExperiencias />
            </ConSectionExperiencia>

        </>
    )
}

export default SecExperiencia;