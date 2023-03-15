import React from 'react'
import { Link } from 'react-router-dom'
import BannerEmpresa from '../components/BannerEmpresa'
import ContacBar from '../components/ContacBar'
import NavEmpresa from '../components/NavEmpresa'
import { data } from '../data/data'
import { ContPagesEmpresa } from '../styles/NavEmpresa'
import { Cards, ConCards, ConImg, ConNosotros, ContNumber1, MenuMobileNos, MobileTitle, Paragraph, TitleSection } from '../styles/Nosotros'
// Icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Helmet } from 'react-helmet'




const Nosotros = () => {

  //Get data
  const [datos] = data;
  const { empresa: { dropDownMenu: { nosotros: { helmet,name, paragraph1, paragraph2, paragraph3, img, titleSeccion, cards } } } } = datos

  // extract values of cards
  const card = Object.values(cards);

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

            <ContNumber1>
              <div>
                <img src={require(`../images/${img}`)} alt={img} />
              </div>
              <p className='title_section'>{name}</p>
              <p className='paragraph_section'>{paragraph1}</p>
              <p className='paragraph_section'>{paragraph2}</p>
              <p className='paragraph_section'>{paragraph3}</p>
            </ContNumber1>

            <TitleSection><p>{titleSeccion}</p></TitleSection>
            <ConCards>
              {
                card.map((item) =>
                  <Cards key={item.id}>
                    <Paragraph>
                      <div>
                        <p className='title_card'>{item.title}</p>
                        <p className='p_card'>{item.paragraph}</p>
                      </div>
                    </Paragraph>
                    <ConImg>
                      <img src={require(`../images/${item.img}`)} alt={item.id} />
                    </ConImg>
                  </Cards >
                )
              }
            </ConCards>

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

export default Nosotros