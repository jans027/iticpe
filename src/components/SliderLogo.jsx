import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { data } from "../data/data";
import { CardCarouselLogo, CardLogo, ContSlideLogo, LinkExperiencia } from "../styles/SliderLogo";

// Get Data
const [datos] = data;
const { logos, empresa: { dropDownMenu: { proyectos: { url } } } } = datos;
const card = Object.values(logos.cards);
// console.log( card )


export default class SliderLogo extends Component {


    render() {
        const settings = {
            infinite: true,
            slidesToShow: 6,
            pauseOnHover: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1379,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 4,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        centerMode: false,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <ContSlideLogo>
                <div className="slideCont2">
                    <Slider {...settings}>
                        {
                            card.map((item) =>
                                <CardLogo key={item.id}>
                                    <CardCarouselLogo>
                                        <img src={require(`../images/${item.img}`)} alt={item.id} />
                                    </CardCarouselLogo>
                                </CardLogo>
                            )
                        }
                    </Slider>
                </div>
                <LinkExperiencia>
                    <Link to={url}>CONOCE MÁS</Link>
                </LinkExperiencia>
            </ContSlideLogo>
        );
    }
}