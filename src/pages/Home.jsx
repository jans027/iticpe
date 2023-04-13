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
        <>
            <Helmet>
                <title>ITICPE Peru – Comprometidos con la integridad de nuestros servicios.</title>
                <meta name="Certificaciones" content="A través de nuestros servicios de inspección, ponemos a disposición de los clientes toda nuestra experticia y experiencia técnica para ser sus ojos en el lugar del mundo que lo requieran y de esta manera garantizar la calidad en sus procesos y evitar pérdidas de tiempo y dinero." />
            </Helmet>
            <SimpleSlider />
            <h1>ITICPE Peru – Comprometidos con la integridad de nuestros servicios</h1>
            <SectionServicios />
            <SecAcreditaciones />
            <SecEnfoque />
            <SecExperiencia />
            <SliderLogo />
            <SecContactanos />
        </>
    )
}

export default Home