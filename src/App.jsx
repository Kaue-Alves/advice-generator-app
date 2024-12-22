import styled from "styled-components";

const TagContainer = styled.div`
    width: 100dvw;
    height: 100dvh;
    background-color: var(--Dark-Blue);

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
`;

const Card = styled.div`
    width: 100%;
    max-width: 500px;

    border-radius: 20px;
    background-color: var(--Grayish-Blue);

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const AdviceP = styled.p`
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 4px;
    color: var(--Neon-Green);
`;

const MensagemP = styled.p`
    font-weight: 800;
    font-size: 1.3rem;
    color: var(--Light-Cyan);
    padding: 20px 0;
`

export default function App() {
    return (
        <TagContainer>
            <Card>
                <AdviceP>
                    ADVICE #147
                </AdviceP>
                <MensagemP>
                    "O importante é só o que importa."
                </MensagemP>
            </Card>
        </TagContainer>
    );
}
