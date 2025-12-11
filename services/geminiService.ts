import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export interface StrategicAdviceResponse {
  analysis: string;
  strategy: string;
  riskScore: number;
}

export const getStrategicAdvice = async (query: string): Promise<string> => {
  if (!apiKey) {
    throw new Error("API Key is missing. Please configure the environment.");
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: `You are the Virtual Assistant for "Elite Multiverse", a premium company dealing in:
        1. FMCG Products (Fast Moving Consumer Goods)
        2. Premium Dry Fruits (Almonds, Cashews, Walnuts, etc.)
        3. Bio-Magnetic Bracelets (Health & Wellness wear)
        4. Garments & Fashion
        
        Your tone is welcoming, professional, and knowledgeable.
        
        If the user asks about health benefits, emphasize the natural goodness of dry fruits or the wellness aspects of bio-magnetic therapy.
        If the user asks about fashion, highlight the trendiness and quality of the garments.
        
        Keep your answers concise (under 100 words) and helpful. Use formatting (bolding) for key product features.`,
        temperature: 0.7,
      },
    });

    return response.text || "I am currently updating my product database. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our assistant is temporarily unavailable. Please contact support directly.";
  }
};