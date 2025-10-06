import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 32rem;
    height: 18rem;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 1.5rem;
    margin: 1rem;
`

export const QuoteContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 30rem;

    &:-webkit-scrollbar {
        margin-left: 1rem;
    }
`

export const QuotePortrait = styled.img`
    width: 7.5rem;
    border-radius: 50%;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-family: 'Arial';
    width: 60%;
    height: auto;
    max-height: 10rem;
    overflow: scroll;

    h1 {
        margin-top: 0.25rem;
        font-size: 4rem;
        margin-right: 0.75rem;
    }
`

export const QuoteAuthor = styled.h3`
    margin-right: -20rem;
    margin-top: -0.5rem;
`

export const QuoteText = styled.p`
    max-height: 5rem;
`

export const ShuffleButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 1rem;
    background-color: darkorange;
    color: white;
    cursor: pointer;
    margin-top: 1.5rem;
    margin-bottom: -3.05rem;
    transition: background-color 0.3s ease;

    p {
        font-size: 1rem;
        margin: 0;
        margin-left: 0.5rem;
    }

    &:hover {
        background-color: orange;
    }
`

export const PoweredByText = styled.p`
    margin-right: -15rem;
    
`