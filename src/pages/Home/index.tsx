import { useEffect, useState } from "react";
import { MainContainer } from "../../components/MainContainer";
import { getTodayQuote } from "../../services/buddha.service";
import QuoteCard from "../../components/QuoteCard";

export default function Home() {
    const [todayQuote, setTodayQuote] = useState<Record<string, string> | null>(null);

    useEffect(() => {
        getTodayQuote().then(quote => setTodayQuote(quote));
    }, [])

    return <MainContainer>
        {todayQuote !== null && <QuoteCard variant="today" quote={todayQuote}/>}

    </MainContainer>
}