import React, { useState } from "react";
// import Slider from "react-slick";
// component
import BannerPrecarga from "./BannerPrecarga";
// styles
import { ContCardImg, ContImgCarousel } from "../styles/SliderBanner";
//data
import { data } from "../data/data";


const SimpleSlider = () => {

    // get data
    const [datos] = data;
    //destructuring data
    const { inicio: { banners } } = datos;
    // extract second level data
    const card = Object.values(banners)

    // styles from slider
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

    // managment from pre charge banner
    const [sliderLoaded, setSliderLoaded] = useState(false);

    const handleSliderLoad = () => {
        setSliderLoaded(true);
    };

    return (
        <>
            <ContImgCarousel  {...settings}>
                {
                    card.map((item) =>
                        <ContCardImg className={sliderLoaded ? 'visible':'invisible'} key={item.id}>
                            <div key={item.id}>
                                <img onLoad={handleSliderLoad} className="imgDk" src={require(`../images/${item.imgDk}`)} alt={item.id} />
                                <img className="imgTb" src={require(`../images/${item.imgTb}`)} alt={item.id} />
                                <img className="imgMb" src={require(`../images/${item.imgMb}`)} alt={item.id} />
                            </div>
                        </ContCardImg>
                    )
                }
            </ContImgCarousel>
            {sliderLoaded ? <p></p> : <BannerPrecarga/>}
        </>
    );

}
export default SimpleSlider;