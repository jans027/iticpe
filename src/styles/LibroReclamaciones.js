import styled from "styled-components";


export const TitleLibro = styled.h1`
    /* border: 1px solid red;//.................... */
    font-size: clamp(28px, 3.8vw, 70px);
    font-weight: 900;
    padding:1rem 0 1rem 0;
    text-align: center;
    @media(max-width:710px){
        font-size: 8vw;
        width: 90%;
        margin: auto;
    }
`
export const ImgLibro = styled.div`
    /* border: 1px solid red;//................ */
    width: 100%;
    overflow: hidden;
    img{
        width: 100%;
        object-fit: cover;
        object-position: center center ;
    }
`
export const FormLibro = styled.div`
    /* border:2px solid blue;//.................. */
    width: 80%;
    max-width: 1200px;
    margin: auto;
    margin-top: 150px;
    @media (max-width:700px) {
        margin-top: 100px;
        width: 95%;
    }
    .cont_form_mail {
    form {
        flex-direction: column;
        display: flex;
        /* padding: 1.5em; */
        .firstBlock {
            display: flex;
            @media (max-width:700px) {
                flex-direction: column;
            }
      }
      .form_label {
        font-size: clamp(16px, 1.5vw, 26px);
        /* color: var(--color4); */
        padding: 0 0 0.5em 0;
        font-weight: 600;
        span {
          color: red;
          font-size: 20px;
        }
      }
      .form_input,
      select{
        margin-bottom: 1em;
        height: 2.8em;
        border-radius: 1em;
        border: 1px solid var(--color3);
        padding: 0 0 0 0.5em;
        option:disabled {
          color: transparent;
        }
        &::placeholder {
          color: var(--color4);
        }
        &:focus {
          border: 2px solid var(--color1);
          outline: none;
          &::placeholder {
            color: var(--color3);
          }
        }
      }
      .class_1 {
        margin-bottom: 1em;
        height: 2.8em;
        border-radius: 0.5em;
        border: 1px solid red;
        padding: 0 0 0 0.5em;
        &::placeholder {
          color: rgba(255, 0, 0, 0.623);
        }
        &:focus {
          border: 2px solid var(--color1);
          outline: none;
          &::placeholder {
            color: white;
          }
        }
      }
      input[type="number"] {
        -moz-appearance: textfield; /* Firefox */
      }

      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Estilo para el control personalizado */
      input[type="number"] {
        border: none;
        background: white;
        font-size: 12px;
        width: 100%;
      }

      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
        display: none;
      }
    }
    .secondForm {
      /* border: 1px solid red;//...................... */
      display: flex;
      flex-direction: column;
      width: 96%;
      margin: auto;
    }
  }
`
export const TextAreaLibro = styled.textarea`
    margin-bottom: 1em;
    /* height: 2.8em; */
    border-radius: 1em;
    border: 1px solid var(--color3);
    padding: .5em;
    border: 2px solid var(--color6);
    option:disabled {
        color: transparent;
    }
    &::placeholder {
        color: var(--color4);
    }
    &:focus {
        border: 2px solid var(--color1);
        outline: none;
        &::placeholder {
            color: var(--color3);
        }
    }
`
export const VariousInput = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    @media (max-width:700px) {
        width: 100%;
    }
`
export const SingleInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
`
export const CheckboxLabelLibro = styled.label`
    border-top: 2px solid var(--color3);//...................
    display: flex;
    justify-content: space-around;
    padding-top: 1.5em;
    span {
        width: 90%;
        font-size: 12px;
    }
`
export const ContCheck = styled.div`
    /* border: 1px solid red;//.............................. */
    display: flex;
    flex-direction: column;
    margin: 1em 0;
    label{
        display: flex;
        align-items: center;
        margin:.5em 0;
        p{
            margin-left: 1em;
            font-weight:500;
        }
    }
`
export const CheckboxInputLibro = styled.input`
    appearance: none;
    width: 30px;
    height: 30px;
    border: 2px solid var(--color4);
    /* border-radius: 50%; */
    position: relative;
    transition: all 0.3s ease;
    &:checked {
        background-color: var(--color4);
    }

    &:checked::after {
    content: "\\2714";
    font-size: 14px;
    color: var(--color5);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }
    &:hover {
        cursor: pointer;
    }
`
export const BtnFormLibro = styled.div`
  /* border: 1px solid red;//...................... */
  width: 100%;
  text-align: center;
  padding: .5em 0;
  margin: 1.5em 0;
  button {
    background-color: var(--color4);
    border: none;
    color: var(--color5);
    padding: .2em 1em;
    width: 25%;
    border-radius: 25px;
    cursor: pointer;
    font-size: 25px;
    font-weight: 900;
    @media (max-width:700px) {
            width: 80%;
        }
    &:hover {
      color: var(--color1);
    }
  }
  &:active {
    background-color: var(--color6);
  }
`
export const TitleSection = styled.p`
    /* border: 1px solid red;//............... */
    width: 97%;
    margin: auto;
`
export const PTitle = styled.p`
    border-top: 2px solid var(--color3);//...............
    font-size: clamp(16px, 1.5vw, 26px);
    padding-top:1em ;
    margin: 1em 0;
    font-weight: 600;
`