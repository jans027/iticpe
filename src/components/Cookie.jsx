import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ButtonCookie, ContInfo, ContModalCookie, TextInfo } from '../styles/Cookie';


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
                                    Utilizamos cookies propias y de terceros para mejorar la experiencia del usuario a través de su navegación. Si continúas navegando aceptas su uso.
                                    <Link to='/Politicas de Navegacion'>Ver Política de Datos de Navegación</Link>
                                </p>
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