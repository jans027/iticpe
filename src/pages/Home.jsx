import React from 'react'
import { Helmet } from 'react-helmet'
import ButtonToTop from '../components/ButtonToTop'
import SecAcreditaciones from '../components/SecAcreditaciones'
import SecContactanos from '../components/SecContactanos'
import SecEnfoque from '../components/SecEnfoque'
import SecExperiencia from '../components/SecExperiencia'
import SectionServicios from '../components/SectionServicios'
import SimpleSlider from '../components/SliderBanner'
import SliderLogo from '../components/SliderLogo'


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ITICPE Peru – Comprometidos con la integridad de nuestros servicios.</title>
                <meta name="Certificaciones" content="Helmet application" />
            </Helmet>
            <SimpleSlider />
            <SectionServicios />
            <SecAcreditaciones />
            <SecEnfoque />
            <SecExperiencia />
            <SliderLogo />
            <SecContactanos />
        </div>
    )
}

export default Home