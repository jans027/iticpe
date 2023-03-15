import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { data } from '../data/data';
import { ContNavEmpresa } from '../styles/NavEmpresa';
import styled from "styled-components";



const Button = styled(Link)`
    div{
        background-color: ${(props) => (props.isActive ? '#9cff2d' : "#ffffff")};
    }
`;

const NavEmpresa = () => {

    //get data
    const [datos] = data
    const { empresa: { dropDownMenu } } = datos;
    const empresasSub = Object.values(dropDownMenu);
    // console.log(dropDownMenu)


    // show actual path................
    const [urlPath, setUrlPath] = useState(window.location.pathname);
    // console.log(typeof(urlPath))

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
    const user = empresasSub.find(item => item.url === urlPath);
    // console.log(user)

    const [activeKey, setActiveKey] = useState(user.key);

    const handleButtonClick = (key) => {
        setActiveKey(key);
    };

    return (
        <>
            <ContNavEmpresa>
                {
                    empresasSub.map((item) =>
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
            </ContNavEmpresa>
        </>
    )
}

export default NavEmpresa