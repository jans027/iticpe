import React from 'react'
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
import datos_personales from '../documents/1.-POLITICA-DE-PROTECCION-DE-DATOS-PERSONALES.pdf';
import calidad from '../documents/Politica-de-calidad.pdf';
import regulacion from '../documents/Politicas-de-regulacion-plan-de-seguridad-vial.pdf';
import negocio from '../documents/Condiciones-generales-del-negocio-V003.pdf';
import certificacion_personas from '../documents/ITIC-CP-R-001-REGLAMENTO-CERTIFICACION-DE-PERSONASV010.pdf';
import etica from '../documents/ITIC-C-NA-DI-002-COMPROMISO-DE-CONFIDENCIALIDAD-ETICA-Y-CONDUCTA-4.doc.pdf';
import navegacion from '../documents/1.1.-POLITICA-DE-DATOS-DE-NAVEGACION.pdf';
import tabaco from '../documents/Politica-sobre-no-uso-de-alcohol-drogas-y-tabaco.pdf';
import seg_vial from '../documents/Politica-de-seguridad-vial.pdf';
import reg_trabajo from '../documents/Reglamento-interno-de-trabajo-ITIC-Colombia.pdf';
import certificacion from '../documents/ITIC-T-P-DI-002-REGLAS-DE-CERTIFICACION-V11.pdf';
import certificacion_personas2 from '../documents/ITIC-C-NA-DI-009-POLITICA-DE-SEGURIDAD-PROCESO-DE-CERTIFICACION-DE-PERSONAS-V2-1.pdf';
import alcance from '../documents/ITIC-C-NA-DI-010-POLITICA-DE-SUSPENSION-RETIRO-O-REDUCCION-DEL-ALCANCE-DE-CERTIFICACION-PERSONAS-V2-1.pdf';
import info_general from '../documents/informacion-general-certificacion-de-personas.pdf';
import gestion_salud from '../documents/Politica-de-gestion-integral-salud-seguridad-y-ambiente-HSE.pdf';
import conflictos from '../documents/Directiva-para-evitar-conflictos-de-intereses-y-corrupcion-.pdf';
import independiencia from '../documents/ITIC-C-NA-DI-003-POLITICA-DE-IMPARCIALIDAD-INDEPENDENCIA-Y-CONFIDENCIALIDAD-V7.pdf';
import { Helmet } from 'react-helmet'





const Politicas = () => {

  //get data
  const [datos] = data;
  const { empresa: { dropDownMenu: { politicas: { helmet, name, cards } } } } = datos;
  const card = Object.values(cards);
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
      <Helmet><title>{helmet} – ITIC Colombia</title></Helmet>
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

            <TitleSectionPro><p>{name}</p></TitleSectionPro>

            <ContCardPol>
              <CardPol target='_blank' to={datos_personales} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>Política de protección de datos personales</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={calidad} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>Política de la calidad (servicios industriales)</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={regulacion} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>Política de regulación plan de seguridad vial</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={negocio} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>Condiciones generales del negocio</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={certificacion_personas} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>ITIC-CP-R-001 reglamento certificación de personas</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={etica} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>ITIC-C-NA-DI-002 compromiso de confidencialidad ética y conducta</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={navegacion} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>Política de datos de navegación</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={tabaco} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>Política sobre no uso de alcohol, drogas y tabaco</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={reg_trabajo} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>Reglamento interno de trabajo Itic Colombia</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={seg_vial} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>Política de seguridad vial</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={certificacion} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>ITIC-T-P-DI-002 Reglas de certificación</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={certificacion_personas2} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>ITIC-C-NA-DI-009 Política de seguridad proceso de certificación de personas</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={info_general} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>Información general (certificación de personas)</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={alcance} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>ITIC-C-NA-DI-010 Política de suspensión, retiro o reducción del alcance de certificación personas</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={gestion_salud} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>Política de gestión integral salud, seguridad y ambiente (HSE)</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={conflictos} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>Directiva para evitar conflictos de intereses y corrupción</p></div></div>
              </CardPol>
              <CardPol target='_blank' to={independiencia} rel="noopener noreferrer">
                <div className='text_img_poli'><FileOpenOutlinedIcon /></div>
                <div><div className='text_card_poli'><p>
                  ITIC-C-NA-DI-003 política de imparcialidad independencia y confidencialidad</p></div></div>
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