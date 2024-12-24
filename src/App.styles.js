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

export const ContainerCard = styled.div`
    position: relative;
`;

export const Card = styled.div`
    width: 100%;
    max-width: 400px;
    min-width: 100%;
    border-radius: 14px;
    background-color: var(--Dark-Grayish-Blue);

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px 50px 20px;
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
    text-align: center;
    padding: 20px 0;
`

export const BotaoGerar = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
    bottom: -30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: var(--Neon-Green);
    border: none;
    outline: none;
    transition: .2s;

    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 50px 0px var(--Neon-Green);
    }
`