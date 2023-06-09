import React, { useEffect, useRef, useState } from 'react'
import BannerEmpresa from '../components/BannerEmpresa'
import NavEmpresa from '../components/NavEmpresa'
import { data } from '../data/data'
import { ContPagesEmpresa } from '../styles/NavEmpresa'
import { ConNosotros, MenuMobileNos, MobileTitle } from '../styles/Nosotros'
import { CardPol, ContCardPol } from '../styles/Politicas'
import { TitleSectionPro } from '../styles/Proyectos'
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import ContacBar from '../components/ContacBar'
import { Link } from 'react-router-dom'
// Icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// Documents
import codigo_conducta from '../documents/CCC-01-CODIGO-DE-CONDUCTA-CORPORATIVO-(R01).pdf';
import condiciones_generales from '../documents/ITIC-DG-NA-DI-002-CONDICIONES-GENERALES-DEL-NEGOCIO-(R07).pdf';
import declaracion_independencia from '../documents/ITIC-DG-NA-DI-003-DECLARACION-DE-INDEPENDENCIA-IMPARCIALIDAD-E-INTEGRIDAD-(R05).pdf';
import politica_suspension from '../documents/ITIC-DG-NA-DI-004-POLITICA-DE-SUSPENSION-DE-TAREAS-(R02).pdf';
import politica_integral from '../documents/ITIC-DG-NA-PI-001-POLITICA-INTEGRAL-QHSE-ITICPE-(R08).pdf';
import computo from '../documents/PSI-01-MANEJO-DE-EQUIPOS-DE-COMPUTO-Y-AYUDAS-INFORMATICAS-(R01).pdf';
import testing_inspection from '../documents/ITIC PERU_REGLAMENTO INTERNO DE TRABAJO 02.23.pdf';
import quejas_apelaciones from '../documents/ITIC-Q&A-C-PR-005-QUEJAS-Y-APELACIONES-(R09).pdf';
import PolíticaProtecciónDatos from '../documents/Política-de-protección-de-datos-ITICPE.pdf'
//import helmet
import { Helmet } from 'react-helmet'





const Politicas = () => {

  //get data
  const [datos] = data;
  const { empresa: { dropDownMenu: { politicas: { helmet, name, documents } } } } = datos;
  const card = Object.values(documents);
  // console.log(card)

  //.......................................................
  // extract values of dropDownMenu
  const items = Object.values(datos.empresa.dropDownMenu);
  // go through the array and divide it in two
  const indice = items.findIndex((item) => item.name === name)

  const itemsFind0 = items.slice(0, indice)
  const itemsUrlUp = Object.values(itemsFind0)
  // console.log(itemsUrlUp)

  const itemsFind1 = items.slice(indice + 1)
  const itemsUrlDown = Object.values(itemsFind1)
  // console.log(itemsUrl)
  //.......................................................

  return (
    <>
      <Helmet>
        <title>{helmet} – ITICPE</title>
      </Helmet>
      <BannerEmpresa />
      <ContPagesEmpresa>
        <div className='ContSectionEm'>
          <NavEmpresa />

          <ConNosotros>

            <MenuMobileNos>
              {
                itemsUrlUp.map((item) =>
                  <Link to={item.url} key={item.name}><div>{item.name}<ArrowDropDownIcon /></div></Link>
                )
              }
            </MenuMobileNos>

            <MobileTitle>
              <p>{name.split('\n').map((line, i) => {
                return (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                )
              })}<ArrowDropDownIcon /></p>
            </MobileTitle>
            <h1>POLÍTICAS, CÓDIGOS Y REGLAMENTOS</h1>

            <TitleSectionPro><p>{name}</p></TitleSectionPro>

            <ContCardPol>

              <CardPol type="application/pdf" target='_blank' to={PolíticaProtecciónDatos} >
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>Política de Protección de Datos</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={codigo_conducta} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>Codigo De Conducta Corporativo</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={condiciones_generales} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>Condiciones Generales del Negocio</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={declaracion_independencia} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>Declaracion De Independencia Imparcialidad E Integridad</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={politica_suspension} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>Politica De Suspension De Tareas</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={politica_integral} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>Politica Integral Qhse</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={computo} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>Manejo De Equipos De Computo Y Ayudas InformáTicas</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={testing_inspection} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>Reglamento Interno de Trabajo</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={quejas_apelaciones} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>Quejas y Apelaciones</p></div></div>
              </CardPol>


            </ContCardPol>

            <MenuMobileNos>
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
            </MenuMobileNos>

          </ConNosotros>
        </div>
        <ContacBar />
      </ContPagesEmpresa>
    </>
  )
}

export default Politicas