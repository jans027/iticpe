import { Button, Menu } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
    /* border: 1px solid red;//........................... */
    display: flex;
    margin: auto;
    flex-direction: column;
    background-color: var(--color3);
    position: fixed;
    top:0;
    width: 100%;
    z-index: 100;
    .Address{
        background-color: var(--color4);
        color: var(--color5);
        display: flex;
        /* height: 2.8vw; */
        
        div{
            /* border: 1px solid red;//........................... */
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 90%;
            height: 2.8vw;
            min-height: 27px;
            margin: auto;
            @media (max-width:900px) {
                justify-content: center;
            }
            .mailTo{
                color: var(--color5);
                display: flex;
                align-items: center;
                text-decoration: none;
                @media (max-width:900px) {
                    font-size: 10px;
                }
            }
            .redes_barra_nav{
                @media (max-width:600px) {
                    display: none;
                }
            }
            span{
            align-items: center;
            display: flex;
            margin-right:.5em;
            padding: 1em;
            a{
                color: var(--color5);
            }
            svg{
                @media (max-width:900px) {
                    font-size: 14px;
                }
            }
            p{
            margin-left: .3em;
            font-size: 1em;
            font-weight: 500;
            @media (max-width:900px) {
                font-size: 12px;
                font-weight: 300;
                }
            }
        }
        }
    }
    .ContMenu{
        /* border: 1px solid red;//..................... */
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        height: 6.2em;
        width: 90%;
        @media (max-width:1101px) {
                justify-content:space-between;
                width: 90%;
                height: 3.7em;
            }
        
        .contMenuHamburguer{
            /* border: 1px solid red;//........................ */
            display: none;
            padding: 0!important;
            @media (max-width:1170px) {
                display: block;
            }
        }
        .menuHamburguer{
            /* border: 1px solid red;//........................ */
            font-size:2.8em;
            cursor: pointer;
            transition:10ms;
            padding: 0!important;
            margin: 0!important;
            
            :active{
                transform: scale(.97);
                path{
                color: var(--color3);
                
                }
            }
            path{
                color: var(--color9);
                
            }
        }
    }
`
export const MenuPcLaptop = styled.span`
    /* border: 1px solid blue;//......................... */
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width:1170px) {
        display: none;
    }
`
export const BtnBase = styled(Button)`
        &&{
            /* border: 1px solid red;//................. */
            color: var(--color4);
            font-weight:600;
            border-radius: 1.6em;
            padding: .7em;
            img{
                margin: 0 1em 0 0;
            }
            a{
                text-decoration: none;
                color: var(--color4);
                font-weight:600;
                display: flex;
                align-items: center;
                font-size: clamp(11px, 1vmax, 22px);
            }
            &:hover{
                background-color: var(--color10);
                border-radius: 1.6em;
            }
            
        }
`
export const MenuDrop = styled(Menu)`
    &&{
        div{
            box-shadow: none;
            ul{
            background-color: var(--color3);
            li{
                &:hover{
                    border-bottom: 1.5px solid var(--color4);
                }
                a{
                    text-decoration: none;
                    color: var(--color4);
                }
            }
        }
        }
    }
`
export const LogoNav = styled(Link)`
        transition:10ms;
        width:clamp(150px, 15%, 215px);
    :active{
            transform: scale(.98);
    }
    img{
        height: 100%;
        }
`
// simple dropdown menu whit hover effect
export const DropdownContainer = styled.div`
    /* border: 1px solid red;//............... */
    position: relative;
    z-index: 3;
    display: inline-block;
    border-bottom: 2px solid transparent;
    border-radius: 1.6em;
    &:hover{
        background-color: var(--color10);
    }

    &:hover .dropdown-content {
        display: block;
    }
`
export const DropdownButton = styled.button`
    /* border: 1px solid red;//............... */
    background-color: transparent;
    border-bottom: 2px solid transparent;
    color: var(--color4);
    padding: .8em;
    font-weight:600;
    display: flex;
    align-items: center;
    font-size: clamp(11px, 1vmax, 22px);
    border: none;
    cursor: pointer;
`
export const DropdownContent = styled.div`
    /* border: 1px solid red;//............... */
    display: none;
    position: absolute;
    z-index: 1;
    background-color: var(--color3);
    min-width: 290px;
    border-bottom: 2px solid transparent;
    div{
        /* border: 1px solid red;//............... */
        border-bottom: 2px solid transparent;
        padding: 10px;
        
        &:hover{
                border-bottom: 2px solid var(--color4);
                background-color:rgba(0, 0, 0, 0.09);
            }
        a{
            width: 100%;
            text-decoration: none;
            font-size: 1em;
            color:var(--color4);
        }
    }
`
export const ImgCropdown = styled.img`
    margin-right: .5em;
`