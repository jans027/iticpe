import React, { Component } from 'react'
// components
import Address from '../components/Address';
import TrabajaForm from '../components/TrabajaForm';
//data
import { data } from '../data/data';
// images
import ImgBannerPc from '../images/shutterstock_150293498---copia.png';
import ImgBannerMobile from '../images/contacto_mobile.png';
// helmet
import { Helmet } from 'react-helmet';
//styles
import { ContContact, ContContactForm, ContImgComtact } from '../styles/Contact';


// get data
const [datos] = data;
const { empresa: { dropDownMenu: { trabaja: {
    id,
    name,
    helmet,
    subTitle,
} } } } = datos;


export default class Trabaja extends Component {

    constructor(props) {
        super(props);

        this.state = {
            screenWidth: window.innerWidth
        };
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    handleResize = () => {
        this.setState({
            screenWidth: window.innerWidth
        });
    };

    render() {

        // we get the value from the display and change the state
        const { screenWidth } = this.state;


        return (
            <>
                <Helmet><title>{helmet} – ITIC Colombia</title></Helmet>

                <ContContact>
                    <ContImgComtact>
                        <img src={screenWidth < 768 ? ImgBannerMobile : ImgBannerPc} alt={id} />
                    </ContImgComtact>

                    <ContContactForm >
                        <div className='contContact2'>
                            <p className='title'>{name}</p>
                            <p className='subTitle'>
                                {subTitle.split('\n').map((line, i) => {
                                    return (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    )
                                })}
                            </p>
                            <TrabajaForm />
                        </div>
                    </ContContactForm>
                </ContContact>
                <Address />
                {/* <SecMap /> */}
            </>
        )
    }
}