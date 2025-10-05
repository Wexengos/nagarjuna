import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 22rem;
    height: 25rem;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2.5rem;
    margin: 1rem;
`

export const QuotePortrait = styled.img`
    width: 8rem;
    border-radius: 50%;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-family: 'Arial';
    width: 60%;
    height: auto;
    margin-top: 1rem;

    h1 {
        margin-top: 0.25rem;
        font-size: 4rem;
        margin-right: 0.75rem;
    }
`

export const QuoteAuthor = styled.h3`
    margin-top: -1rem;
    margin-right: -10rem;
`

export const QuoteText = styled.p`
    
`