import React from 'react';
//import slider slick
import Slider from 'react-slick';
//import data
import { data } from '../data/data';
//styles
import { CardCarousel, Cards03, ContcarouselPilares } from '../styles/CarouselPilares';


const CarouselPilares = () => {

    // get data
    const [datos] = data;
    //destructuring data
    const { empresa: { dropDownMenu: { pilares: { cards0 } } } } = datos;
    // extract values of object
    const card1 = Object.values(cards0);


    // silder......
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        // slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1134,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <>
            <ContcarouselPilares>
                <Slider {...settings}>
                    {
                        card1.map((item) =>
                            <CardCarousel key={item.id}>
                                <Cards03>
                                    <img src={require(`../images/${item.img}`)} alt={item.id} />
                                    <p className='title_p01'>{item.title}</p>
                                    <p className='paragraph_p01'>{item.text}</p>
                                </Cards03>
                            </CardCarousel>
                        )
                    }
                </Slider>
            </ContcarouselPilares>
        </>
    );
};

export default CarouselPilares;
