import * as React from 'react';
import Box from '@mui/material/Box';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// hamburguer menu
import MenuIcon from '@mui/icons-material/Menu';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { CloseImg, ContMenuMobile, ImgCountres, LinkAccordion, LinkMenu, Prueba } from '../styles/MenuMobile';
// Accordion
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { data } from '../data/data';
// Image
import ImgCol from '../images/Bandera-col.png';
import ImgPer from '../images/Bandera-Per.png';
// import SignalCellularAlt1BarIcon from '@mui/icons-material/SignalCellularAlt1Bar';
import ModalForm from './ModalForm';
//Icons
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
    ))
    (({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}{...props}/>
    ))
    (({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .00)',
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(0),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),

    // borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function MenuMobile() {

    //get data
    const [datos] = data;
    //destructuring data
    const {
        servicios,
        empresa,
        consulta,
        cotizacion,
        contacto,
        countries
    } = datos;
    const serviciosSub = Object.values(servicios.dropDownMenu);
    const empresasSub = Object.values(empresa.dropDownMenu);
    const countriesSub = Object.values(countries);

    const [state, setState] = React.useState({
        right: false,
    });

    // ....................................................
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel, props) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    // ....................................................

    // ....................................................
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    // ....................................................


    const list = (anchor) => (
        <Box
            className='SlideMenu'
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
            role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {[''].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <CloseImg>
                                <CloseSharpIcon className='closeBtn' onClick={toggleDrawer(anchor, false)} />
                            </CloseImg>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            {/* <Divider /> */}

            <Prueba expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography sx={{ fontWeight:700 }}>{empresa.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {
                        empresasSub.map((item) =>
                            <LinkAccordion key={item.id}>
                                <Link
                                    onClick={toggleDrawer(anchor, false)}
                                    to={item.url}>{item.name}</Link>
                            </LinkAccordion>
                        )
                    }
                </AccordionDetails>
            </Prueba>

            <Prueba  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography sx={{ fontWeight:700 }}>{servicios.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {
                        serviciosSub.map((item) =>
                            <LinkAccordion key={item.id} >
                                <Link
                                    onClick={toggleDrawer(anchor, false)}
                                    to={item.url}>{item.name}
                                </Link>
                            </LinkAccordion>
                        )
                    }
                </AccordionDetails>
            </Prueba>

            {/* <LinkMenu>
                <Link onClick={toggleDrawer(anchor, false)} to={cotizacion.url}>{cotizacion.name}</Link>
            </LinkMenu> */}
            
            <LinkMenu>
                <Link onClick={toggleDrawer(anchor, false)} to={consulta.url}><ModalForm/></Link>
            </LinkMenu>


            <LinkMenu>
                <Link onClick={toggleDrawer(anchor, false)} to={contacto.url}>{contacto.name}</Link>
            </LinkMenu>

            <Prueba expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <ImgCountres src={ImgCol} alt="imagen colombia" />
                    <Typography sx={{ fontWeight:700, width:'auto' }}>COL</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {
                        countriesSub.map((item) =>
                        <LinkAccordion key={item.id}>
                            <ImgCountres src={ImgPer} alt={item.id} />
                                <Link
                                    onClick={toggleDrawer(anchor, false)}
                                    to={item.url}>{item.name}</Link>
                            </LinkAccordion>
                        )
                    }
                </AccordionDetails>
            </Prueba>

        </Box>
    );

    return (
        <>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>

                    <Button className='contMenuHamburguer'
                        onClick={toggleDrawer(anchor, true)}
                    >
                        <MenuIcon className="menuHamburguer" />
                    </Button>
                    <ContMenuMobile
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </ContMenuMobile>
                </React.Fragment>
            ))}
        </>
    );
}

