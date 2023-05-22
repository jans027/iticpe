import React, { useState } from 'react'
// import react router dom
import { Link } from 'react-router-dom';
//styles
import { ButtonCookie, ContInfo, ContModalCookie, TextInfo } from '../styles/Cookie';
//import cocuments
import PolíticaProtecciónDatos from '../documents/Política-de-protección-de-datos-ITICPE.pdf'


const Cookie = () => {

    // add duration time to cookie
    function setOneYearCookie(name, value) {
        const date = new Date();
        date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000)); // sets the expiration date at one year
        const expires = '; expires=' + date.toUTCString();
        document.cookie = name + '=' + value + expires + '; path=/';
    }

    // change style to container cookie.............
    const [display, setDisplay] = useState();

    //save data from cookie , session storage and change styled container
    const handleSetCookie = () => {
        setOneYearCookie('itic', 'datos de navegacion');// data cookie
        window.sessionStorage.setItem('myData', false); // data session storage (change styled)
        setDisplay('none'); // change styled
    };

    //get data from session storage (styled container)
    const myData = window.sessionStorage.getItem('myData');

    return (
        <>
            {myData === null ?
                <ContModalCookie style={{ display }}>
                    <span className='SubContCookie'>
                        <ContInfo>
                            <TextInfo>
                                <p className='titleCookie'>ESTE SITIO WEB UTILIZA COOKIES</p>
                                <p className='textCookie'>
                                INTERNATIONAL TESTING INSPECTION AND CERTIFICATION PERÚ S.A.C (en adelante, “ITICPE”), identificada con RUC N° 20451575989, ubicada en Av. Pardo y Aliaga Nro. 675 Int. 203, San Isidro, Lima; reconoce la importancia que tiene la privacidad de los datos personales de nuestros clientes, por ello, garantizamos la absoluta confidencialidad de los mismos y el empleo de estándares de seguridad conforme a lo establecido en la Ley de Protección de Datos Personales - Ley N° 29733 y su Reglamento aprobado por el Decreto Supremo N° 003-2013-JUS (en adelante, “las normas de protección de datos personales”).<br/>

                                ITICPE es el primer responsable del tratamiento de datos de su información personal. Los principios que se fijan en nuestra Política de Privacidad  que se aplican a todos los responsables del tratamiento de datos de ITICPE y se encuentra disponibles en 
                                </p>
                                <Link target='_blank' to={PolíticaProtecciónDatos}>Ver Política de protección de datos</Link>
                                <br /><br />
                            </TextInfo>
                            <ButtonCookie type='submit' onClick={handleSetCookie}>Aceptar</ButtonCookie>
                        </ContInfo>
                    </span>
                </ContModalCookie>
                :
                ''
            }
                
            
        </>
    )
}

export default Cookie