import React, { useRef, useState } from 'react'
import { data } from '../data/data';
import { BtnModal } from '../styles/ModalForm';
import styled from "styled-components";
// toastify alert
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SendMail = (props) => {

    // const secret keys
    const API_KEY = process.env.REACT_APP_API_KEY;
    const SERVICE_URL = `${process.env.REACT_APP_SERVICE_URL}`;
    const DESTINATION_MAIL = `${process.env.REACT_APP_DESTINATION_MAIL}`;
    const SEND_MAIL = `${process.env.REACT_APP_SEND_MAIL}`;

    //...import data
    const [datos] = data
    const { consulta: { input } } = datos

    // ...dinamic class name
    const [classAlert1, setClassAlert1] = useState('form_input')
    const [classAlert2, setClassAlert2] = useState('form_input')

    // ...avoid copy & paste action
    const handleCutCopyPaste = (event) => {
        event.preventDefault();
    };

    //...........................props
    const handleClick = () => {
        props.cerrarModal()// Llama a la función cerrarModal para cerrar la ventana modal en el componente padre
    };

    // errors in input
    const [isErrorMail, setErrorMail] = useState(false)
    const [isErrorNumber, setErrorNumber] = useState(false)
    // console.log(isErrorMail, isErrorNumber)

    const LabelMail = styled.label`
    color: ${isErrorMail === true ? 'red' : 'black'};
`;
    const LabelNumber = styled.label`
    color: ${isErrorNumber === true ? 'red' : 'black'};
`;

    const handleFocus = () => {
        setClassAlert1('form_input')
        setClassAlert2('form_input')
        setErrorMail(false)
        setErrorNumber(false)
    };
//.......................................


    const formRef = useRef();

    const sendEmail = (event) => {
        event.preventDefault();


        const formData = new FormData(formRef.current);
        const dataForm = Object.fromEntries(formData.entries());

        // ...regex input email
        const emailRegex = /^(([^<>() [\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValidEmail = emailRegex.test(dataForm.email);
        const isValidEmail2 = emailRegex.test(dataForm.email2);

        // ...regex input numb
        const numbRegex = /^[0-9]+$/;
        const isValidnumb = numbRegex.test(dataForm.certificate)

        if (
            dataForm.seleccion === undefined
        ) {
            // console.log(dataForm.seleccion)

        } else if (
            dataForm.email.trim() === "" ||
            dataForm.email === null ||
            dataForm.email.length === 0 ||
            isValidEmail !== true
        ) {
            setClassAlert1('class_1');
            setErrorMail(true)

        } else if (
            dataForm.email2.trim() === "" ||
            dataForm.email2 === null ||
            dataForm.email2.length === 0 ||
            isValidEmail2 !== true ||
            dataForm.email2 !== dataForm.email
        ) {
            setClassAlert1('class_1');
            setErrorMail(true)

        } else if (
            dataForm.certificate.trim() === "" ||
            dataForm.certificate === null ||
            dataForm.certificate.length === 0 ||
            isValidnumb !== true
        ) {
            setClassAlert2('class_1');
            setErrorNumber(true)

        } else {
            // console.log(dataForm)
            const url = SERVICE_URL;
            const Nombre = 'CERTIFICADO';
            //we get exact time to generate a different conversation email each time
            const subject = new Date();
            const formatDate = subject.toLocaleTimeString();

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': API_KEY
                },
                body: JSON.stringify({
                    sender: { name: Nombre, email: SEND_MAIL },
                    to: [{ email: DESTINATION_MAIL }],
                    subject: formatDate,
                    htmlContent:
                        `
                        Categoria del Certificado : ${dataForm.seleccion}
                        <br><br>
                        E-Mail : ${dataForm.email}
                        <br><br>
                        Numero del Certificado : ${dataForm.certificate}
                    `
                })
            })
                .then(response =>
                    response.json(),
                    toast.success('Consulta Enviada con Exito!', {// alert message
                        position: "top-center",
                        autoClose: 500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    }
                    )
                        .then(data =>
                            console.log(data),
                            formRef.current.reset(),// clean form
                        )
                )
                .catch(error =>
                    console.error(error),
                    formRef.current.reset(),// clean form
                    toast.error('No se pudo Enviar tu consulta, Intentalo mas tarde!', {// alert message
                        position: "top-center",
                        autoClose: 500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })
                );
        }
    };

    return (
        <div className='cont_form_mail'>
            <form ref={formRef} onSubmit={sendEmail}>

                <label className='form_label'>Categoría del certificado <span>*</span></label>
                <select name="seleccion" required>
                    <option value="" hidden>Categoría de servicio</option>
                    <option value="Sistemas de Gestión">Sistemas de Gestión</option>
                    <option value="Certificación de Producto">Certificación de Producto</option>
                    <option value="Servicios Industriales">Servicios Industriales</option>
                    <option value="Certificación de Personas">Certificación de Personas</option>
                </select>

                <LabelMail className='form_label'>{isErrorMail === true ? 'E-mail No Coincide' : 'E-mail'}<span>*</span></LabelMail>
                <input
                    onCut={handleCutCopyPaste}
                    onCopy={handleCutCopyPaste}
                    onPaste={handleCutCopyPaste}
                    autocomplete="off"
                    className={classAlert1}
                    type="email"
                    placeholder='usuario@correo.com'
                    name="email"
                    id="email"
                    required
                />

                <LabelMail className='form_label'>{isErrorMail === true ? 'E-mail No Coincide' : 'Verifica tu E-mail'}<span>*</span></LabelMail>
                <input
                    onCut={handleCutCopyPaste}
                    onCopy={handleCutCopyPaste}
                    onPaste={handleCutCopyPaste}
                    autocomplete="off"
                    className={classAlert1}
                    type="email"
                    placeholder='usuario@correo.com'
                    name="email2"
                    id="email2"
                    required
                />

                <LabelNumber className='form_label'>{isErrorNumber === true ? 'Digita un número' : 'Digita tu número de certificado'}<span>*</span></LabelNumber>
                <input
                    className={classAlert2}
                    type="tel"
                    placeholder='Ingresa el numero del certificado'
                    name="certificate"
                    id="certificate"
                    required
                />
                <div className='Cont_btn_modal'>
                    <BtnModal type='reset' onClick={handleClick}>Cancelar</BtnModal>
                    <BtnModal type="submit" value="Enviar" onFocus={handleFocus}>Enviar</BtnModal>
                </div>
                <ToastContainer />
            </form>
        </div>
    );
}
export default SendMail;