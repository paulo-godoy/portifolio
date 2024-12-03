const express = require("express");
const axios = require("axios");

const app = express();
const port = 5000;

app.use(express.json());

app.post("/api/chatgpt", async (req, res) => {
  try {
    const { text } = req.body;
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci/completions",
      {
        prompt: text,
        max_tokens: 50, // Ajuste conforme necessário
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_OPENAI_API_KEY",
        },
      }
    );

    const answer = response.data.choices[0].text;
    res.json({ answer });
  } catch (error) {
    console.error("Erro ao consultar o ChatGPT:", error);
    res.status(500).json({ error: "Erro ao consultar o ChatGPT" });
  }
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
