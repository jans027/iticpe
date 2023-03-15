import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ContacBar from '../components/ContacBar'
import { data } from '../data/data'
import { ContPagesEmpresa } from '../styles/NavEmpresa'
import { ConNosotros, MenuMobileNos, MobileTitle, } from '../styles/Nosotros'
// Icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NavServicios from '../components/NavServicios'
import BannerServicios from '../components/BannerServicios'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ContCard1, ContCard2, ContImg1, ContText1 } from '../styles/Gestion'
import { CardServicios, ContCardServicios, ContImage, ContLink } from '../styles/CardsServicios'
import { Helmet } from 'react-helmet'

const Producto = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    
    //Get data
    const [datos] = data;
    const { servicios: { dropDownMenu: { producto: {helmet, name, cardImg, subTitle2, cards } } } } = datos


    // extract values of cards
    const card = Object.values(cards);

    //.......................................................
    // extract values of dropDownMenu
    const items = Object.values(datos.servicios.dropDownMenu);
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
            <BannerServicios />
            <ContPagesEmpresa>
                <div className='ContSectionEm'>
                    <NavServicios />
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

                        <ContCard1>
                            <ContCard2>
                                <ContImg1>
                                    <img src={require(`../images/${cardImg}`)} alt={cardImg} />
                                </ContImg1>
                                <ContText1>
                                    <p className='title_section'>{name}</p>
                                    <p className='paragraph_section'>{subTitle2}</p>
                                </ContText1>
                            </ContCard2>
                        </ContCard1>

                        <ContCardServicios>
                            {
                                card.map((item) =>
                                    <CardServicios key={item.id}>

                                        <ContImage>
                                            <img src={require(`../images/${item.img}`)} alt={item.text1} />
                                        </ContImage>

                                        <ContLink to={item.id}>
                                            <div>
                                                <p>
                                                    {item.text1.split('\n').map((line, i) => {
                                                        return (
                                                            <React.Fragment key={i}>
                                                                {line}
                                                                <br />
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                </p>
                                                <AddCircleIcon />
                                            </div>
                                        </ContLink>
                                    </CardServicios>
                                )
                            }
                        </ContCardServicios>

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

export default Producto