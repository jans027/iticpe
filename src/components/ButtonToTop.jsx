import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ButtonTop } from '../styles/ButtonToTop';

const ButtonToTop = () => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <ButtonTop onClick={handleClick}>
                <ArrowUpwardIcon />
            </ButtonTop>
        </>
    );
}

export default ButtonToTop