import styled from "styled-components";

export const ContCard1 = styled.div`
  /* border: 2px solid blue; //.................... */
  background-color: var(--color2);
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3em 0;
  @media (max-width: 1270px) {
    max-width: 800px;
    width: 100%;
    margin: auto;
  }
  @media (max-width: 636px){
    height: auto;
  }
`;
export const ContCard2 = styled.div`
  /* border: 2px solid red; //.................... */
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 800px){
  width: 90%;
  }
`;
export const ContImg1 = styled.div`
  /* border: 2px solid green; //.................... */
  width: clamp(225px, 17vw, 330px);
  height: clamp(225px, 17vw, 330px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  float: left;
  @media (max-width: 800px) {
      float: none;
      padding: 16px 0;
      
    }
    img {
    border: 10px solid var(--color1);
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: 50%;
    }
`;
export const ContText1 = styled.div`
    /* border: 2px solid green; //.................... */
    width: 60%;
    height: auto;
    padding-left: 20px;
    @media (max-width: 1270px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    @media (max-width: 636px) {
      text-align: center;
      padding-bottom: 16px;
      width: 100%;
      padding-left: 0px;
    }
    .title_section {
    font-size: clamp(25px, 2.5vw, 45px);
    font-weight: 900;
    line-height: 1.1em;
    margin-bottom: 0.5em;
    
    }
    .paragraph_section {
    width: 100%;
    font-size: clamp(16px, 1.5vw, 27px);
    margin-bottom: 0.8em;
    @media (max-width: 800px) {
        margin-top: 16px;
    }
}
`;
