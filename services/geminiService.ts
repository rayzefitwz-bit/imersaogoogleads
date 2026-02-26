
import { GoogleGenAI } from "@google/genai";

const COURSE_CONTEXT = `
Você é o Assistente Virtual da Imperium Digital Global. 
Estamos promovendo a "Imersão Google Ads + Inteligência Artificial".
Esta imersão é uma jornada prática de 3 dias (24 horas ao vivo) focada em resolver problemas reais usando ferramentas de IA de ponta.
Público-alvo: Profissionais, gestores e mentes criativas que buscam o próximo nível de eficiência.
Destaques:
1. Imperium Digital Global: Nossa marca foca na união entre inteligência humana e artificial e aplicação prática de IA nos negócios.
2. 24 Horas ao Vivo: Treinamento intensivo de 3 dias presencial com ajuda em tempo real.
3. Soluções Reais: Não é apenas teoria, é criação de ferramentas e automações que saem rodando.
4. Módulos incluem: Engenharia de Prompts, N8N, Agentes de IA, RAG, Guardrails e Playbooks de Negócios.

Responda de forma curta, técnica porém acessível, e sempre muito educada. Se perguntarem sobre preço ou inscrição, encaminhe-os para os botões de CTA na página.
`;

export const getGeminiResponse = async (userMessage: string) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: COURSE_CONTEXT,
        temperature: 0.7,
      },
    });

    return response.text || "Desculpe, tive um problema ao processar sua resposta.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro ao conectar com a inteligência artificial da Imperium Digital Global. Tente novamente em instantes.";
  }
};
