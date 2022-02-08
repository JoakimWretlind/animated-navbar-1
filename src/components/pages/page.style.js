import styled from 'styled-components';

export const Section = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Header = styled.h1`
    font-family: 'Anton', sans-serif;
    font-size: clamp(2rem, 12vw, 10rem);
    letter-spacing: clamp(.1rem, 2vw, 1rem);
    text-transform: uppercase;
`;