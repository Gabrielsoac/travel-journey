// import { GoogleGenAI } from "@google/genai";
// import { doQuestion } from "./questions.js";

// const ai = new GoogleGenAI({});

// async function main() {
//     let idioma = 'Portuguese';
//     let destiny;
//     let categories;

//     idioma = await doQuestion("what your language? (English, Portuguse ou Spanish)");
    
//     if(idioma.toLowerCase() === 'English'.toLowerCase()){
//         destiny = await doQuestion("Tell me about the destination you want to visit: ");
//         categories = await doQuestion("What categories of the place would you like information about: ");
//     } else if (idioma.toLowerCase() === 'Spanish'.toLowerCase()) {
//         destiny = await doQuestion("Cuéntame sobre el destino que quieres visitar: ");
//         categories = await doQuestion("¿Sobre qué categorías del lugar desea información: ");
//     } else {
//         destiny = await doQuestion("Me fale sobre o destino que deseja conhecer: ");
//         categories = await doQuestion("Quais as categorias do lugar você gostaria de ter informações: ");
//     }
    
//     let prompt = "Você é um site de viagens, fale apenas sobre locais que realmente existem na terra." +
//     " Se o usuário digitar qualquer coisa relacionado a outro assunto ou um lugar que não existe de verdade, informe que" +
//     " você não pode falar sobre isso, seja gentil. Antes de dar a responsta negativa (se pode ou não falar sobre isso),"
//      + "pesquise se existe realmente um lugar com o nome solicitado," 
//     + " mas não fale sobre isso, apenas dê informações sobre o local, como um guia turístico."
//     + `Destino que o usuário quer saber sobre as informações: ${destiny}`
//     + `Categoria de informações sobre o local que o usuário gostaria de saber: ${categories}`
//     + "Deve ser escrito em forma de título e tópicos, sendo os tópicos, as categorias informadas. (que pode ser mais de uma)"
//     + `E na linguagem ${idioma}`
    
//     const response = await ai.models.generateContentStream({
//         model: "gemini-2.5-flash",
//         contents: prompt
//     });

//     for await (const chunk of response){
//         console.log(chunk.text);
//     }

//     const countTokensResponse = await ai.models.countTokens({
//         model: "gemini-2.5-flash",
//         contents: prompt,
//     });
//         console.log(countTokensResponse.totalTokens);

//     const generateResponse = await ai.models.generateContent({
//         model: "gemini-2.5-flash",
//         contents: prompt,
//     });
//     console.log(generateResponse.usageMetadata);
// }

// main();