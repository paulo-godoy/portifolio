import React, { useState } from "react";
import axios from "axios";

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [response, setResponse] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.post("/api/chatgpt", { text: searchTerm });
      setResponse(response.data.answer);
    } catch (error) {
      console.error("Erro ao consultar o ChatGPT:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite um assunto..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Pesquisar</button>
      {response && <div>Resposta: {response}</div>}
    </div>
  );
}

export default SearchComponent;
