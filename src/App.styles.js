import styled from "styled-components";

export const TagContainer = styled.div`
    width: 100dvw;
    height: 100dvh;
    background-color: var(--Dark-Blue);

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
`;

export const Card = styled.div`
    width: 100%;
    max-width: 500px;

    border-radius: 20px;
    background-color: var(--Grayish-Blue);

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export const AdviceP = styled.p`
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 4px;
    color: var(--Neon-Green);
`;

export const MensagemP = styled.p`
    font-weight: 800;
    font-size: 1.3rem;
    color: var(--Light-Cyan);
    padding: 20px 0;
`