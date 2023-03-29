import React, { useRef, useState } from 'react'
import { data } from '../data/data';
import styled from "styled-components";
import { BtnFormContact, CheckboxInput, CheckboxLabel, FormContact } from '../styles/Contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// consecutive number
import { v4 as uuidv4 } from 'uuid';



const CotizacionForm = (props) => {

    // const 
    const API_KEY = process.env.REACT_APP_API_KEY;
    const SERVICE_URL = `${process.env.REACT_APP_SERVICE_URL}`;
    const DESTINATION_MAIL = `${process.env.REACT_APP_DESTINATION_MAIL}`;
    const SEND_MAIL = `${process.env.REACT_APP_SEND_MAIL}`;

    // get data
    const [datos] = data;
    const { cotizacion: { form: { categoria } }, contacto: { contactanos: { checkbox } } } = datos;
    const categorias = Object.values(categoria);

    // ...dinamic class name
    const [classAlert0, setClassAlert0] = useState('form_input')
    const [classAlert1, setClassAlert1] = useState('form_input')
    const [classAlert2, setClassAlert2] = useState('form_input')
    const [classAlert3, setClassAlert3] = useState('form_input')
    const [classAlert4, setClassAlert4] = useState('form_input')
    const [classAlert5, setClassAlert5] = useState('form_input')

    // ...avoid copy & paste action
    const handleCutCopyPaste = (event) => {
        event.preventDefault();
    };

    //...clean form after send form
    const formRef = useRef();

    // errors in input
    const [isErrorName, setErrorName] = useState(false)
    const [isErrorLastName, setErrorLastName] = useState(false)
    const [isErrorRazonSocial, setErrorRazonSocial] = useState(false)
    const [isErrorNit, setErrorNit] = useState(false)
    const [isErrorPhone, setErrorPhone] = useState(false)
    const [isErrorMail, setErrorMail] = useState(false)

    const LabelName = styled.label`
        color: ${isErrorName === true ? 'red' : 'black'};
    `;
    const LabelLastName = styled.label`
        color: ${isErrorLastName === true ? 'red' : 'black'};
    `;
    const LabelRazonSocial = styled.label`
        color: ${isErrorRazonSocial === true ? 'red' : 'black'};
    `;
    const LabelNit = styled.label`
        color: ${isErrorNit === true ? 'red' : 'black'};
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
        setClassAlert4('form_input')
        setClassAlert5('form_input')
        setErrorName(false)
        setErrorLastName(false)
        setErrorRazonSocial(false)
        setErrorNit(false)
        setErrorPhone(false)
        setErrorMail(false)
    };
    //.......................................

    //......Select and Sub Select..............
    const [optionSelected, setOptionSelected] = useState("");
    const [optionsList, setOptionsList] = useState([]);
    const options = Object.values(optionsList)

    const handleOptionChange = (event) => {
        const selectedOption = event.target.value;
        setOptionSelected(selectedOption);
        // En este codigo, se filtran las opciones dinámicamente
        // según la opción seleccionada. 
        if (selectedOption === "Servicios Industriales") {
            const objetoEncontrado = categorias.find((objeto) => objeto.name === "Servicios Industriales");
            setOptionsList(objetoEncontrado.tipo);
        } else if (selectedOption === "Certificación de Producto") {
            const objetoEncontrado = categorias.find((objeto) => objeto.name === "Certificación de Producto");
            setOptionsList(objetoEncontrado.tipo);
        } else if (selectedOption === "Sistemas de Gestión") {
            const objetoEncontrado = categorias.find((objeto) => objeto.name === "Sistemas de Gestión");
            setOptionsList(objetoEncontrado.tipo);
        } else {
            setOptionsList([]);
        }
    };
    //......Select and Sub Select..............

    const sendEmail = (event) => {
        event.preventDefault();

        const formData = new FormData(formRef.current);
        const dataForm = Object.fromEntries(formData.entries());


        //regex input NIT
        const nitRegex = /^\d{8}-\d$/;
        const isValidNit = nitRegex.test(dataForm.Nit);

        // regex input name and last name
        const nameRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;
        const isValidName = nameRegex.test(dataForm.Nombres);
        const isValidLastName = nameRegex.test(dataForm.Apellidos);

        // ...regex input email
        const emailRegex = /^(([^<>() [\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValidEmail = emailRegex.test(dataForm.E_mail);

        // ...regex input numb
        const numbRegex = /^[0-9]+$/;
        const isValidnumb2 = numbRegex.test(dataForm.Telefono)

        if ( //Name.....................
            dataForm.Nombres.trim() === "" ||
            dataForm.Nombres === null ||
            dataForm.Nombres.length === 0 ||
            isValidName !== true
        ) {
            setClassAlert0('class_1');
            setErrorName(true)
            console.log('error name......')


        } else if (// LastName..............
            dataForm.Apellidos.trim() === "" ||
            dataForm.Apellidos === null ||
            dataForm.Apellidos.length === 0 ||
            isValidLastName !== true
        ) {
            setClassAlert4('class_1');
            setErrorLastName(true)
            console.log('error last name......')

        } else if (// Razon social..............
            dataForm.Razon_Social.trim() === "" ||
            dataForm.Razon_Social === null ||
            dataForm.Razon_Social.length === 0
        ) {
            setClassAlert5('class_1');
            setErrorRazonSocial(true)
            console.log('error Razon Social......')

        } else if (// Nit..............
            dataForm.Nit.trim() === "" ||
            dataForm.Nit === null ||
            dataForm.Nit.length === 0 ||
            isValidNit !== true
        ) {
            setClassAlert1('class_1');
            setErrorNit(true)
            console.log('error nit......')

        } else if (// telefono..............
            dataForm.Telefono.trim() === "" ||
            dataForm.Telefono === null ||
            dataForm.Telefono.length === 0 ||
            isValidnumb2 !== true
        ) {
            setErrorPhone(true)
            setClassAlert2('class_1');
            console.log('error telefono......')

        } else if (// e mail..............
            dataForm.E_mail.trim() === "" ||
            dataForm.E_mail === null ||
            dataForm.E_mail.length === 0 ||
            isValidEmail !== true
        ) {
            setErrorMail(true)
            setClassAlert3('class_1');
            console.log('error mail......')

        } else {
            // console.log(event.target.value)

            const url = SERVICE_URL;
            const Nombre = 'COTIZACION';
            //we get consecutive number to generate a different conversation email each time
            const messageId = uuidv4().slice(0, 8);

            fetch(url, {
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
                        Nombre : ${dataForm.Nombres} ${dataForm.Apellidos}
                        <br><br>
                        Razon Social : ${dataForm.Razon_Social}
                        <br><br>
                        Nit : ${dataForm.Nit}
                        <br><br>
                        Telefono : ${dataForm.Telefono}
                        <br><br>
                        E-Mail : ${dataForm.E_mail}
                        <br><br>
                        Servicio : ${dataForm.seleccion}
                    `
                })
            })
                .then(response =>
                    response.json(),
                    toast.success('Cotizacion Enviada con Exito!', {// alert message
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
                    toast.error('No se pudo Enviar la Cotizacion, Intentalo mas tarde!', {// alert message
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
        <FormContact>
            <div className='cont_form_mail'>
                <form ref={formRef} onSubmit={sendEmail}>

                    <div className='firstBlock'>
                        <div>
                            <LabelName className='form_label'>{isErrorName === true ? 'Nombre No Valido' : 'Nombre'}<span>*</span></LabelName>
                            <input
                                onCut={handleCutCopyPaste}
                                onCopy={handleCutCopyPaste}
                                onPaste={handleCutCopyPaste}
                                autocomplete="off"
                                // onChange={handleChange}
                                className={classAlert0}
                                type="text"
                                placeholder='Nombre'
                                name="Nombres"
                                id="Nombres"
                                required
                            />
                        </div>
                        <div>
                            <LabelLastName className='form_label'>{isErrorLastName === true ? 'Apellidos No Validos' : 'Apellidos'}<span>*</span></LabelLastName>
                            <input
                                onCut={handleCutCopyPaste}
                                onCopy={handleCutCopyPaste}
                                onPaste={handleCutCopyPaste}
                                autocomplete="off"
                                // onChange={handleChange}
                                className={classAlert4}
                                type="text"
                                placeholder='Apellidos'
                                name="Apellidos"
                                id="Apellidos"
                                required
                            />
                        </div>
                    </div>

                    <div className='firstBlock'>
                        <div>
                            <LabelRazonSocial className='form_label'>{isErrorRazonSocial === true ? 'Numero No Valido' : 'Razón social'}<span>*</span></LabelRazonSocial >
                            <input
                                // onChange={handleChange}
                                className={classAlert5}
                                type="text"
                                placeholder='Nombre empresa'
                                name="Razon_Social"
                                id="Razon_Social"
                                required
                            />
                        </div>
                        <div>
                            <LabelNit className='form_label'>{isErrorNit === true ? 'Numero No Valido' : 'Nit:'}<span>*</span></LabelNit>
                            <input
                                // onChange={handleChange}
                                className={classAlert1}
                                type="text"
                                placeholder='00000000000'
                                name="Nit"
                                id="Nit"
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
                                name="Telefono"
                                id="Telefono"
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
                                name="E_mail"
                                id="E_mail"
                                required
                            />
                        </div>
                    </div>

                    <div className='secondForm'>
                        <label className='form_label'>Categoría de Servicio<span>*</span></label>
                        <select value={optionSelected} onChange={handleOptionChange} name="seleccion" required>
                            <option value="" hidden>Selecciona el servicio a cotizar</option>
                            {
                                categorias.map((item) =>
                                    <option key={item.id} value={item.name}>{item.name}</option>
                                )
                            }
                        </select>

                        <label className='form_label'>Tipo de Servicio<span>*</span></label>
                        <select name="seleccion" required>
                            <option value="" hidden>Selecciona el tipo de servicio a cotizar</option>
                            {
                                options.map((item) =>
                                    <option key={item} value={`${optionSelected} / ${item}`}>{item}</option>
                                )
                            }
                        </select>


                        <CheckboxLabel>
                            <CheckboxInput
                                required
                                type="checkbox"
                                id="cbox1"
                                value="first_checkbox" />
                            <span>{checkbox}</span>
                        </CheckboxLabel>

                        <input type="hidden" id="subject" name="_subject" value="Cotizacion" />
                        <input type="hidden" name="_template" value="box"></input>
                        <BtnFormContact>
                            <button
                                type="submit"
                                value="Enviar"
                                onFocus={handleFocus}
                            >Enviar
                            </button>
                        </BtnFormContact>
                        <ToastContainer />
                    </div>

                </form>
            </div>

        </FormContact>
    );
}
export default CotizacionForm;