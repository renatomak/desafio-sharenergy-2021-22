import styled from "styled-components";

export const Container = styled.main`
    background: linear-gradient(to right, rgba(236, 229, 221, 0.8) 0%, rgba(0, 162, 162, 0.8) 100%),
    url("https://sharenergy.com.br/wp-content/uploads/2018/07/usina-solo2.jpg") no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--white);
    
    h1, h3 {
        font-weight: 400;
        text-shadow: 0px 1px 1px rgb(0 0 0 / 40%);
        padding: 0;
    }

    h1 {
        font-size: 64px;
    }
    h3 {
        font-size: 25px;
        letter-spacing: 0;
        font-style: italic;
        font-family: 'Droid Serif', Georgia, serif;
    }
`;
