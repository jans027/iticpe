import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { data } from '../data/data';
import styled from "styled-components";
import { BtnFormContact, CheckboxInput, CheckboxLabel, FormContact, TextArea } from '../styles/Contact';




const ContactForm = (props) => {

    // get data
    const [datos] = data;
    const { contacto: { contactanos: {
        labelName,
        labelDocument,
        labelPhone,
        labelEmail,
        labelSolic,
        placeholder_solic,
        checkbox,
        solicitud } } } = datos;

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

    const sendEmail = (event) => {
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
        const numbRegex = /^[0-9]+$/;
        const isValidnumb = numbRegex.test(dataForm.cedula)
        const isValidnumb2 = numbRegex.test(dataForm.phone)

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
            dataForm.phone.length === 0 ||
            isValidnumb2 !== true
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
            // console.log(event.target.value)
            // console.log(dataForm)
            emailjs.sendForm(
                'service_n2xb48w',
                'template_2oqdkvi',
                formRef.current,
                'fH06FLKeCzoxBZgFA'
            )
                .then((result) => {
                    console.log(result.text);
                    alert('Mensaje enviado con exito...');
                    formRef.current.reset();// clean form


                },
                    (error) => {
                        alert('Intenta mas tarde...');
                        formRef.current.reset();// clean form
                    });
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
                            <LabelCedula className='form_label'>{isErrorCedula === true ? 'Numero No Valido' : 'Cedula'}<span>*</span></LabelCedula>
                            <input
                                // onChange={handleChange}
                                className={classAlert1}
                                type="number"
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
                            <option value={solicitud[3]}>{solicitud[3]}</option>
                            <option value={solicitud[4]}>{solicitud[4]}</option>
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

                </form>
            </div>

        </FormContact>
    );
}
export default ContactForm;