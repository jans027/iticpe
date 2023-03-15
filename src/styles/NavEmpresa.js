import styled from "styled-components";

export const BannerPathEmpresa = styled.div`
    /* border: 1px solid red;//......................... */
    height: 18rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 130px;
    @media (max-width:1100px) {
        margin-top:88px;
        height: 10rem;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }
    h2{
        /* border: 1px solid red;//................... */
        width: 90%;
        font-size: clamp(26px, 4.8vw, 80px);
        font-weight: 900;
        margin:0 auto;
        height: auto;
        position:absolute;
        margin-top: 10px;
        @media (max-width:500px) {
            font-size: 12vw;
        }
    }
`
export const ContNavEmpresa = styled.div`
    /* border: 1px solid red;//......................... */
    max-width: 300px;
    width: 26%;
    height: fit-content;
    @media (max-width:1270px) {
        display: none;
    }
    a{
        list-style: none;
        text-decoration: none;
        margin: 2em 0;
        vertical-align: middle;
        div{
            color: var(--color4);
            width: 100%;
            height: 67px;
            display: flex;
            align-items: center;
            border-radius: .8em;
            padding: 1em;
            p{
                font-size: 1.1em;
                font-weight: 800;
            }
        }
    }
`
export const ContPagesEmpresa = styled.div`
    /* border: 1px solid blue;//......................... */
    background-color: var(--color5);
    padding-top: 4em;
    @media (max-width:1270px) {
        padding-top: 0;
    }
    .ContSectionEm{
        /* border: 1px solid blue;//......................... */
        display: flex;
        flex-wrap: wrap;
        width: 90%;
        margin: auto;
        @media (min-width:1270px) {
            justify-content: space-around;
        }
        @media (max-width:1270px) {
            width: 100%;
        }
    }
`

















