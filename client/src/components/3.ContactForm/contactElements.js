import styled from "styled-components"; 

export const FormGlobalContainer = styled.section`
    width: 50%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 3rem;
        font-family: 'Fjalla One', sans-serif;
        color: white;
    }

`
export const ImageGlobalContainer = styled.section`
    width: 50%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    #contact{
        height: 10%;
        width: 90%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: aliceblue;
        border-radius: 2rem;
        svg {
            height: 4.5rem;
            width: auto;
            color: black;
        }
        a:hover{
            svg {
                transform: scale(1.2)
            }
        }
    }
   
`

export const ImageContainer = styled.div`
    height: 70%;
    img {
        height: 100%;
        width: auto;
    }
`

export const MyForm = styled.form`
    height: 70%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
        width: 80%;
    }
    input {
        width: 90%;
        height: 3.5rem;
        margin: 1.5rem;
        border-radius: 2rem;
        padding-left: 3rem;
        font-family: 'Edu VIC WA NT Beginner', cursive;
        font-size: 2rem;
        &::placeholder {
            
        }
    }
    textarea{
        margin: 1.5rem;
        border-radius: 1rem;
        height: 10rem;
        width: 90%;
        padding-left: 3rem;
        font-family: 'Edu VIC WA NT Beginner', cursive;
        font-size: 2rem;
    }
    .Button {
        width: 15rem;
        height: 4rem;
        background-image:radial-gradient(circle at 10% 20%, rgb(164, 38, 199) 0.1%, rgb(65, 220, 255) 90.1%);
        border-radius:1rem;
        display:flex;
        align-items:center;
        justify-content:center;
        text-transform:uppercase;
        font-weight:700;
        font-size: 2rem;
        &:hover{
            content:attr(alt);
            transform: scale(1.2);
            background-color:#191919;
            display:flex;
            align-items:center;
            justify-content:center;
            cursor: pointer;
        }
    }
 
`

