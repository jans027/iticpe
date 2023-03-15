import React from 'react'
import { data } from '../data/data';
import {  ContSliderAcr, SubTitleSection, TitleSection } from '../styles/SecAcreditaciones';
import { ConSectionServicios } from '../styles/SectionServicios';
import SliderExperiencias from './SliderExperiencia';


const SecExperiencia = () => {

    // get data
    const [datos] = data;
    const { empresa: { dropDownMenu: { proyectos: { nameSecction, subTitle } } } } = datos;
    // console.log(nameSecction, subTitle)


    return (
        <>
            <ConSectionServicios>
                <TitleSection>{nameSecction}</TitleSection>
                <SubTitleSection>{subTitle}</SubTitleSection>

                    <SliderExperiencias/>

            </ConSectionServicios>

        </>
    )
}

export default SecExperiencia;