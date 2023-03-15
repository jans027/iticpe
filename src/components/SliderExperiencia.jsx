import React from 'react'
import { Link } from 'react-router-dom';
import { data } from '../data/data';
import { ContSliderAcr } from '../styles/SecAcreditaciones';
import { CardExperiencia2, ConSliderExp2, ContCardExperiencia2 } from '../styles/SliderExperiencia';


const SliderExperiencias = () => {

    // get data
    const [datos] = data;
    const { empresa: { dropDownMenu: { proyectos: { url, cards } } } } = datos;
    const card = Object.values(cards);





    // silder......
    const settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        speed: 3500,
        autoplaySpeed: 4500,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <ContSliderAcr>
                <ConSliderExp2 {...settings}>

                    {
                        card.map((item) =>
                            <div key={item.id} className='sub_cont_card2'>
                                <ContCardExperiencia2 className='global-card-slider'>
                                    <CardExperiencia2 className='cardExperiencia'>
                                        <Link to={url}>
                                            <div>
                                                <img src={require(`../images/${item.img}`)} alt={item.name} />
                                            </div>
                                            <span className='cardTitle'>
                                                <p>{item.title}</p>
                                            </span>
                                            <span className='cardText'>
                                                {/*limit the numbers of words on a card */}
                                                <p>{item.text.split(' ').slice(0, 10).join(' ')}{item.text.split(' ').length > 10 ? '' : ''}</p>
                                                <p>. . . VER MÁS</p>
                                            </span>
                                        </Link>
                                    </CardExperiencia2>
                                </ContCardExperiencia2>
                            </div>
                        )
                    }

                </ConSliderExp2>
            </ContSliderAcr>
        </>
    )
}

export default SliderExperiencias;