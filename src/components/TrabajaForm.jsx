import styled from "styled-components";
// toastify alert
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// consecutive number
import { v4 as uuidv4 } from 'uuid';
import { useRef } from "react";
import { useState } from "react";
import { data } from "../data/data";
// fire base
import { app } from '../firebase';
//icons
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// progress
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
//styles
import { BtnFormContact, CheckboxInput, CheckboxLabel, FormContact } from '../styles/Contact';
import { ContInput, Input } from "../styles/TrabajaForm";





const TrabajaForm = (props) => {

    // const keys sendinblue
    const API_KEY = process.env.REACT_APP_API_KEY;
    const SERVICE_URL = `${process.env.REACT_APP_SERVICE_URL}`;
    const DESTINATION_MAIL = `${process.env.REACT_APP_DESTINATION_MAIL}`;
    const SEND_MAIL = `${process.env.REACT_APP_SEND_MAIL}`;


    // get data
    const [datos] = data;
    const { contacto: { contactanos: { checkbox } } } = datos;

    //............................................................

    //........PDF Management.................
    const [archivoUrl, setArchivoUrl] = useState('');
    const [labelFile, setLabelFile] = useState('');
    const [progress, setProgress] = useState(false);

    // Function that executes when loading the pdf
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Create a reference to the file in Firebase Storage
        const archivo = e.target.files[0];
        const storageRef = app.storage().ref();
        const archivoPath = storageRef.child(archivo.name);
        setProgress(true);
        await archivoPath.put(archivo);
        setLabelFile(archivo.name)
        await archivoPath.getDownloadURL()
            .then(response =>
                setArchivoUrl(response)
            );
    };
    //.........................................

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
        const dniRegex = /^([0-9]{8}|[0-9]{9}-[A-Z]{2}[0-9]{1})$/;
        const isValidDni = dniRegex.test(dataForm.cedula);

        // ...regex input numb
        const numbRegex = /^[0-9]+$/;
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
            isValidDni !== true
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

            const url = SERVICE_URL;
            const Nombre = 'TRABAJA';
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
                        Numero de Cedula : ${dataForm.cedula}
                        <br><br>
                        Telefono : ${dataForm.phone}
                        <br><br>
                        E-Mail : ${dataForm.email}
                        <br><br>
                        <a href="${archivoUrl}">Curriculum Vitae</a>
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
                        <ContInput>
                            <p>Recuerda que el tamaño máximo del archivo que puedes subir es de 2 MB y solo se permiten archivos con extensiones .pdf</p>
                            <Input accept=".pdf" max="2097152" required type="file" onChange={handleFormSubmit} />
                            {
                                labelFile === '' ?
                                    (
                                        progress !== true ?
                                            <label className="emptyFile" for="file"><CloudUploadIcon />Subir HdV</label>
                                            :
                                            <Box sx={{ display: 'flex' }}>
                                                <CircularProgress />
                                            </Box>
                                    )
                                    :
                                    <label className="sendFile" for="file"><CloudUploadIcon />Cargado con Exito!</label>
                            }
                            <input type="hidden" name='nombre' placeholder='nombra tu archivo' />
                        </ContInput>

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
export default TrabajaForm;