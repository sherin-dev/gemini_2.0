// import { GoogleGenerativeAI } from "@google/generative-ai";


// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
} from '@google/genai';

async function runChat() {
  const ai = new GoogleGenAI({
    apiKey: "AIzaSyA1EeibbyTId_9bu9AFZV_aIrBOOOi0Lyw",
  });
  const tools = [
    {
      googleSearch: {
      }
    },
  ];
  const config = {
    thinkingConfig: {
      thinkingLevel: 'HIGH',
    },
    tools,
  };
  const model = 'gemini-3-pro-preview';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `INSERT_INPUT_HERE`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let fileIndex = 0;
  for await (const chunk of response) {
    console.log(chunk.text);
  }
}

export default runChat()

