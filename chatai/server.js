const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyDgpLs7-h1afwL2MGc8wqbjrEMlCjP1Btc");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "What is the capital of Sri Lanka and who is the president of Sri lanka?";

model.generateContent(prompt)
    .then(result => {
        if (result && result.response && result.response.text) {
            console.log(result.response.text());
        } else {
            console.error("Error: Invalid response structure", result);
        }
    })
    .catch(error => {
        console.error("Error generating content:", error);
    });