import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { data } from '../data/data';
import styled from "styled-components";
import { ContNavServicios } from '../styles/NavServicios';



const Button = styled(Link)`
    div{
        background-color: ${(props) => (props.isActive ? '#9cff2d' : "#ffffff")};
    }
`;

const NavServicios = () => {

    //get data
    const [datos] = data
    const { servicios: { dropDownMenu } } = datos;
    const serviciosSub = Object.values(dropDownMenu);
    // console.log(dropDownMenu)


    // show actual path................
    const [urlPath, setUrlPath] = useState(window.location.pathname);

    useEffect(() => {
        const handleLocationChange = () => {
            setUrlPath(window.location.pathname);
        };
        window.addEventListener("popstate", handleLocationChange);

        return () => {
            window.removeEventListener("popstate", handleLocationChange);
        };
    }, []);
    //..................................

    // we assign path to key active
    const user = serviciosSub.find(item => item.url === urlPath);

    const [activeKey, setActiveKey] = useState(user.key);

    const handleButtonClick = (key) => {
        setActiveKey(key);
    };

    return (
        <>
            <ContNavServicios>
                {
                    serviciosSub.map((item) =>
                        <Button
                            to={item.url}
                            key={item.key}
                            isActive={activeKey === item.key}
                            onClick={() => handleButtonClick(item.key)}
                        >
                            <div>
                                <p>
                                    {item.nameNav2.split('\n').map((line, i) => {
                                        return (
                                            <React.Fragment key={i}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        )
                                    })}
                                </p>
                            </div>
                        </Button >
                    )
                }
            </ContNavServicios>
        </>
    )
}

export default NavServicios