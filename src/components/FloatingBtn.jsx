import React from 'react'
//import react router dom
import { Link } from 'react-router-dom';
//import data
import { data } from '../data/data';
//styles
import { ConBtnFloat } from '../styles/FloatingBtn';

const FloatingBtn = () => {

    //get data
    const [datos] = data;
    //destructuring data
    const { inicio: { whatsappUrl, whatsappImg } } = datos;

    return (
        <>
            <ConBtnFloat>
                <Link to={whatsappUrl}target='_blank'>
                    <img src={require(`../images/${whatsappImg}`)} alt='logo whatsapp'/>
                </Link>
            </ConBtnFloat>
        </>
    )
};

export default FloatingBtn;