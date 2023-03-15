import React from 'react'
import { Link } from 'react-router-dom';
import { data } from '../data/data'
import { ConContacBar } from '../styles/ContacBar'

const ContacBar = () => {

    const [datos] = data;
    const { contacto: { url, title, textBarraContac } } = datos

    return (
        <>
            <ConContacBar>
                <p className='textTitleBar'>{textBarraContac}</p>
                <Link to={url}>
                    <div><p>{title}</p></div>
                </Link>
            </ConContacBar>
        </>
    )
}

export default ContacBar;