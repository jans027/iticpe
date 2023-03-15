import React from 'react'
import { ContMap } from '../styles/Address';


const SecMap = (props) => {

    const {
        iframeSource = '<iframe id="containerIframe"  style="border:0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4293046435237!2d-74.06089337202415!3d4.69523053211982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ac7cb506bbf%3A0x7461a1d46d978c65!2sCl.%20108%20%2345-27%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sus!4v1677098161508!5m2!1ses!2sus"></iframe>'
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