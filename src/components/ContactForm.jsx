import React, { useRef, useState } from 'react'
//import data
import { data } from '../data/data';
//import styled
import styled from "styled-components";
import { BtnFormContact, CheckboxInput, CheckboxLabel, FormContact, TextArea } from '../styles/Contact';
// toastify alert
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// consecutive number
import { v4 as uuidv4 } from 'uuid';


const ContactForm = (props) => {

    // const 
    const API_KEY = process.env.REACT_APP_API_KEY;
    const SERVICE_URL = `${process.env.REACT_APP_SERVICE_URL}`;
    const DESTINATION_MAIL = `${process.env.REACT_APP_DESTINATION_MAIL}`;
    const SEND_MAIL = `${process.env.REACT_APP_SEND_MAIL}`;

    // get data
    const [datos] = data;
    //destructuring data
    const { contacto: { contactanos: { labelSolic, placeholder_solic, checkbox, solicitud } } } = datos;

    // ...dinamic class name
    const [classAlert0, setClassAlert0] = useState('form_input')
    const [classAlert1, setClassAlert1] = useState('form_input')
    const [classAlert2, setClassAlert2] = useState('form_input')
    const [classAlert3, setClassAlert3] = useState('form_input')

    // ...avoid copy & paste action
    const handleCutCopyPaste = (event) => {
        event.preventDefault();
    };

    //...clean form after send form
    const formRef = useRef();

    // errors in input
    const [isErrorName, setErrorName] = useState(false)
    const [isErrorCedula, setErrorCedula] = useState(false)
    const [isErrorPhone, setErrorPhone] = useState(false)
    const [isErrorMail, setErrorMail] = useState(false)
    // console.log(isErrorName)

    //styles errors
    const LabelName = styled.label`
        color: ${isErrorName === true ? 'red' : 'black'};
    `;
    const LabelCedula = styled.label`
        color: ${isErrorCedula === true ? 'red' : 'black'};
    `;
    const LabelPhone = styled.label`
    color: ${isErrorPhone === true ? 'red' : 'black'};
    `;
    const LabelMail = styled.label`
    color: ${isErrorMail === true ? 'red' : 'black'};
    `;

    const handleFocus = () => {
        setClassAlert0('form_input')
        setClassAlert1('form_input')
        setClassAlert2('form_input')
        setClassAlert3('form_input')
        setErrorName(false)
        setErrorCedula(false)
        setErrorPhone(false)
        setErrorMail(false)
    };
    //.......................................

    const sendEmail = async (event) => {
        event.preventDefault();

        const formData = new FormData(formRef.current);
        const dataForm = Object.fromEntries(formData.entries());

        // regex input name
        const nameRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;
        const isValidName = nameRegex.test(dataForm.name);

        // ...regex input email
        const emailRegex = /^(([^<>() [\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValidEmail = emailRegex.test(dataForm.email);

        // ...regex input numb
        const numbRegex = /^([0-9]{8}|[0-9]{9}-[A-Z]{2}[0-9]{1})$/;
        const isValidnumb = numbRegex.test(dataForm.cedula)
        // const isValidnumb2 = numbRegex.test(dataForm.phone)

        if ( //Nombre completo............
            dataForm.name.trim() === "" ||
            dataForm.name === null ||
            dataForm.name.length === 0 ||
            isValidName !== true
        ) {
            setClassAlert0('class_1');
            setErrorName(true)
            console.log('error......')

        } else if (// cedula..............
            dataForm.cedula.trim() === "" ||
            dataForm.cedula === null ||
            dataForm.cedula.length === 0 ||
            isValidnumb !== true
        ) {
            setClassAlert1('class_1');
            setErrorCedula(true)

        } else if (// telefono..............
            dataForm.phone.trim() === "" ||
            dataForm.phone === null ||
            dataForm.phone.length === 0
            // || isValidnumb2 !== true
        ) {
            setErrorPhone(true)
            setClassAlert2('class_1');

        } else if (// e mail..............
            dataForm.email.trim() === "" ||
            dataForm.email === null ||
            dataForm.email.length === 0 ||
            isValidEmail !== true
        ) {
            setErrorMail(true)
            setClassAlert3('class_1');

        } else {
            // console.log(dataForm)

            const url = SERVICE_URL;
            const Nombre = 'CONTACTO';
            //we get consecutive number to generate a different conversation email each time
            const messageId = uuidv4().slice(0, 8);

            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': API_KEY
                },
                body: JSON.stringify({
                    sender: { name: Nombre, email: SEND_MAIL },
                    to: [{ email: DESTINATION_MAIL }],
                    subject: messageId,
                    htmlContent:
                        `
                        Nombre : ${dataForm.name}
                        <br><br>
                        Numero de DNI/CE : ${dataForm.cedula}
                        <br><br>
                        Telefono : ${dataForm.phone}
                        <br><br>
                        E-Mail : ${dataForm.email}
                        <br><br>
                        Solicitud : ${dataForm.seleccion}
                        <br><br>
                        Comentario : ${dataForm.comentario}
                    `
                })
            })
            .then(response => {
                if (response.ok) {
                    // throw new Error('La petición ha fallado!')
                    return response.json()
                        .then(data =>
                            // console.log(data),
                            formRef.current.reset(),// clean form
                            toast.success('En breve nos pondremos en contacto contigo!', {// alert message
                                position: "top-center",
                                autoClose: 1000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            })
                            )
                        .catch(error => console.error(error));
                } else {
                    // throw new Error('La petición ha fallado!')
                    console.log(response.status)
                    toast.error('No se pudo Enviar tu solicitud, Intentalo mas tarde!', {// alert message
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })
                }
            })
            .catch(error =>
                console.log(error),
                formRef.current.reset(),// clean form
            );
        }

    };


    return (
        <FormContact>
            <div className='cont_form_mail'>
                <form ref={formRef} onSubmit={sendEmail}>

                    <div className='firstBlock'>
                        <div>
                            <LabelName className='form_label'>{isErrorName === true ? 'Nombre No Valido' : 'Nombre Completo'}<span>*</span></LabelName>
                            <input
                                onCut={handleCutCopyPaste}
                                onCopy={handleCutCopyPaste}
                                onPaste={handleCutCopyPaste}
                                autocomplete="off"
                                // onChange={handleChange}
                                className={classAlert0}
                                type="text"
                                placeholder='Nombre'
                                name="name"
                                id="name"
                                required
                            />
                        </div>

                        <div>
                            <LabelCedula className='form_label'>{isErrorCedula === true ? 'Numero No Valido' : 'DNI/CE'}<span>*</span></LabelCedula>
                            <input
                                // onChange={handleChange}
                                className={classAlert1}
                                type="text"
                                placeholder='00000000000'
                                name="cedula"
                                id="cedula"
                                required
                            />
                        </div>
                    </div>


                    <div className='firstBlock'>
                        <div>
                            <LabelPhone className='form_label'>{isErrorPhone === true ? 'Numero No Valido' : 'Teléfono o Celular'}<span>*</span></LabelPhone>
                            <input
                                // onChange={handleChange}
                                className={classAlert2}
                                type="tel"
                                placeholder='00000000000'
                                name="phone"
                                id="phone"
                                required
                            />
                        </div>
                        <div>
                            <LabelMail className='form_label'>{isErrorMail === true ? 'E-mail Invalido' : 'E-mail'}<span>*</span></LabelMail>
                            <input
                                onCut={handleCutCopyPaste}
                                onCopy={handleCutCopyPaste}
                                onPaste={handleCutCopyPaste}
                                autocomplete="off"
                                // onChange={handleChange}
                                className={classAlert3}
                                type="email"
                                placeholder='usuario@correo.com'
                                name="email"
                                id="email"
                                required
                            />
                        </div>
                    </div>

                    <div className='secondForm'>
                        <label className='form_label'>{labelSolic}<span>*</span></label>
                        <select name="seleccion" required>
                            <option value="" hidden>{placeholder_solic}</option>
                            <option value={solicitud[0]}>{solicitud[0]}</option>
                            <option value={solicitud[1]}>{solicitud[1]}</option>
                            <option value={solicitud[2]}>{solicitud[2]}</option>
                        </select>

                        <TextArea
                            rows="5"
                            placeholder='Escribe aqui tu mensaje'
                            required
                            name="comentario">
                        </TextArea>

                        <CheckboxLabel>
                            <CheckboxInput
                                required
                                type="checkbox"
                                id="cbox1"
                                value="first_checkbox" />
                            <span>{checkbox}</span>
                        </CheckboxLabel>

                        <BtnFormContact>
                            <button
                                type="submit"
                                value="Enviar"
                                onFocus={handleFocus}
                            >Enviar
                            </button>
                        </BtnFormContact>
                    </div>
                    <ToastContainer />
                </form>
            </div>

        </FormContact>
    );
}
export default ContactForm;