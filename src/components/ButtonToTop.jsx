import React from 'react'
//import element ,aterial ui
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
//styles
import { ButtonTop } from '../styles/ButtonToTop';

const ButtonToTop = () => {

    //function to roll to top
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