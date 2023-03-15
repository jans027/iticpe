import styled from "styled-components";

export const ContContact = styled.div `
  /* border:2px solid red;//.................. */
  width: 90%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 8.5em;
  @media (max-width:1270px) {
    margin-top: 90px;
    margin-bottom: 50px;
  }
`
export const ContImgComtact = styled.div`
  /* border: 1px solid red;//.......................... */
  width: 50%;
  @media (max-width:1200px) {
      display: none;
  }
  overflow: hidden;
    img{
      height: 100%;
      object-fit: cover;
      object-position: -13vw center;
      @media (min-width:1300px) {
          object-position: center center;
        }
      }
`
export const ContContactForm = styled.div`
    /* border: 1px solid red;//....................... */
    width: 50%;
    margin: 0 auto;
    height: auto;
    @media (max-width:1200px) {
      width: 70%;
    }
    @media (max-width:1000px) {
      width: 90%;
    }
    @media (max-width:600px) {
      width: 100%;
    }
    .contContact2 {
      /* border: 2px solid red; //.................. */
      margin-top: 2.1em;
      .title {
        font-size: clamp(28px, 3.8vw, 70px);
        font-weight: 900;
        padding-left: 0.2em;
        @media (max-width: 600px) {
          font-size: 30px;
        }
      }
      .subTitle {
        font-size: clamp(14px, 1.6vw, 30px);
        font-weight: 600;
        margin: 1em 0 0 0;
        padding-left: 0.2em;
        @media (max-width: 600px) {
          margin: 2rem 0;
        }
      }
      div {
        padding-top: .5em;
        a {
          text-decoration: none;
          padding: 1.5rem 6.5rem;
          background-color: var(--color4);
          font-size: 2rem;
          font-weight: 600;
          color: var(--color5);
          border-radius: 0.7em;
          @media (max-width: 766px) {
            padding: 1.5rem 3vw;
            font-size: 3.4vw;
            font-weight: 100;
          }
          &:hover {
            color: var(--color1);
          }
          &:active {
            background-color: var(--color7);
          }
        }
      }
    }
`
export const FormContact = styled.div `
  /* border:2px solid blue;//.................. */
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
        /* margin-bottom: 1em; */
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
export const TextArea = styled.textarea `
  margin-bottom: 1em;
  /* height: 2.8em; */
  border-radius: 1em;
  border: 1px solid var(--color3);
  padding: 1em;
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
export const CheckboxLabel = styled.label `
  display: flex;
  justify-content: space-around;
  /* border: 1px solid red;//................... */
  /* padding: 1em 0; */
  span {
    width: 90%;
    font-size: 12px;
  }
`
export const CheckboxInput = styled.input `
  appearance: none;
  width: 30px;
  height: 30px;
  border: 2px solid var(--color4);
  /* border-radius: 50%; */
  position: relative;
  transition: all 0.3s ease;
  /* border-color: var(--color1); */

  &:checked {
    border: 2px solid var(--color1);
    background-color: var(--color1);
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
export const BtnFormContact = styled.div`
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

