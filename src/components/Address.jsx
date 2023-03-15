import React from 'react'
import { data } from '../data/data';
// icons
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { ContAddress } from '../styles/Address';

const Address = () => {

    // get data
    const [datos] = data;
    const { inicio: { email, phone, addressItic } } = datos;

    return (
        <>
            <ContAddress>
                <div><EmailOutlinedIcon />{email}</div>
                <div><PhoneAndroidOutlinedIcon />{phone}</div>
                <div>
                    <LocationOnOutlinedIcon />
                    <p className='subTitle'>
                        {addressItic.split('\n').map((line, i) => {
                            return (
                                <React.Fragment key={i}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            )
                        })}
                    </p>
                </div>

            </ContAddress>
        </>
    )
}

export default Address