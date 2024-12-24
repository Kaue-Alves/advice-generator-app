import { useState } from "react";
import * as S from "./App.styles.js";
import IconGerar from "./components/IconGerar.jsx";
import Line from "./components/IconPause.jsx";
import { executar } from "./hooks/pegarTexto.js";


export default function App() {

    const [id, setId] = useState(null)
    const [conselho, setConselho] = useState("Clique no botão para gerar um conselho.")
    
    async function pegarConselho() {
        const receba = await executar();
        setId(receba.id)
        setConselho(`"${receba.advice}"`)
    }
    
    
    return (
        <S.TagContainer>
            <S.ContainerCard>
                <S.Card>
                    <S.AdviceP>ADVICE #{id}</S.AdviceP>
                    <S.MensagemP>
                        {conselho}
                    </S.MensagemP>
                    <Line />
                </S.Card>
                <S.BotaoGerar onClick={pegarConselho}>
                    <IconGerar />
                </S.BotaoGerar>
            </S.ContainerCard>
        </S.TagContainer>
    );
}
