import React from 'react'
//import react router dom
import { Link } from 'react-router-dom';
//import data
import { data } from '../data/data'
//styles
import { ConContacBar } from '../styles/ContacBar'

const ContacBar = () => {

    //get data
    const [datos] = data;
    //destructuring data
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