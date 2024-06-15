
 // $ npm install @google/generative-ai
 
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
<<<<<<< HEAD
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
 
=======
  const apiKey = process.env.GEMINI_API_KEY;
  
>>>>>>> 339239d0b9b8802d600deea49efe1590a5f6c1ad
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
<<<<<<< HEAD
=======
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
>>>>>>> 339239d0b9b8802d600deea49efe1590a5f6c1ad
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
<<<<<<< HEAD
    return result.response.text();
=======
>>>>>>> 339239d0b9b8802d600deea49efe1590a5f6c1ad
  }
  
  export default run;