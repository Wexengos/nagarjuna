import { CardContainer, PoweredByText, QuoteAuthor, QuoteContainer, QuotePortrait, QuoteText, ShuffleButton, TextContainer } from "./styles";
import { todayTitle, randomTitle } from "./data";
import { Box, CircularProgress } from "@mui/material";

import { Icon } from '@iconify/react';

interface QuoteCardProps {
    variant: "today" | "random";
    quote: Record<string, string>;
    onShuffle?: () => Promise<void>;
    isLoading?: boolean;
}

export default function QuoteCard({ variant, quote, onShuffle, isLoading }: QuoteCardProps) {
    return <CardContainer>
        {isLoading ? <CircularProgress sx={{ color: "#ffa500" }} /> : <>
            <h2>{variant === 'today' ? todayTitle : randomTitle}</h2>

            <QuoteContainer>
                <Box display="flex" marginRight={"1rem"} flexDirection="column" alignItems="center" marginTop="-2rem">
                    <QuotePortrait src={quote.byImage} />

                    {onShuffle && <ShuffleButton disabled={isLoading} onClick={onShuffle}>
                        <Icon icon="streamline-ultimate:dice-bold" width="35px" height="35px" />
                        <p>Shuffle!</p>
                    </ShuffleButton>}
                </Box>

                <TextContainer>
                    <h1>"</h1>
                    <QuoteText>{quote.text}</QuoteText>
                </TextContainer>
            </QuoteContainer>

            <QuoteAuthor>- {quote.byName}</QuoteAuthor>

            <PoweredByText><i>Powered by <a href="https://buddha-api.com/">BuddhaApi</a></i>.</PoweredByText>
        </>
        }

    </CardContainer>
}