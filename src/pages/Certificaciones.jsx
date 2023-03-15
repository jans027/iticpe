import React from 'react'
import { Link } from 'react-router-dom'
import BannerEmpresa from '../components/BannerEmpresa'
import ContacBar from '../components/ContacBar'
import NavEmpresa from '../components/NavEmpresa'
import { data } from '../data/data'
import { CardCertificaciones, CardCertifMobile, ContCardsCerti, ContCardsCertiMobile, ContImgCard, TitleCertf } from '../styles/Certificaciones'
import { ContPagesEmpresa } from '../styles/NavEmpresa'
import { ConNosotros, MenuMobileNos, MobileTitle } from '../styles/Nosotros'
// Icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Slider from 'react-slick'
import { Helmet } from 'react-helmet'



const Certificaciones = () => {

  // get data
  const [datos] = data;
  const { empresa: { dropDownMenu: { certificaciones: { helmet, name, cards } } } } = datos;
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

  // silder......
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



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

            <TitleCertf>{name}</TitleCertf>

            <ContCardsCerti>
              {
                card.map((item) =>
                  <div className='ContCardsPrincipal'>
                    <CardCertificaciones key={item.id}>

                      <ContImgCard>
                        <img src={require(`../images/${item.img}`)} alt={item.name} />
                      </ContImgCard>

                      <Link>
                        {item.name}
                      </Link>
                    </CardCertificaciones>
                  </div>
                )
              }
            </ContCardsCerti>
            <ContCardsCertiMobile>
              <Slider {...settings}>

                {
                  card.map((item) =>
                    <div className='cont_card_mobile_acred'>
                      <CardCertifMobile key={item.id}>

                        <ContImgCard>
                          <img src={require(`../images/${item.img}`)} alt={item.name} />
                        </ContImgCard>

                        <Link>
                          {item.name}
                        </Link>
                      </CardCertifMobile>
                    </div>
                  )
                }

              </Slider>
            </ContCardsCertiMobile>

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

export default Certificaciones