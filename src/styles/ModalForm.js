import { Dialog } from "@mui/material";
import styled from "styled-components"; 


export const ContModal = styled(Dialog)`
    
    .MuiPaper-root{
        /* border: 1px solid red;//....................... */
        height: auto!important;
        @media (max-width:400px) {
            width: 100%!important;
            margin: 0;
        }
        .cont_close{
            display: flex;
            justify-content: end;
            background-color: var(--color3);
            
            border-radius: 50%;
            position: absolute;
            right: 10px;
            top: 10px;
            span{
                width: min-content;
                color: var(--color4);
                cursor: pointer;
                transition: 3ms;
                padding: .8em .8em .3em;
                svg{
                    font-size: 2.4em;
                    font-weight: 900;
                }
                &:hover{
                    transform: scale(1.3);
                }
                &:active{
                    color: var(--color3);
                }
            }
        }
    }
`
export const ContInformationModal = styled.div`
    /* border: 1px solid red;//..................... */
    @media (max-width: 630px) {
                flex-direction: column;
                .cont_form{
                    max-width: 100%!important;
                }
            }
            @media(min-width:631px) and (max-width:850px) {
                flex-direction: column;
                .cont_form{
                    max-width: 100%!important;
                }
            }
`
export const ContFormModal = styled.div`
    /* border: 1px solid red;//..................... */
    width: 100%;
    .cont_form_mail{
        form{
            flex-direction: column;
            display: flex;
            padding: 1.5em;
        .form_label{
            font-size: 1em;
            font-weight:600;
            /* color: var(--color4); */
            padding: 0 0 .5em 0;
            span{
                color: red;
                font-size: 20px;
            }

        }
        .form_input, select{
            margin-bottom: 1em;
            height: 2.5em;
            border-radius: .5em;
            border: 1px solid var(--color3);
            padding: 0 0 0 .5em;
            option:disabled{
                color: transparent;
            }
            &::placeholder{
                color: var(--color4);
            }
            &:focus {
                border: 2px solid var(--color1);
                outline: none;
                &::placeholder{
                    color: var(--color3);
                }
            }
        }
        .class_1{
            margin-bottom: 1em;
            height: 2.8em;
            border-radius: .5em;
            border: 1px solid red;
            padding: 0 0 0 .5em;

            &::placeholder{
                color: rgba(255, 0, 0, 0.623);
            }

            &:focus {
                border: 2px solid var(--color1);
                outline: none;
                &::placeholder{
                    color: white;
                }
            }
        }
    }
    .Cont_btn_modal{
        /* border: 1px solid red;//..................... */
        display: flex;
        justify-content: flex-end;
    }
}
`
export const ConImgModal =styled.div`
    /* border:1px solid red;//.................... */
    width:100%;
    height: clamp(90px, 14vw, 281px);
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }
`
export const BtnModal = styled.button`
    /* border: 1px solid red;//....................... */
    cursor: pointer;
    width: 8em;
    padding: .4em;
    font-size: 20px;
    font-weight: 600;
    border-radius:.8em;
    background-color: var(--color1);
    border: none;
    color:var(--color4);
    margin-right: 10px;
    &:nth-child(2){
        background-color: var(--color4);
        border: none;
        margin-right: 0px;
        color:var(--color5);
    }
`
















