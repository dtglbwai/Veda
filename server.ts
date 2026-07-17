import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

app.use(express.json());

// API route to fetch scriptures
app.post("/api/scriptures", async (req, res) => {
  try {
    const { 
      topic = "Bhagavad Gita", 
      count = 5, 
      originalLang = "Sanskrit", 
      explanationLang = "English" 
    } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `Provide exactly ${count} random or popular verses (or hymns) from the topic: ${topic}.
      Task requirements:
      1. Provide the original text in ${originalLang} using its traditional Indian script (Devanagari for Sanskrit/Hindi/Marathi, or the respective Tamil, Telugu, Kannada, Malayalam, Bengali, Odia, etc. scripts derived from Brahmi).
      2. Provide a clear explanation in ${explanationLang}.
      3. For each verse, include book, chapter, and verse number.
      4. Provide a 'context' (brief essence) and a 'deepInsight' (philosophical or spiritual depth) in ${explanationLang}.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            scriptures: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  verseId: { type: Type.STRING },
                  book: { type: Type.STRING },
                  chapter: { type: Type.STRING },
                  verseNumber: { type: Type.STRING },
                  sanskrit: { type: Type.STRING },
                  translation: { type: Type.STRING },
                  context: { type: Type.STRING },
                  deepInsight: { type: Type.STRING },
                },
                required: ["verseId", "book", "chapter", "verseNumber", "sanskrit", "translation", "deepInsight"],
              },
            },
          },
          required: ["scriptures"],
        },
      },
    });

    const text = response.text;
    res.json(JSON.parse(text || "{}"));
  } catch (error) {
    console.error("Error fetching scriptures:", error);
    res.status(500).json({ error: "Failed to fetch scriptures." });
  }
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message, scripture, language = "English" } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `Verse Context:
      Scripture: ${scripture.book}
      Original: ${scripture.sanskrit}
      Translation: ${scripture.translation}
      Deep Insight: ${scripture.deepInsight}
      
      User Question: ${message}`,
      config: {
        systemInstruction: `You are an ancient Sage and scholar of Sanatana Dharma. You provide profound, compassionate, and scholarly answers in ${language}. Keep the answer focused on the specific spiritual and philosophical context of the scripture.`,
      }
    });

    res.json({ answer: response.text });
  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).json({ error: "Failed to process chat" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
