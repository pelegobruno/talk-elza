<<<<<<< HEAD
import React, { useEffect, useState, useMemo } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
import { getReceitas } from "../services/storage";
import {
  syncReceitasFirebaseParaLocal,
  getReceitasOffline
} from "../services/sync";

function Home() {
  const [receitas, setReceitas] = useState([]);
  const [busca, setBusca] = useState("");
<<<<<<< HEAD
  const [carregando, setCarregando] = useState(true);
  
  // ⚡ ESTADO NOVO: Controla qual receita está aberta no Modal
  const [receitaSelecionada, setReceitaSelecionada] = useState(null);

  useEffect(() => {
    async function carregarReceitas() {
      setCarregando(true);
      try {
        if (navigator.onLine) {
          const firebaseReceitas = await getReceitas();
          setReceitas(firebaseReceitas.reverse());
          await syncReceitasFirebaseParaLocal();
        } else {
          const offlineReceitas = await getReceitasOffline();
          setReceitas(offlineReceitas.reverse());
        }
      } catch (error) {
        console.error("Erro ao carregar as receitas:", error);
      } finally {
        setCarregando(false);
=======

  useEffect(() => {
    async function carregarReceitas() {
      if (navigator.onLine) {
        const firebaseReceitas = await getReceitas();
        setReceitas(firebaseReceitas);

        await syncReceitasFirebaseParaLocal();
      } else {
        const offlineReceitas = await getReceitasOffline();
        setReceitas(offlineReceitas);
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
      }
    }

    carregarReceitas();
  }, []);

<<<<<<< HEAD
  const receitasFiltradas = useMemo(() => {
    return receitas.filter((r) =>
      r.titulo.toLowerCase().includes(busca.toLowerCase())
    );
  }, [receitas, busca]);

  return (
    <div style={styles.appContainer}>
      
      {/* Header */}
      <header style={styles.header}>
        <h1>Culinária Elza</h1>
        <p style={styles.subtitle}>O que vamos preparar hoje?</p>
      </header>

      {/* Barra de Busca Estilo App */}
      <div style={styles.searchWrapper}>
        <div style={styles.searchContainer}>
          <span style={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Busque sua receita favorita..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            style={styles.searchInput}
          />
        </div>
      </div>

      {/* Feed de Receitas - AGORA EM GRELHA */}
      {carregando ? (
        <div style={styles.messageState}>
          <p style={{ fontSize: "2.5rem", margin: "0 0 10px 0" }}>🍳</p>
          <p style={{ margin: 0, fontWeight: "bold" }}>Esquentando as panelas...</p>
        </div>
      ) : receitasFiltradas.length === 0 ? (
        <div style={styles.messageState}>
          <p style={{ fontSize: "2.5rem", margin: "0 0 10px 0" }}>🍽️</p>
          <p style={{ margin: 0, fontWeight: "bold" }}>Nenhuma receita encontrada para "{busca}".</p>
        </div>
      ) : (
        <div style={styles.feed}>
          {receitasFiltradas.map((receita, index) => (
            <div 
              key={receita.id || index} 
              style={styles.card}
              onClick={() => setReceitaSelecionada(receita)} // ⚡ ABRE O MODAL AO CLICAR
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.06)';
              }}
            >
              
              {/* Capa da Receita no Card (Menor e focada na imagem) */}
              {receita.imagem ? (
                <div style={{...styles.imageCover, backgroundImage: `url(${receita.imagem})`}}>
                  <div style={styles.overlay}>
                    <h3 style={styles.cardTitleOverImage}>{receita.titulo}</h3>
                  </div>
                </div>
              ) : (
                <div style={styles.noImageCover}>
                  <h3 style={styles.cardTitleNoImage}>{receita.titulo}</h3>
                </div>
              )}

              {/* Corpo Resumido do Card */}
              <div style={styles.cardBodySummary}>
                <p style={{ color: '#666', fontSize: '0.9rem', margin: 0, fontStyle: 'italic' }}>
                  Clique para ver os ingredientes, o modo de preparo e o vídeo!
                </p>
                <div style={{ marginTop: '12px', textAlign: 'right', color: '#ff0084', fontWeight: 'bold', fontSize: '0.95rem' }}>
                  Ver Receita Completa →
                </div>
              </div>

=======
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
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
            </div>
          ))}
        </div>
      )}
<<<<<<< HEAD

      {/* ⚡ JANELA MODAL FLUTUANTE (Receita Completa) */}
      {receitaSelecionada && (
        <div 
          style={styles.modalOverlay}
          onClick={() => setReceitaSelecionada(null)} // Fecha ao clicar fora
        >
          <div 
            style={styles.modalContent}
            onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro
          >
            {/* Botão de Fechar */}
            <button 
              onClick={() => setReceitaSelecionada(null)}
              style={styles.closeButton}
            >
              ✕
            </button>

            {/* Imagem de Destaque no Modal */}
            {receitaSelecionada.imagem ? (
              <div style={{...styles.modalImageCover, backgroundImage: `url(${receitaSelecionada.imagem})`}}>
                <div style={styles.modalOverlayGradient}>
                  <h2 style={styles.modalTitle}>{receitaSelecionada.titulo}</h2>
                </div>
              </div>
            ) : (
              <div style={{...styles.noImageCover, paddingTop: "60px"}}>
                <h2 style={{...styles.cardTitleNoImage, fontSize: "2.5rem"}}>{receitaSelecionada.titulo}</h2>
              </div>
            )}

            {/* Conteúdo Completo (Ingredientes e Vídeo) */}
            <div style={styles.modalBody}>
              
              {receitaSelecionada.descricao && (
                <div style={styles.section}>
                  <h4 style={styles.sectionTitle}>
                    <span style={{ marginRight: "8px" }}>📝</span> 
                    Modo de Preparo / Ingredientes
                  </h4>
                  <div style={styles.recipeBox}>
                    <ul style={styles.list}>
                      {receitaSelecionada.descricao
                        .split("\n")
                        .filter((linha) => linha.trim() !== "")
                        .map((linha, i) => (
                          <li key={i} style={styles.listItem}>
                            <div style={styles.bullet}></div>
                            <span style={styles.listText}>{linha.trim()}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              )}

              {receitaSelecionada.video && transformYoutubeURL(receitaSelecionada.video) && (
                <div style={styles.section}>
                  <h4 style={styles.sectionTitle}>
                    <span style={{ marginRight: "8px" }}>▶️</span> 
                    Acompanhe o Vídeo
                  </h4>
                  <iframe
                    width="100%"
                    height="350"
                    src={transformYoutubeURL(receitaSelecionada.video)}
                    title={`Vídeo da receita: ${receitaSelecionada.titulo}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={styles.videoPlayer}
                  ></iframe>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

=======
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
    </div>
  );
}

<<<<<<< HEAD
// ==========================================
// FUNÇÕES AUXILIARES
// ==========================================
function transformYoutubeURL(url) {
  if (!url) return "";
  try {
    let videoId = "";
    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0];
    } else {
      videoId = new URL(url).searchParams.get("v");
    }
=======
function transformYoutubeURL(url) {
  try {
    const videoId = new URL(url).searchParams.get("v");
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
    return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
  } catch {
    return "";
  }
}

<<<<<<< HEAD
// ==========================================
// ESTILOS NATIVOS DE APP (INLINE)
// ==========================================
const styles = {
  appContainer: {
    maxWidth: "1100px", // ⚡ Aumentado para comportar a grelha lado a lado
    margin: "0 auto",
    padding: "0 15px 30px 15px",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    paddingTop: "10px",
  },
  subtitle: {
    color: "#666",
    fontSize: "1rem",
    margin: "-5px 0 0 0",
    fontWeight: "500",
  },
  searchWrapper: {
    position: "sticky",
    top: "10px",
    zIndex: 10,
    marginBottom: "35px",
    display: "flex",
    justifyContent: "center",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: "30px",
    padding: "10px 20px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
    border: "1px solid rgba(0,0,0,0.02)",
    width: "100%",
    maxWidth: "500px",
  },
  searchIcon: {
    fontSize: "1.2rem",
    marginRight: "12px",
    color: "#ff0084",
  },
  searchInput: {
    border: "none",
    outline: "none",
    width: "100%",
    padding: "8px 0",
    fontSize: "1.05rem",
    backgroundColor: "transparent",
    margin: 0,
    boxShadow: "none",
    color: "#333",
  },
  messageState: {
    textAlign: "center",
    padding: "40px 20px",
    color: "#8e4a49",
    backgroundColor: "#fffdf9",
    borderRadius: "24px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
    maxWidth: "500px",
    margin: "0 auto",
  },
  
  // ⚡ ESTILOS DA GRELHA
  feed: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "25px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.06)",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  imageCover: {
    height: "220px", // Capa menor para o card da grelha
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "flex-end",
  },
  noImageCover: {
    padding: "40px 20px 20px",
    backgroundColor: "#fffdf9",
    borderBottom: "1px solid #eee",
    height: "220px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    width: "100%",
    padding: "40px 20px 15px",
    background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
  },
  cardTitleOverImage: {
    color: "#ffffff",
    margin: 0,
    fontSize: "2rem",
    textAlign: "left",
    lineHeight: "1.1",
    textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
    fontFamily: "'Mainstay', sans-serif",
  },
  cardTitleNoImage: {
    color: "#D2691E",
    margin: 0,
    fontSize: "2.2rem",
    textAlign: "center",
    lineHeight: "1.1",
    fontFamily: "'Mainstay', sans-serif",
  },
  cardBodySummary: {
    padding: "20px",
  },

  // ⚡ ESTILOS DO MODAL
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10000,
    padding: "20px",
    backdropFilter: "blur(3px)",
  },
  modalContent: {
    backgroundColor: "#fff8f0",
    width: "100%",
    maxWidth: "750px",
    maxHeight: "90vh",
    borderRadius: "25px",
    overflowY: "auto",
    boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
    position: "relative",
    animation: "fadeIn 0.2s ease",
  },
  closeButton: {
    position: "absolute",
    top: "15px",
    right: "15px",
    backgroundColor: "rgba(255,255,255,0.9)",
    border: "none",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    cursor: "pointer",
    fontSize: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    color: "#333",
    zIndex: 2,
  },
  modalImageCover: {
    height: "280px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "flex-end",
  },
  modalOverlayGradient: {
    width: "100%",
    padding: "60px 25px 20px",
    background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)",
  },
  modalTitle: {
    color: "#ffffff",
    margin: 0,
    fontSize: "3rem",
    textAlign: "center",
    fontFamily: "'Mainstay', sans-serif",
  },
  modalBody: {
    padding: "30px",
  },
  recipeBox: {
    backgroundColor: "#fffdfa",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
  },

  // ESTILOS DA RECEITA (TEXTOS E VÍDEO)
  section: {
    marginBottom: "30px",
  },
  sectionTitle: {
    fontSize: "1.2rem",
    color: "#ff0084",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "14px",
  },
  bullet: {
    width: "8px",
    height: "8px",
    backgroundColor: "#D2691E",
    borderRadius: "50%",
    marginTop: "8px",
    marginRight: "15px",
    flexShrink: 0,
  },
  listText: {
    color: "#4a4a4a",
    lineHeight: "1.6",
    fontSize: "1.05rem",
  },
  videoPlayer: {
    borderRadius: "18px",
    border: "none",
    backgroundColor: "#000",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    display: "block",
  }
};

export default Home;
=======
export default Home;
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
