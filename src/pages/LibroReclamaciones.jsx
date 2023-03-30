import React, { useRef, useState } from 'react'
import { data } from '../data/data';
import styled from "styled-components";
import { BtnFormContact, CheckboxInput, CheckboxLabel, FormContact } from '../styles/Contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// consecutive number
import { v4 as uuidv4 } from 'uuid';
import { BtnFormLibro, CheckboxInputLibro, CheckboxLabelLibro, ContCheck, FormLibro, ImgLibro, PTitle, SingleInput, TextAreaLibro, TitleLibro, TitleSection, VariousInput } from '../styles/LibroReclamaciones';
import { Helmet } from 'react-helmet';
import { color } from '@mui/system';



const LibroReclamaciones = (props) => {

    // const keys
    const API_KEY = process.env.REACT_APP_API_KEY;
    const SERVICE_URL = `${process.env.REACT_APP_SERVICE_URL}`;
    const DESTINATION_MAIL = `${process.env.REACT_APP_DESTINATION_MAIL}`;
    const SEND_MAIL = `${process.env.REACT_APP_SEND_MAIL}`;

    // get data
    const [datos] = data;
    const { LibroReclamaciones: { img, name, text1, helmet, categoria }, contacto: { contactanos: { checkbox } } } = datos;
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

    //......Select ..............
    const [optionSelected, setOptionSelected] = useState("");

    const handleOptionChange = (event) => {
        setOptionSelected(event.target.value);

    };
    //......Select and Sub Select..............

    //......checkbox 1.........................
    const [optionProducto, setOptionProducto] = useState(false);
    const [optionServicio, setOptionServicio] = useState(false);

    const handleGroup1Option1 = () => {
        setOptionProducto(true);
        setOptionServicio(false);
    };

    const handleGroup1Option2 = () => {
        setOptionServicio(true);
        setOptionProducto(false);
    };
    //.........................................
    //......checkbox 2.........................
    const [optionReclamo, setOptionReclamo] = useState(false);
    const [optionQueja, setOptionQueja] = useState(false);

    const handleGroup2Option1 = () => {
        setOptionReclamo(true);
        setOptionQueja(false);
    };

    const handleGroup2Option2 = () => {
        setOptionQueja(true);
        setOptionReclamo(false);
    };
    //.........................................
    //......checkbox 2.........................
    const [optionEmail, setOptionEmail] = useState(false);
    const [optionCarta, setOptionCarta] = useState(false);

    const handleGroup3Option1 = () => {
        setOptionEmail(true);
        setOptionCarta(false);
    };

    const handleGroup3Option2 = () => {
        setOptionCarta(true);
        setOptionEmail(false);
    };
    //.........................................

    const sendEmail = (event) => {
        event.preventDefault();

        const formData = new FormData(formRef.current);
        const dataForm = Object.fromEntries(formData.entries());
        console.log(dataForm)


        //regex input DNI/CE
        const nitRegex = /^([0-9]{8}|[0-9]{9}-[A-Z]{2}[0-9]{1})$/; // cambiar constantes
        const isValidNit = nitRegex.test(dataForm.Nit);// cambiar constantes

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
        <FormLibro>
            <Helmet><title>{helmet} – ITICPE</title></Helmet>

            <TitleLibro>{name}</TitleLibro>
            <ImgLibro><img src={require(`../images/${img}`)} alt="" /></ImgLibro>

            <div className='cont_form_mail'>
                <form ref={formRef} onSubmit={sendEmail}>

                    <TitleSection>
                        <p><span>*</span>Campo obligatorio</p>
                        <br />
                        <p>{text1}</p>
                        <PTitle>1. IDENTIFICACIÓN DEL CONSUMIDOR RECLAMANTE</PTitle>
                    </TitleSection>

                    <div className='firstBlock'>
                        <VariousInput>
                            <LabelName className='form_label'>{isErrorName === true ? 'Nombre No Valido' : 'Nombre'}<span>*</span></LabelName>
                            <input
                                onCut={handleCutCopyPaste}
                                onCopy={handleCutCopyPaste}
                                onPaste={handleCutCopyPaste}
                                autocomplete="off"
                                // onChange={handleChange}
                                className={classAlert0}
                                type="text"
                                // placeholder='Nombre'
                                name="Nombres"
                                id="Nombres"
                                required
                            />
                        </VariousInput>
                        <VariousInput>
                            <LabelLastName className='form_label'>{isErrorLastName === true ? 'Apellidos No Validos' : 'Apellidos'}<span>*</span></LabelLastName>
                            <input
                                onCut={handleCutCopyPaste}
                                onCopy={handleCutCopyPaste}
                                onPaste={handleCutCopyPaste}
                                autocomplete="off"
                                // onChange={handleChange}
                                className={classAlert4}
                                type="text"
                                // placeholder='Apellidos'
                                name="Apellidos"
                                id="Apellidos"
                                required
                            />
                        </VariousInput>
                    </div>

                    <div className='firstBlock'>
                        <SingleInput>
                            <LabelRazonSocial className='form_label'>{isErrorRazonSocial === true ? 'Numero No Valido' : 'Domicilio'}</LabelRazonSocial >
                            <input
                                // onChange={handleChange}
                                className={classAlert5}
                                type="text"
                                // placeholder='Nombre empresa'
                                name="Domicilio"
                                id="Domicilio"
                            />
                        </SingleInput>
                    </div>

                    <div className='firstBlock'>
                        <VariousInput>
                            <LabelMail className='form_label'>{isErrorMail === true ? 'E-mail Invalido' : 'E-mail'}<span>*</span></LabelMail>
                            <input
                                onCut={handleCutCopyPaste}
                                onCopy={handleCutCopyPaste}
                                onPaste={handleCutCopyPaste}
                                autocomplete="off"
                                // onChange={handleChange}
                                className={classAlert3}
                                type="email"
                                // placeholder='usuario@correo.com'
                                name="E_mail"
                                id="E_mail"
                                required
                            />
                        </VariousInput>
                        <VariousInput>
                            <LabelPhone className='form_label'>{isErrorPhone === true ? 'Numero No Valido' : 'Teléfono'}<span>*</span></LabelPhone>
                            <input
                                // onChange={handleChange}
                                className={classAlert2}
                                type="tel"
                                // placeholder='00000000000'
                                name="Telefono"
                                id="Telefono"
                                required
                            />
                        </VariousInput>
                    </div>

                    <div className='firstBlock'>
                        <SingleInput>
                            <LabelNit className='form_label'>{isErrorNit === true ? 'Numero No Valido' : 'DNI/CE:'}<span>*</span></LabelNit>
                            <input
                                className={classAlert1}
                                type="text"
                                // placeholder='00000000000'
                                name="DNI/CE"
                                id="DNI_CE"
                                pattern="^([0-9]{8}|[0-9]{9}-[A-Z]{2}[0-9]{1})$"
                            />
                        </SingleInput>
                    </div>

                    <div className='firstBlock'>
                        <SingleInput>
                            <LabelNit className='form_label'>{isErrorNit === true ? 'Numero No Valido' : 'Padre o madre: [Para el caso de menores de edad]'}</LabelNit>
                            <input
                                // onChange={handleChange}
                                className={classAlert1}
                                type="text"
                                // placeholder='00000000000'
                                name="Padre o Madre"
                                id="Padre_o_Madre"
                            />
                        </SingleInput>
                    </div>


                    <div className='secondForm'>
                        <PTitle>2. IDENTIFICACIÓN DEL BIEN CONTRATADO</PTitle>

                        <ContCheck>
                            <p className='form_label'>Por favor, seleccione<span>*</span></p>
                            <label>
                                <CheckboxInputLibro name='Bien Contratado' value="Producto" type="checkbox" checked={optionProducto} onChange={e => handleGroup1Option1(e.target.value)} />
                                <p>Producto</p>
                            </label>
                            <label>
                                <CheckboxInputLibro name='Bien Contratado' value="Servicio" type="checkbox" checked={optionServicio} onChange={e => handleGroup1Option2(e.target.value)} />
                                <p>Servicio</p>
                            </label>
                        </ContCheck>

                        <label className='form_label'>Por favor, elija su tema de interés!<span>*</span></label>
                        <select onChange={handleOptionChange} name="seleccion" required>
                            <option value="" hidden>Por favor, seleccione</option>
                            {
                                categorias.map((item) =>
                                    <option key={item.id} value={item.name}>{item.name}</option>
                                )
                            }
                        </select>

                        <label className='form_label'>Descripcion <span>*</span></label>
                        <TextAreaLibro
                            rows="5"
                            // placeholder='Escribe aqui tu mensaje'
                            required
                            name="comentario">
                        </TextAreaLibro>

                        <PTitle>3. DETALLE DE LA RECLAMACIÓN</PTitle>

                        <ContCheck>
                            <p className='form_label'>Por favor, seleccione<span>*</span></p>
                            <label>
                                <CheckboxInputLibro name='Detalle De La Reclamación' value="Reclamo" type="checkbox" checked={optionReclamo} onChange={e => handleGroup2Option1(e.target.value)} />
                                <p>Reclamo¹</p>
                            </label>
                            <label>
                                <CheckboxInputLibro name='Detalle De La Reclamación' value="Queja" type="checkbox" checked={optionQueja} onChange={e => handleGroup2Option2(e.target.value)} />
                                <p>Queja²</p>
                            </label>
                        </ContCheck>

                        <label className='form_label'>Descripcion <span>*</span></label>
                        <TextAreaLibro
                            rows="5"
                            // placeholder='Escribe aqui tu mensaje'
                            required
                            name="comentario">
                        </TextAreaLibro>

                        <p>¹Reclamo: Disconformidad relacionada a los productos o servicios.</p>
                        <p>²Queja: Disconformidad no relacionada a los productos o servicios; o, malestar o descontento respecto a la atención al público.</p>

                        <PTitle>4. ACCIONES ADOPTADAS POR EL PROVEEDOR</PTitle>

                        <label className='form_label'>Detalle (Este campo será llenado por el proveedor al momento de atender su queja o reclamo)</label>
                        <TextAreaLibro
                            rows="5"
                            // placeholder='Escribe aqui tu mensaje'
                            readOnly
                            name="comentario">
                        </TextAreaLibro>

                        <ContCheck>
                            <p className='form_label'>Canal de contacto preferido <span>*</span></p>
                            <label>
                                <CheckboxInputLibro name='Canal de Contacto' value="E-Mail" type="checkbox" checked={optionEmail} onChange={e => handleGroup3Option1(e.target.value)} />
                                <p>E-Mail</p>
                            </label>
                            <label>
                                <CheckboxInputLibro name='Canal de Contacto' value="Carta" type="checkbox" checked={optionCarta} onChange={e => handleGroup3Option2(e.target.value)} />
                                <p>Carta</p>
                            </label>
                        </ContCheck>

                        <CheckboxLabelLibro>
                            <CheckboxInputLibro
                                required
                                type="checkbox"
                                id="cbox1"
                                value="first_checkbox" />
                            <span>{checkbox}</span>
                        </CheckboxLabelLibro>

                        <input type="hidden" id="subject" name="_subject" value="Cotizacion" />
                        <input type="hidden" name="_template" value="box"></input>
                        <BtnFormLibro>
                            <button
                                type="submit"
                                value="Enviar"
                                onFocus={handleFocus}
                            >Enviar
                            </button>
                        </BtnFormLibro>
                        <ToastContainer />
                    </div>

                </form>
            </div>

        </FormLibro>
    );
}
export default LibroReclamaciones;