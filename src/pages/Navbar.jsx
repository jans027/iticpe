import * as React from "react";
import { Link } from "react-router-dom";
import { data } from "../data/data";
import { BtnBase, DropdownButton, DropdownContainer, DropdownContent, ImgCropdown, LogoNav, MenuDrop, MenuPcLaptop, StyledNav } from "../styles/NavBar";
// Menu
import MenuItem from '@mui/material/MenuItem';
// icons
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
// images
import Logo from '../images/Logo-iticpe.svg';
import ImgPer from '../images/Bandera-Per.png';
import MenuMobile from "../components/MenuMobile";
import ModalForm from "../components/ModalForm";





const NavBar = () => {
    // get data
    const [datos] = data;
    // destructuring data
    const {
        inicio,
        servicios,
        empresa,
        cotizacion,
        contacto,
        countries
    } = datos;
    const serviciosSub = Object.values(servicios.dropDownMenu);
    const empresasSub = Object.values(empresa.dropDownMenu);
    const countriesSub = Object.values(countries);
    // console.log(countriesSub)

    // menu 1
    const [menu1, setMenu1] = React.useState(null);
    const open1 = Boolean(menu1);

    const handleClick1 = (event) => {
        setMenu1(event.currentTarget);
        // console.log(event.target.outerText)
    };
    const handleClose1 = () => {
        setMenu1(null);
    };
    // menu 2
    const [menu2, setMenu2] = React.useState(null);
    const open2 = Boolean(menu2);

    const handleClick2 = (event) => {
        setMenu2(event.currentTarget);
        // console.log(event.target.outerText)
    };
    const handleClose2 = () => {
        setMenu2(null);
    };

    // menu 3
    const [menu3, setMenu3] = React.useState(null);
    const open3 = Boolean(menu3);

    const handleClick3 = (event) => {
        setMenu3(event.currentTarget);
        // console.log(event.target.outerText)
    };
    const handleClose3 = () => {
        setMenu3(null);
    };




    return (
        <StyledNav>
            <div className="Address">
                <div>
                    <span className="redes_barra_nav"><Link target="_blank" to={inicio.instagramUrl}><InstagramIcon /></Link></span>
                    <span className="redes_barra_nav"><Link target="_blank" to={inicio.facebookUrl}><FacebookIcon /></Link></span>
                    <span className="redes_barra_nav"><Link target="_blank" to={inicio.twitterUrl}><TwitterIcon /></Link></span>
                    <span className="redes_barra_nav"><Link target="_blank" to={inicio.linkedInUrl}><LinkedInIcon /> </Link></span>
                    <span><PhoneAndroidOutlinedIcon /><p>{inicio.phone}</p></span>
                    <Link className="mailTo" to={`mailto:${inicio.email}`}><EmailOutlinedIcon /><p>{inicio.email}</p></Link>
                </div>
            </div>

            <div className="ContMenu">

                <LogoNav to={inicio.url}>
                    <img src={Logo} alt={inicio.id} />
                </LogoNav>

                <MenuPcLaptop>
                    <BtnBase id="inicio" className="inicio">
                        <Link to={inicio.url}>{inicio.name}</Link>
                    </BtnBase>

                    <DropdownContainer key={datos.certificaciones}>
                        <DropdownButton>{empresa.name}<ArrowDropDownSharpIcon /></DropdownButton>
                        <DropdownContent className='dropdown-content'>
                            {
                                empresasSub.map((item, index) =>
                                    <div key={item.id} onClick={(event) => handleClick2(event)} >
                                        <Link id={item.name} name="certificaciones" to={item.url}>
                                            {item.name}
                                        </Link><br />
                                    </div>
                                )
                            }
                        </DropdownContent>
                    </DropdownContainer>

                    <BtnBase id="inicio" className="inicio">
                        <Link to={cotizacion.url}>{cotizacion.name}</Link>
                    </BtnBase>

                    <BtnBase id="inicio" className="inicio">
                        <ModalForm />
                    </BtnBase>

                    <BtnBase id="inicio" className="inicio">
                        <Link to={contacto.url}>{contacto.name}</Link>
                    </BtnBase>

                    <DropdownContainer key={datos.certificaciones}>
                        <DropdownButton><ImgCropdown src={ImgPer} alt={ImgPer} />PER<ArrowDropDownSharpIcon /></DropdownButton>
                        <DropdownContent className='dropdown-content'>
                            {
                                countriesSub.map((item) =>
                                    <div key={item.id} onClick={(event) => handleClick1(event)} >
                                        <Link id={item.name} key={item.id} name="certificaciones" to={item.url}>
                                            <ImgCropdown src={require(`../images/${item.img}`)} alt={item.img} />
                                            {item.name}
                                        </Link><br />
                                    </div>
                                )
                            }
                        </DropdownContent>
                    </DropdownContainer>

                </MenuPcLaptop>

                <MenuMobile />
            </div>
            <div>
            </div>
        </StyledNav>
    );
};

export default NavBar;


