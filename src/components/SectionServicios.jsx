import React from 'react'
import { data } from '../data/data';
import { SubTitleSection, TitleSection } from '../styles/SecAcreditaciones';
import { CardServicios, ConSectionServicios, ContCardsServi, ContTextCard, EnlaceBtnS, EnlaceImg } from '../styles/SectionServicios';


const SectionServicios = () => {

    // get data
    const [datos] = data;
    // destructuring data
    const {
        servicios,
    } = datos;
    const serviciosSub = Object.values(servicios.dropDownMenu);
    // console.log(serviciosSub)

    // search word 
    const boldtWord = "INSPECCIÓN, CERTIFICACIÓN Y ENSAYOS";
    const parts = servicios.subTitle.split(boldtWord);



    return (
        <>
            <ConSectionServicios>
                <TitleSection>{servicios.name}</TitleSection>
                <SubTitleSection>
                    {parts[0]}
                    <span style={{ fontWeight: 'bold' }}>{boldtWord}</span>
                    {parts[1]}
                </SubTitleSection>
                <ContCardsServi>
                    {
                        serviciosSub.map((item) =>
                            <CardServicios key={item.id}>
                                <div>
                                    <EnlaceImg to={item.url}>
                                            <img src={require(`../images/${item.cardImg}`)} alt={item.name} />
                                    </EnlaceImg>
                                    <ContTextCard>
                                        <h4>{item.name}</h4>
                                        <span>
                                            <p>{item.cardText.split('\n').map((line, i) => {
                                                return (
                                                    <React.Fragment key={i}>
                                                        {line}
                                                        <br />
                                                    </React.Fragment>
                                                )
                                            })}</p>
                                        </span>
                                    </ContTextCard>
                                </div>
                                <div>
                                    <EnlaceBtnS to={item.url}>{item.btn1}</EnlaceBtnS>
                                </div>
                            </CardServicios>
                        )
                    }
                </ContCardsServi>

            </ConSectionServicios>
        </>
    )
}

export default SectionServicios;