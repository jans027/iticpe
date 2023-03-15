import styled from "styled-components";



export const ContContacto = styled.div`
    /* border:2px solid red;//....................... */
    width: 100%;
    height: clamp(570px, 60vh, 680px);
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width:768px){
        /* margin: 0 auto; */
        align-items: flex-start;
        flex-direction: column;
    }
    .ConImgContactanos{
        overflow: hidden;
        /* border:2px solid red;//.................. */
        width: 100%;
        height: 100%;
        /* height: clamp(310px, 50vh, 680px); */
        img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        @media(max-width:769px){
            /* width: 100%; */
        }
        @media(max-width:550px){
            /* height: 100%; */
            /* object-position: -70px center; */
        }
        }
    }
    .contEnfoque1{
            width: 90%;
            margin:0 auto;
            height: auto;
            position:absolute;
        @media (max-width:770px) {
            /* margin-top: 10em; */
            position:unset;
            padding-left: 1em;
        }
        @media (max-width:550px) {
            margin-top: 0;
        }
        .contEnfoque2{
            /* border:2px solid red;//.................. */
            @media (max-width:770px) {
                text-align: center;
            }
            @media (max-width:600px) {
                text-align: center;
                padding: .5em 0;
                margin-top: 1em;
            }
            .title{
                font-size: 5vw;
                font-weight: 900;
                @media (max-width:600px) {
                    font-size: 30px;
                }
            }
            .subTitle{
                font-size:3vw;
                font-weight: 600;
                margin: 3.5rem 0;
                @media (max-width:769px) {
                    margin: 1rem 0;
                    font-size:1.3em;
                }
            }
            a{
                text-decoration: none;
                font-size: 2rem;
                font-weight: 600;
                border-radius: .7em;
                div{
                    width:fit-content;
                    background-color: var(--color4);
                    color:var(--color5);
                    padding: .5em;
                    border-radius: 1em;
                    font-weight: 600;
                    @media(max-width:769px){
                        margin: auto;
                        margin-bottom: 1em;
                    }
                    &:hover{
                    color: var(--color1);
                    };
                    &:active{
                    background-color: var(--color7);
                    };
                }
                @media(max-width:769px){
                    font-size: 3.4vw;
                    font-weight: 100;
                    
                }
                
                
            }
        }
    }
`




















