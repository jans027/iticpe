import React from 'react'
import { Link } from 'react-router-dom';
import { data } from '../data/data';
import { CardAcred, ContSliderAcr, SubTitleSection, TitleSection } from '../styles/SecAcreditaciones';
import { ConSectionServicios } from '../styles/SectionServicios';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Slider from 'react-slick';


const SecAcreditaciones = () => {

    // get data
    const [datos] = data;
    const { empresa: { dropDownMenu: { acreditaciones: { documentOnac: { title, subTitle, cards } } } } } = datos;
    const card = Object.values(cards);

    // search word 
    const boldtWord = "ITICCOL";
    const parts = subTitle.split(boldtWord);

    // silder......
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <ConSectionServicios>
                <TitleSection>{title}</TitleSection>
                <SubTitleSection>
                    {parts[0]}
                    <span style={{ fontWeight: 'bold' }}>{boldtWord}</span>
                    {parts[1]}
                </SubTitleSection>
                <ContSliderAcr>
                    <Slider {...settings}>

                        {
                            card.map((item) =>
                                    <CardAcred key={item.id}>
                                        <span>
                                            <p>{item.textP.split('\n').map((line, i) => {
                                                return (
                                                    <React.Fragment key={i}>
                                                        {line}
                                                        <br />
                                                    </React.Fragment>
                                                )
                                            })}</p>
                                        </span>

                                        <span>
                                            <img src={require(`../images/${item.img}`)} alt={item.name} />
                                        </span>

                                        <Link to={item.url} target='_blank' >
                                            {item.name.split('\n').map((line, i) => {
                                                return (
                                                    <React.Fragment key={i}>
                                                        {line}
                                                        <br />
                                                    </React.Fragment>
                                                )
                                            })}
                                            <AddCircleIcon />
                                        </Link>
                                    </CardAcred>
                            )
                        }

                    </Slider>
                </ContSliderAcr>


            </ConSectionServicios>
        </>
    )
}

export default SecAcreditaciones;