import axios from "axios"

export async function executar() {
    try {
        const resp = await axios.get("https://api.adviceslip.com/advice");
        const retorno = resp.data.slip;
        return retorno;
    } catch (error) {
        return { id: null, advice: null };
    }
}