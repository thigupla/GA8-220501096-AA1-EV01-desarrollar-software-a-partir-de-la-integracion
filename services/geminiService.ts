import { GoogleGenAI } from "@google/genai";
import { ServiceOrder } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMechanicalDiagnosis = async (order: ServiceOrder): Promise<string> => {
  try {
    const prompt = `
      Actúa como un mecánico experto con 20 años de experiencia.
      Tengo una orden de servicio con los siguientes datos:
      Vehículo: ${order.vehicleModel}
      Descripción del problema: "${order.description}"

      Por favor, genera una lista de verificación técnica concisa (checklist) de 5 puntos clave que debo revisar para diagnosticar este problema.
      Formato: Devuelve solo la lista en formato Markdown.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "No se pudo generar el diagnóstico.";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Error al conectar con el asistente de IA. Por favor verifica tu conexión.";
  }
};