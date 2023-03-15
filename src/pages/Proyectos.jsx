import React from 'react'
import { Link } from 'react-router-dom'
import BannerEmpresa from '../components/BannerEmpresa'
import ContacBar from '../components/ContacBar'
import NavEmpresa from '../components/NavEmpresa'
import SliderLogoExperiencia from '../components/SliderLogoExperiencia'
// import SliderTestimonio1 from '../components/SliderTestimonio1'
import { data } from '../data/data'
import { ContPagesEmpresa } from '../styles/NavEmpresa'
import { ConNosotros, MenuMobileNos, MobileTitle } from '../styles/Nosotros'
import { CardProyect, ContCardProyect, ContCardProyecto, ContImgCardP, ContTextP, TitleSectionPro } from '../styles/Proyectos'
// Icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SliderExperiencias from '../components/SliderExperiencia'
import { Helmet } from 'react-helmet'



const Proyectos = () => {

  //get data
  const [datos] = data;
  const { empresa: { dropDownMenu: { proyectos: { helmet, name, nameSecction, proyecto, cards } } } } = datos;
  const cardProyecto = Object.values(cards);

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

            <TitleSectionPro><p>{nameSecction}</p></TitleSectionPro>

            <div><SliderLogoExperiencia /></div>

            {/* <div><SliderTestimonio1 /></div> */}

            <ContCardProyect>
              {
                cardProyecto.map((item) =>
                  <ContCardProyecto>
                    <ContTextP>
                      <p className='text_card_1'>{item.title}</p>
                      <p className='text_card_2'>{item.text}</p>
                    </ContTextP>
                    <ContImgCardP><img src={require(`../images/${item.img}`)} alt="" /></ContImgCardP>
                  </ContCardProyecto>
                )
              }
            </ContCardProyect>

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

export default Proyectos