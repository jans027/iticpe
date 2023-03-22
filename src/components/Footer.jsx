import React from 'react'
import { Link } from 'react-router-dom';
import { data } from '../data/data';
// icons
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
//styles
import { AccordionFooter, AddressFooter, BlockNav, BtnFooter, ConAccordion, ConEmprFooter, ConServFooter, ConsultasFooter, ContFooter, ContUlPoliticas, Copy, EnlaceDesplegable, LinkConsulta1, LinkConsultaMovile, LogoFooter, Redes, TitleAccor } from '../styles/Footer';
//Documents
import datos_personales from '../documents/1.-POLITICA-DE-PROTECCION-DE-DATOS-PERSONALES.pdf'; 
import politica_calidad from '../documents/Politica-de-calidad.pdf'; 
import politica_seguridad from '../documents/Politica-de-gestion-integral-salud-seguridad-y-ambiente-HSE.pdf'; 
import politica_confidencialidad from '../documents/ITIC-C-NA-DI-003-POLITICA-DE-IMPARCIALIDAD-INDEPENDENCIA-Y-CONFIDENCIALIDAD-V7.pdf'; 



// Images
import LogFooter from '../images/Logo-iticpe-blanco.svg';
import ModalForm from './ModalForm';
import MenuMobile from './MenuMobile';
//Acordion
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Footer = () => {

    // get data
    const [datos] = data;
    // destructuring data
    const {
        inicio,
        servicios,
        empresa,
        consulta,
        cotizacion,
        contacto,
        politicas
    } = datos;
    const serviciosSub = Object.values(servicios.dropDownMenu);
    const empresasSub = Object.values(empresa.dropDownMenu);
    // console.log(politicas)




    return (
        <footer className='footer'>

            <ContFooter>

                <LogoFooter>
                    <div>
                        <img src={LogFooter} alt="logoItic" />
                    </div>
                </LogoFooter>

                <BlockNav>

                    <ConEmprFooter>
                        <h3>{empresa.name}</h3>
                        {
                            empresasSub.map((item) =>
                                <ul
                                    id="droppin"
                                    key={item.id}
                                >
                                    <li
                                        key={item.nameFooter}
                                        // onClick={(e) => handleClick(e)}
                                        id={item.nameFooter}
                                    >
                                        <Link to={item.url}>{item.nameFooter}</Link>
                                    </li>
                                </ul>
                            )
                        }
                    </ConEmprFooter>

                    <ConServFooter>
                        <h3>{servicios.name}</h3>
                        {
                            serviciosSub.map((item) =>
                                <ul
                                    id="droppin"
                                    key={item.id}
                                >
                                    <li key={item.nameFooter} id={item.nameFooter}>
                                        <Link to={item.url}>{item.nameFooter}</Link>
                                    </li>
                                </ul>
                            )
                        }
                    </ConServFooter>

                    <ContUlPoliticas>
                        <h3>{politicas.name}</h3>
                        <li>
                            <a target="_blank"  href={datos_personales} rel="noreferrer">
                                Política de protección <br /> de datos personales
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href={politica_calidad} rel="noreferrer">
                                Política de la calidad <br /> (servicios industriales)
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href={politica_seguridad} rel="noreferrer">
                                Política de gestión integral salud, <br /> seguridad y ambiente (HSE)
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href={politica_confidencialidad} rel="noreferrer">
                                ITIC-C-NA-DI-003 política de imparcialidad <br /> independencia y confidencialidad 
                            </a>
                        </li>
                        <br />
                        <br />
                        <BtnFooter to={politicas.url}><div>{politicas.btn}</div></BtnFooter>
                    </ContUlPoliticas>

                    {/* .................................................................... */}

                    <ConAccordion>
                        <AccordionFooter>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <TitleAccor>{empresa.name}</TitleAccor>
                            </AccordionSummary>
                            <AccordionDetails>
                                <EnlaceDesplegable>
                                    {
                                        empresasSub.map((item) =>
                                            <ul
                                                id="droppin"
                                                key={item.id}
                                            >
                                                <li
                                                    key={item.nameFooter}
                                                    // onClick={(e) => handleClick(e)}
                                                    id={item.nameFooter}
                                                >
                                                    <Link to={item.url}>{item.nameFooter}</Link>
                                                </li>
                                            </ul>
                                        )
                                    }
                                </EnlaceDesplegable>
                            </AccordionDetails>
                        </AccordionFooter>

                        <AccordionFooter>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <TitleAccor>{servicios.name}</TitleAccor>
                            </AccordionSummary>
                            <AccordionDetails>
                                <EnlaceDesplegable>
                                    {
                                        serviciosSub.map((item) =>
                                            <ul
                                                id="droppin"
                                                key={item.id}
                                            >
                                                <li key={item.nameFooter} id={item.nameFooter}>
                                                    <Link to={item.url}>{item.nameFooter}</Link>
                                                </li>
                                            </ul>
                                        )
                                    }
                                </EnlaceDesplegable>
                            </AccordionDetails>
                        </AccordionFooter>

                        <AccordionFooter>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel2a-header"
                            >
                                <TitleAccor>{politicas.name}</TitleAccor>
                            </AccordionSummary>
                            <AccordionDetails>
                                <EnlaceDesplegable>
                                    <ul>
                                        <li>
                                            <a target="_blank" href={datos_personales} rel="noreferrer">
                                                Política de protección <br />de datos personales
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href={politica_calidad} rel="noreferrer">
                                                Política de la calidad <br />(servicios industriales)
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href={politica_seguridad} rel="noreferrer">
                                                Política de gestión integral salud, <br />seguridad y ambiente (HSE)
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href={politica_confidencialidad} rel="noreferrer">
                                                ITIC-C-NA-DI-003 política de imparcialidad <br /> independencia y confidencialidad
                                            </a>
                                        </li>
                                        <li>
                                            <BtnFooter to={politicas.url}><div>{politicas.btn}</div></BtnFooter>
                                        </li>
                                    </ul>
                                </EnlaceDesplegable>
                            </AccordionDetails>
                        </AccordionFooter>
                        
                        <LinkConsultaMovile>
                            <div><Link to={consulta.url}><ModalForm /></Link></div>
                            {/* <div><Link to={cotizacion.url}>{cotizacion.name}</Link></div> */}
                        </LinkConsultaMovile>
                    </ConAccordion>

                    {/* .................................................................... */}

                    <ConsultasFooter>
                        <LinkConsulta1>
                            <div><Link to={consulta.url}><ModalForm /></Link></div>
                            {/* <div><Link to={cotizacion.url}>{cotizacion.name}</Link></div> */}
                        </LinkConsulta1>
                        <AddressFooter>
                            <p>{contacto.name}</p>
                            <Link to={contacto.url}><PersonOutlineOutlinedIcon />{contacto.nameFooter}</Link>
                            <span className='address' ><EmailOutlinedIcon /><Link to={`mailto:${inicio.email}`}>{inicio.email}</Link></span>
                            <span className='address' ><PhoneAndroidOutlinedIcon />{inicio.phone}</span>
                            <span className='address' ><LocationOnOutlinedIcon />{inicio.address}</span>
                            <span className='building'>{inicio.addressBuilding}</span>
                        </AddressFooter>
                    </ConsultasFooter>
                </BlockNav>

                <Redes>
                    <h3>SÍGUENOS</h3>
                    <Link target="_blank" to={inicio.facebookUrl}><FacebookIcon /></Link>
                    <Link target="_blank" to={inicio.instagramUrl}><InstagramIcon /></Link>
                    <Link target="_blank" to={inicio.twitterUrl}><TwitterIcon /></Link>
                    <Link target="_blank" to={inicio.linkedInUrl}><LinkedInIcon /> </Link>
                </Redes>

                <Copy><p>&copy; 2023 ITIC. Todos los derechos reservados. - </p> <Link to='/Politicas de Navegacion'> Políticas de navegación</Link></Copy>

            </ContFooter>

        </footer>
    )
}

export default Footer