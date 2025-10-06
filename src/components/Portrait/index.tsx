import { PortraitContainer, PortraitImage } from "./styles";

interface PortraitProps {
    src: string;
    caption?: string;
}

export default function Portrait({ src, caption }: PortraitProps) {
    return <PortraitContainer>
        <PortraitImage src={src} />
        {caption && <p>{caption}</p>}
    </PortraitContainer>
}