import styled from "styled-components";


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
    border:2px solid blue;//..................
    width: 80%;
    margin: auto;
    margin-top: 150px;
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
        div {
            width: 50%;
            display: flex;
            flex-direction: column;
            padding: 0 1rem;
            @media (max-width:700px) {
                width: 100%;
            }
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
        &:invalid {
          /* border: 1px solid red; */
        }
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
export const CheckboxLabelLibro = styled.label`
  display: flex;
  justify-content: space-around;
  /* border: 1px solid red;//................... */
  /* padding: 1em 0; */
  span {
    width: 90%;
    font-size: 12px;
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
