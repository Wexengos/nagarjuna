import { CardContainer, QuoteAuthor, QuotePortrait, QuoteText, TextContainer } from "./styles";
import { todayTitle, randomTitle } from "./data";

interface QuoteCardProps {
    variant: "today" | "random";
    quote: Record<string, string>;
}

export default function QuoteCard({ variant, quote }: QuoteCardProps) {
    return <CardContainer>
        <h2>{variant === 'today' ? todayTitle : randomTitle}</h2>

        <QuotePortrait src={quote.byImage} />

        <TextContainer>
            <h1>"</h1>
            <QuoteText>{quote.text}</QuoteText>
        </TextContainer>
        <QuoteAuthor>- {quote.byName}</QuoteAuthor>
        <p><i>Powered by <a href="https://buddha-api.com/">BuddhaApi</a></i>.</p>
    </CardContainer>
}