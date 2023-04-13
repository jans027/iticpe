import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import BannerServicios from '../components/BannerServicios';
import ContacBar from '../components/ContacBar';
// import NavServicios from '../components/NavServicios';
import { data } from '../data/data';
import { BtnPolCol, ButtonSection, CardAcredtDetalles, CardDetalles, ContAcredt, ContCardDeta, ContImgMobile, ContImgPc, ContNavigationPc, ContTextoG, ParagraphSection, TitleSection } from '../styles/DetallesServicios';
import { ContPagesEmpresa } from '../styles/NavEmpresa';
import { ConNosotros } from '../styles/Nosotros';
// Icon
import AddCircleIcon from '@mui/icons-material/AddCircle';




const DetallesServicios = (props) => {

    // force window to load on startup
    function handleClick(e) {
        e.preventDefault();
        window.history.back();
    }
    // import prop from app.js
    const { id } = useParams();

    //get data
    const [datos] = data
    const { empresa: { dropDownMenu: { acreditaciones: { documentOnac } } }, servicios: { dropDownMenu } } = datos;
    const rute = Object.values(dropDownMenu);
    const rute0 = Object.values(documentOnac.cards);
    const rute1 = Object.values(dropDownMenu.gestion.cards);
    const rute2 = Object.values(dropDownMenu.producto.cards);
    const rute3 = Object.values(dropDownMenu.industriales.cards);

    // obtaining and deconstructing dynamic data
    const [nuevoDatos, setNuevoDatos] = useState([]);
    const cardGet = Object.values(nuevoDatos)
    const [acreditacion, setAcreditacion] = useState([]);

    const [idProp, setIdProp] = useState()

    const getElement = () => {
        if (props.gestion) {
            const objetoEncontrado1 = rute1.find((objeto) => objeto.id === id);
            const acreditaciones = rute0.find((objeto) => objeto.acreditacion === objetoEncontrado1.acreditacion);
            setAcreditacion(acreditaciones)
            setNuevoDatos((prevDatos) => [objetoEncontrado1]);
            setIdProp(props.gestion);

        } else if (props.producto) {
            const objetoEncontrado2 = rute2.find((objeto) => objeto.id === id);
            const acreditaciones = rute0.find((objeto) => objeto.acreditacion === objetoEncontrado2.acreditacion);
            setAcreditacion(acreditaciones);
            setNuevoDatos((prevDatos) => [objetoEncontrado2]);
            setIdProp(props.producto);

        } else if (props.industriales) {
            const objetoEncontrado3 = rute3.find((objeto) => objeto.id === id);
            const acreditaciones = rute0.find((objeto) => objeto.acreditacion === objetoEncontrado3.acreditacion);
            setAcreditacion(acreditaciones)
            setNuevoDatos((prevDatos) => [objetoEncontrado3]);
            setIdProp(props.industriales);
        }
    }
    // decision tree and prevent ifinite loop
    useEffect((props) => {
        getElement()
    }, [])

    // we assign path to key active
    const user = rute.find(item => item.id === idProp);

    return (
        <>
            <BannerServicios />
            <ContPagesEmpresa>
                <div className='ContSectionEm'>
                    <ContNavigationPc>
                        {
                            rute.map((item) =>
                                <Link to={item.url} key={item.key} id={item.id} >
                                    <div style={{ backgroundColor: idProp === item.id ? '#9cff2d' : '#ffffff' }}>
                                        <p>
                                            {item.nameNav2.split('\n').map((line, i) => {
                                                return (
                                                    <React.Fragment key={i}>
                                                        {line}
                                                        <br />
                                                    </React.Fragment>
                                                )
                                            })}
                                        </p>
                                    </div>
                                </Link>
                            )
                        }
                    </ContNavigationPc>
                    {/* <NavServicios /> */}
                    <ConNosotros>

                        {/* <MenuMobileNos>
                            {
                                itemsUrlUp.map((item) =>
                                    <Link to={item.url} key={item.name}><div>{item.name}<ArrowDropDownIcon /></div></Link>
                                )
                            }
                        </MenuMobileNos> */}

                        {/* <MobileTitle>
                            <p>{name.split('\n').map((line, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                )
                            })}<ArrowDropDownIcon /></p>
                        </MobileTitle> */}

                        <ContCardDeta>

                            {
                                cardGet.map((item) =>
                                    <CardDetalles key={item.id}  >
                                        <Helmet>
                                            <title>{`${item.helmet} – ITIC Colombia`}</title>
                                        </Helmet>
                                        <ContImgPc><img src={require(`../images/${item.imgPc}`)} alt={item.id} /></ContImgPc>
                                        <ContImgMobile><img src={require(`../images/${item.imgMobile}`)} alt={item.id} /></ContImgMobile>

                                        <div>
                                            <TitleSection>{item.text2}</TitleSection>
                                            <p>{item.normaNumero}</p>
                                            <ContTextoG>
                                                <ParagraphSection>
                                                    <span>
                                                        {item.paragraph1.split('\n').map((line, i) => {
                                                            return (
                                                                <React.Fragment key={i}>
                                                                    {line}
                                                                    <br />
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </span>

                                                    {item.text2 === 'REGLAMENTACIÓN COLOMBIANA' ? <BtnPolCol target='_blank' to='https://iticco.com/servicios/producto'>CONOCE MAS...</BtnPolCol> : ''}

                                                </ParagraphSection>

                                            </ContTextoG>

                                            {item.normaNumero !== true
                                                ?
                                                ''
                                                :
                                                <ContAcredt>
                                                    <p className='especial1'>ACREDITACIONES</p>
                                                    <ParagraphSection>{acreditacion.text0}</ParagraphSection><br />
                                                    <ParagraphSection className='especial'>{acreditacion.textP}</ParagraphSection>
                                                    <CardAcredtDetalles key={acreditacion.id}>
                                                        <div className='cardA'>
                                                            <span>
                                                                <img src={require(`../images/${acreditacion.img}`)} alt={acreditacion.name} />
                                                            </span>

                                                            <Link to={acreditacion.url} target='_blank' >
                                                                {acreditacion.name.split('\n').map((line, i) => {
                                                                    return (
                                                                        <React.Fragment key={i}>
                                                                            {line}
                                                                            <br />
                                                                        </React.Fragment>
                                                                    )
                                                                })}
                                                                <AddCircleIcon />
                                                            </Link>
                                                        </div>
                                                    </CardAcredtDetalles>

                                                </ContAcredt>
                                            }
                                            <ButtonSection ><div onClick={handleClick}>{item.btn1}</div></ButtonSection>
                                        </div>
                                    </CardDetalles>
                                )
                            }
                        </ContCardDeta>

                        {/* <MenuMobileNos>
                            {
                                itemsUrlDown.map((item) =>
                                    <Link to={item.url} key={item.name}><div>
                                        <p>{item.name.split('\n').map((line, i) => {
                                            return (
                                                <React.Fragment key={i}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            )
                                        })}</p>
                                        <ArrowDropDownIcon /></div></Link>
                                )
                            }
                        </MenuMobileNos> */}
                    </ConNosotros>
                </div>
                <ContacBar />
            </ContPagesEmpresa>
        </>
    )
}

export default DetallesServicios;