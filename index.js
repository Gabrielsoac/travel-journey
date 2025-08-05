import { GoogleGenAI } from "@google/genai";
import { doQuestion } from "./questions.js";

const ai = new GoogleGenAI({});

async function main() {

    let prompt = "Você é um site de viagens, fale apenas sobre locais que realmente existem na terra." +
    " Se o usuário digitar qualquer coisa relacionado a outro assunto ou um lugar que não existe de verdade, informe que" +
    " você não de falar sobre isso. Antes de dar a responsta negativa (se pode ou não falar sobre isso), pesquise se existe realmente um lugar com o nome solicitado," 
    + " mas não fale sobre isso, apenas dê informações sobre o local, como um guia turístico."
    + "Mensagem do usuário: "; 

    prompt += await doQuestion("Me fale sobre o destino que deseja conhecer: ");
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
    });
    console.log(response.text);
}

main();