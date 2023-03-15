/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import SendMail from './SendMail';
import { data } from '../data/data';
import { BtnModal, ConImgModal, ContFormModal, ContInformationModal, ContModal } from '../styles/ModalForm';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide transitionDuration="30000" direction="down" ref={ref} {...props} />;
});

const ModalForm = (props) => {

    //import data
    const [datos] = data
    const { consulta: { name, img } } = datos
    // console.log(name)

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //...send props to children .....
    const cerrarModal = () => {
        setOpen(false);
    };



    return (
        <>
            <Link className='enlace' variant="outlined" onClick={handleClickOpen}>
                {name}
            </Link>
            <ContModal
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                className='cont_modal'
            >
                <div className='cont_close'>
                    <span onClick={handleClose}> <CloseIcon /> </span>
                </div>
                <ContInformationModal>

                    <ConImgModal>
                        <img className='imgBanner'src={require(`../images/${img}`)}alt={img}/>
                    </ConImgModal>

                    <ContFormModal className='cont_form'>
                        <SendMail cerrarModal={cerrarModal}/> 
                        {/* <BtnModal className='btnGreen'  onClick={handleClose}>CANCELAR</BtnModal> */}
                    </ContFormModal>
                    
                </ContInformationModal>
            </ContModal>
        </>
    );
}
export default ModalForm