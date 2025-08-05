import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Descreva pra mim, todos os principais pokemons da história, sem muitos detalhes, mas por ranking"
  });
  console.log(response.text);
}

main();