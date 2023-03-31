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
                    <BtnBase
                        id="inicio"
                        className="inicio"
                    >
                        <Link to={inicio.url}>{inicio.name}</Link>
                    </BtnBase>

                    <DropdownContainer key={datos.certificaciones}>
                        <DropdownButton>{empresa.name}<ArrowDropDownSharpIcon /></DropdownButton>
                        <DropdownContent className='dropdown-content'>
                            {
                                empresasSub.map((item) =>
                                    <div onClick={(event) => handleClick2(event)} >
                                        <Link id={item.name} key={item.id} name="certificaciones" to={item.url}>
                                            {item.name}
                                        </Link><br />
                                    </div>
                                )
                            }
                        </DropdownContent>
                    </DropdownContainer>

                    {/* <ul>
                        <BtnBase
                            // id="basic-button"
                            aria-controls={open2 ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open2 ? 'true' : undefined}
                            onClick={(event) => handleClick2(event)}
                            name='cotizacion'
                        >
                            <Link>{empresa.name}<ArrowDropDownSharpIcon /></Link>
                        </BtnBase>
                        <MenuDrop
                            // id="basic-menu"
                            anchorEl={menu2}
                            open={open2}
                            onClose={handleClose2}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {
                                empresasSub.map((item) =>
                                    <MenuItem key={item.id} onClick={handleClose2}>
                                        <Link to={item.url}>{item.name}</Link>
                                    </MenuItem>
                                )
                            }
                        </MenuDrop>
                    </ul> */}

                    <DropdownContainer key={datos.certificaciones}>
                        <DropdownButton>{servicios.name}<ArrowDropDownSharpIcon /></DropdownButton>
                        <DropdownContent className='dropdown-content'>
                            {
                                serviciosSub.map((item) =>
                                    <div onClick={(event) => handleClick1(event)} >
                                        <Link id={item.name} key={item.id} name="certificaciones" to={item.url}>
                                            {item.name}
                                        </Link><br />
                                    </div>
                                )
                            }
                        </DropdownContent>
                    </DropdownContainer>

                    {/* <ul>
                        <BtnBase
                            // id="basic-button"
                            aria-controls={open1 ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open1 ? 'true' : undefined}
                            onClick={(event) => handleClick1(event)}
                            name='servicios'
                        >
                            <Link>{servicios.name}<ArrowDropDownSharpIcon /></Link>
                        </BtnBase>
                        <MenuDrop
                            // id="basic-menu"
                            anchorEl={menu1}
                            open={open1}
                            onClose={handleClose1}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {
                                serviciosSub.map((item) =>
                                    <MenuItem key={item.id} onClick={handleClose1}>
                                        <Link to={item.url}>{item.name}</Link>
                                    </MenuItem>
                                )
                            }
                        </MenuDrop>
                    </ul> */}

                    <BtnBase
                        id="inicio"
                        className="inicio"
                    >
                        <Link to={cotizacion.url}>{cotizacion.name}</Link>
                    </BtnBase>

                    <BtnBase
                        id="inicio"
                        className="inicio"
                    >
                        {/* <Link>{consulta.name}</Link> */}
                        <ModalForm />
                    </BtnBase>

                    <BtnBase
                        id="inicio"
                        className="inicio"
                    >
                        <Link to={contacto.url}>{contacto.name}</Link>
                    </BtnBase>

                    <DropdownContainer key={datos.certificaciones}>
                        <DropdownButton><ImgCropdown src={ImgPer} alt={ImgPer} />PER<ArrowDropDownSharpIcon /></DropdownButton>
                        <DropdownContent className='dropdown-content'>
                            {
                                countriesSub.map((item) =>
                                    <div onClick={(event) => handleClick1(event)} >
                                        <Link id={item.name} key={item.id} name="certificaciones" to={item.url}>
                                            <ImgCropdown src={require(`../images/${item.img}`)} alt={item.img} />
                                            {item.name}
                                        </Link><br />
                                    </div>
                                )
                            }
                        </DropdownContent>
                    </DropdownContainer>

                    {/* <ul>
                        <BtnBase
                            // id="basic-button"
                            aria-controls={open3 ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open3 ? 'true' : undefined}
                            onClick={(event) => handleClick3(event)}
                            name='servicios'
                        >
                            <img src={ImgPer} alt="" />
                            <Link>PER<ArrowDropDownSharpIcon /></Link>
                        </BtnBase>
                        <MenuDrop
                            // id="basic-menu"
                            anchorEl={menu3}
                            open={open3}
                            onClose={handleClose3}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {
                                countriesSub.map((item) =>
                                    <MenuItem key={item.id} onClick={handleClose3}>
                                        <Link to={item.url}><img src={require(`../images/${item.img}`)} alt="" /> {item.name}</Link>
                                    </MenuItem>
                                )
                            }
                        </MenuDrop>
                    </ul> */}
                </MenuPcLaptop>

                <MenuMobile />
            </div>
            <div>
            </div>
        </StyledNav>
    );
};

export default NavBar;


