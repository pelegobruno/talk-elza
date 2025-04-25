import React, { useEffect, useState } from "react";
import { getReceitas } from "../services/storage";
import {
  syncReceitasFirebaseParaLocal,
  getReceitasOffline
} from "../services/sync";

function Home() {
  const [receitas, setReceitas] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    async function carregarReceitas() {
      if (navigator.onLine) {
        const firebaseReceitas = await getReceitas();
        setReceitas(firebaseReceitas);

        await syncReceitasFirebaseParaLocal();
      } else {
        const offlineReceitas = await getReceitasOffline();
        setReceitas(offlineReceitas);
      }
    }

    carregarReceitas();
  }, []);

  const receitasFiltradas = receitas.filter((r) =>
    r.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <h1> 🍔 Culinária Elza 🍝</h1>

      <input
        type="text"
        placeholder="Buscar receitas..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        style={{
          width: "100%",
          padding: "0.8rem",
          marginBottom: "1rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "1rem",
        }}
      />

      {receitasFiltradas.length === 0 ? (
        <p>Nenhuma receita encontrada.</p>
      ) : (
        <div>
          {[...receitasFiltradas].reverse().map((receita, index) => (
            <div
              key={index}
              className="receita-card"
              style={{
                marginBottom: "2rem",
                borderBottom: "1px solid #ccc",
                paddingBottom: "1rem"
              }}
            >
              <h3>{receita.titulo}</h3>

              {receita.imagem && (
                <img
                  src={receita.imagem}
                  alt="Imagem da receita"
                  style={{
                    maxWidth: "300px",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              )}

              {receita.descricao && (
                <ul>
                  {receita.descricao
                    .split("\n")
                    .filter((linha) => linha.trim() !== "")
                    .map((linha, i) => (
                      <li key={i}>{linha.trim()}</li>
                    ))}
                </ul>
              )}

              {receita.video && transformYoutubeURL(receita.video) && (
                <iframe
                  width="300"
                  height="180"
                  src={transformYoutubeURL(receita.video)}
                  title="Vídeo da Receita"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    display: "block",
                    marginTop: "1rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></iframe>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function transformYoutubeURL(url) {
  try {
    const videoId = new URL(url).searchParams.get("v");
    return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
  } catch {
    return "";
  }
}

export default Home;
