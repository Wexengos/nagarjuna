import nagarjuna from '../../assets/nagarjuna.svg';
import { Container } from './styles';

export default function MainTitle() {
    return <Container>
        <img src={nagarjuna} style={{ width: '10rem', height: '10rem' }} />
        &nbsp;
        <h1 style={{ fontFamily: "Arial", fontSize: "5rem", color: "white", marginLeft: "1.5rem" }}>Nagarjuna</h1>
    </Container>
}