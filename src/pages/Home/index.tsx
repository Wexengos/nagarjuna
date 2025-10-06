import { useEffect, useState } from "react";
import { MainContainer } from "../../components/MainContainer";
import { getRandomQuote, getTodayQuote } from "../../services/buddha.service";
import QuoteCard from "../../components/QuoteCard";
import { CardsContainer, Paragraph, VerticalLine } from "./styles";

import Shakyamuni from '../../assets/shakyamuni.gif';
import { Box } from "@mui/material";
import Portrait from "../../components/Portrait";

export default function Home() {
    const [todayQuote, setTodayQuote] = useState<Record<string, string> | null>(null);
    const [randomQuote, setRandomQuote] = useState<Record<string, string> | null>(null);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleShuffleQuote = async () => {
        setIsLoading(true);
        await getRandomQuote().then((quote) => { setRandomQuote(quote); setIsLoading(false) });
    }

    useEffect(() => {
        getTodayQuote().then(quote => setTodayQuote(quote));

        getRandomQuote().then(quote => setRandomQuote(quote));
    }, [])

    return <MainContainer>
        {<CardsContainer>
            {todayQuote !== null && <QuoteCard variant="today" quote={todayQuote} />}
            <VerticalLine />
            {randomQuote !== null && <QuoteCard
                variant="random"
                quote={randomQuote}
                isLoading={isLoading}
                onShuffle={handleShuffleQuote}
            />}
        </CardsContainer>}

        <h1>What is Buddhism?</h1>
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" marginTop="1rem">
            <Portrait src={Shakyamuni} caption="Siddhartha Gautama" />
            <Paragraph>Buddhism is a religious and philosophical tradition stemming from the Indian subcontinent,
                and derived from the teachings of prince-turned-monk <b>Siddhartha Gautama</b>, also known as&nbsp;
                <b>Shakyamuni Buddha</b>, or simply the <b>Buddha</b>.
            </Paragraph>
        </Box>
    </MainContainer>
}