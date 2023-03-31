import React from 'react'
import { ContMap } from '../styles/Address';

const SecMap = (props) => {

    const {
        iframeSource = '<iframe id="containerIframe"  style="border:0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.0741431259967!2d-77.04091094902597!3d-12.10707674628105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c840b6f2f265%3A0x531727d9a5e4b27b!2sOficina%20203%2C%20Edificio%20Pardo%20%2B%20Aliaga%2C%20Av.%20Pardo%20y%20Aliaga%20675%2C%20San%20Isidro%2015073%2C%20Per%C3%BA!5e0!3m2!1ses!2sco!4v1680272942548!5m2!1ses!2sco"></iframe>'
    } = props;


    return (
        <>
            <ContMap>
                <div
                    dangerouslySetInnerHTML={{ __html: iframeSource }}>
                </div>
            </ContMap>
        </>
    )
}

export default SecMap