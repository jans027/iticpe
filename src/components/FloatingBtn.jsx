import React from 'react'
import { Link } from 'react-router-dom';
import { data } from '../data/data';
import { ConBtnFloat } from '../styles/FloatingBtn';

const FloatingBtn = () => {

    const [datos] = data
    const { inicio: { whatsappUrl, whatsappImg } } = datos

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