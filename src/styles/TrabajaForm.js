import styled from "styled-components"


export const ContInput = styled.div`
    /* border: 1px solid black;//.............. */
    height: 120px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    padding: 2em 0 1.5em 0;
    p{
        font-size:.8rem;
        text-align:center;
        margin-bottom: 1em;
    }
    .emptyFile{
        background-color: var(--color4);
        color: white;
    }
    .sendFile{
        background-color: var(--color1);
        color: var(--color4);
    }
`
export const Input = styled.input`
    /* border: 1px solid red;//........... */
	opacity: 0;
	overflow: hidden;
	position: absolute;
    cursor: pointer!important;
	padding: 1em;
    + label {
        font-size: 1.25em;
        font-weight: 700;
        display: inline-block;
        padding: .6em 3em;
        border-radius: 1em;
        display: flex;
        align-items: center;
        
        svg{
            margin-right: 1em;
        }
}
`