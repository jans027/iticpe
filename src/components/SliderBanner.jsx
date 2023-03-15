import React, { Component } from "react";
import { data } from "../data/data";
// import Slider from "react-slick";
import { ContCardImg, ContImgCarousel } from "../styles/SliderBanner";

// get data
const [datos] = data;
const { inicio: { banners } } = datos;
const card = Object.values(banners)

export default class SimpleSlider extends Component {

    render() {

        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1300,
            pauseOnHover: true,
            cssEase: "linear",
        };
        return (
            <>
                <ContImgCarousel {...settings}>
                    {
                        card.map((item) =>
                            <ContCardImg key={item.id}>
                                <div key={item.id}>
                                    <img className="imgDk" src={require(`../images/${item.imgDk}`)} alt={item.id} />
                                    <img className="imgTb" src={require(`../images/${item.imgTb}`)} alt={item.id} />
                                    <img className="imgMb" src={require(`../images/${item.imgMb}`)} alt={item.id} />
                                </div>
                            </ContCardImg>
                        )
                    }
                </ContImgCarousel>
            </>
        );
    }
}