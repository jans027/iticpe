import React from 'react'
import { Helmet } from 'react-helmet'
import { data } from '../data/data';
import { ContPoliticas, ParagraphCard, TitleCard, TitlePoliticas } from '../styles/PoliticasNavegacion';

const PoliticasNavegacion = () => {

    //Get data
    const [datos] = data;
    const { PoliticasNavegacion: { helmet, text1, cards } } = datos;
    const card = Object.values(cards)

    return (
        <>
            <Helmet><title>{helmet} – ITIC Colombia</title></Helmet>

            <ContPoliticas>
                <TitlePoliticas>{text1}</TitlePoliticas>
                <div>
                    {
                        card.map((item) =>
                            <div key={item.id}>
                                <TitleCard>{item.text1}</TitleCard>
                                <ParagraphCard>{item.text2.split('\n').map((line, i) => {
                                    return (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    )
                                })}</ParagraphCard>
                            </div>
                        )
                    }
                </div>
            </ContPoliticas>

        </>
    )
}

export default PoliticasNavegacion