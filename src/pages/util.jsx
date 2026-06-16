import React, { useState, useEffect, useRef } from 'react';
import { jsPDF } from 'jspdf';

// Importando os áudios
import audioTimer from '../assets/audio/timer.mp3';
import audioUtil from '../assets/audio/util.mp3';

export default function Util() {
  // --- ESTADOS DOS INGREDIENTES E LISTAS ---
  const [searchTerm, setSearchTerm] = useState('');
  const [baseIngredients] = useState([
    { id: 1, name: 'Farinha de Trigo', unit: 'g' },
    { id: 2, name: 'Açúcar Refinado', unit: 'g' },
    { id: 3, name: 'Ovos', unit: 'un' },
    { id: 4, name: 'Leite Integral', unit: 'ml' },
    { id: 5, name: 'Manteiga sem Sal', unit: 'g' },
    { id: 6, name: 'Sal Refinado', unit: 'g' },
    { id: 7, name: 'Fermento em Pó', unit: 'g' },
    { id: 8, name: 'Chocolate em Pó 50%', unit: 'g' },
    { id: 9, name: 'Extrato de Baunilha', unit: 'ml' },
    { id: 10, name: 'Creme de Leite Fresco', unit: 'ml' },
    { id: 11, name: 'Coco Ralado', unit: 'g' },
    { id: 12, name: 'Óleo de Soja', unit: 'ml' },
    { id: 13, name: 'Água Mineral', unit: 'ml' },
    { id: 14, name: 'Leite Condensado', unit: 'g' },
    { id: 15, name: 'Molho de Tomate', unit: 'ml' },
    { id: 16, name: 'Cebola Branca', unit: 'un' },
    { id: 17, name: 'Alho', unit: 'un' },
    { id: 18, name: 'Tomate Italiano', unit: 'un' },
    { id: 19, name: 'Pimenta-do-reino', unit: 'g' },
    { id: 20, name: 'Orégano Seco', unit: 'g' },
    { id: 21, name: 'Farinha de Rosca', unit: 'g' },
    { id: 22, name: 'Açúcar Mascavo', unit: 'g' },
    { id: 23, name: 'Fermento Biológico', unit: 'g' },
    { id: 24, name: 'Leite em Pó', unit: 'g' },
    { id: 25, name: 'Margarina', unit: 'g' },
    { id: 26, name: 'Sal Marinho', unit: 'g' },
    { id: 27, name: 'Bicarbonato de Sódio', unit: 'g' },
    { id: 28, name: 'Chocolate Granulado', unit: 'g' },
    { id: 29, name: 'Essência de Baunilha', unit: 'ml' },
    { id: 30, name: 'Leite de Coco', unit: 'ml' },
    { id: 31, name: 'Farinha de Mandioca', unit: 'g' },
    { id: 32, name: 'Açúcar de Confeiteiro', unit: 'g' },
    { id: 33, name: 'Clara em Neve', unit: 'un' },
    { id: 34, name: 'Leite Desnatado', unit: 'ml' },
    { id: 35, name: 'Manteiga Ghee', unit: 'g' },
    { id: 36, name: 'Sal Light', unit: 'g' },
    { id: 37, name: 'Fermento Químico', unit: 'g' },
    { id: 38, name: 'Cacau em Pó', unit: 'g' },
    { id: 39, name: 'Aroma de Baunilha', unit: 'ml' },
    { id: 40, name: 'Creme de Leite UHT', unit: 'ml' },
    { id: 41, name: 'Farinha Integral', unit: 'g' },
    { id: 42, name: 'Açúcar Demerara', unit: 'g' },
    { id: 43, name: 'Gema', unit: 'un' },
    { id: 44, name: 'Leite Sem Lactose', unit: 'ml' },
    { id: 45, name: 'Manteiga com Sal', unit: 'g' },
    { id: 46, name: 'Sal Grosso', unit: 'g' },
    { id: 47, name: 'Gelatina em Pó', unit: 'g' },
    { id: 48, name: 'Chocolate Meio Amargo', unit: 'g' },
    { id: 49, name: 'Canela em Pó', unit: 'g' },
    { id: 50, name: 'Leite Condensado Light', unit: 'g' },
    { id: 51, name: 'Farinha de Amêndoas', unit: 'g' },
    { id: 52, name: 'Mel', unit: 'ml' },
    { id: 53, name: 'Ovo Caipira', unit: 'un' },
    { id: 54, name: 'Leite de Amêndoas', unit: 'ml' },
    { id: 55, name: 'Manteiga de Amendoim', unit: 'g' },
    { id: 56, name: 'Sal Rosa', unit: 'g' },
    { id: 57, name: 'Agar-Agar', unit: 'g' },
    { id: 58, name: 'Chocolate Branco', unit: 'g' },
    { id: 59, name: 'Noz-Moscada', unit: 'g' },
    { id: 60, name: 'Doce de Leite', unit: 'g' },
    { id: 61, name: 'Farinha de Aveia', unit: 'g' },
    { id: 62, name: 'Xarope de Milho', unit: 'ml' },
    { id: 63, name: 'Ovo Orgânico', unit: 'un' },
    { id: 64, name: 'Leite de Soja', unit: 'ml' },
    { id: 65, name: 'Manteiga de Cacau', unit: 'g' },
    { id: 66, name: 'Sal com Ervas', unit: 'g' },
    { id: 67, name: 'Pectina', unit: 'g' },
    { id: 68, name: 'Chocolate Ruby', unit: 'g' },
    { id: 69, name: 'Cardamomo', unit: 'g' },
    { id: 70, name: 'Leite em Pó Desnatado', unit: 'g' },
    { id: 71, name: 'Farinha de Centeio', unit: 'g' },
    { id: 72, name: 'Xilitol', unit: 'g' },
    { id: 73, name: 'Ovo Codorna', unit: 'un' },
    { id: 74, name: 'Leite de Coco em Pó', unit: 'g' },
    { id: 75, name: 'Manteiga de Karité', unit: 'g' },
    { id: 76, name: 'Sal Defumado', unit: 'g' },
    { id: 77, name: 'Goma Xantana', unit: 'g' },
    { id: 78, name: 'Chocolate 70%', unit: 'g' },
    { id: 79, name: 'Cravo-da-índia', unit: 'g' },
    { id: 80, name: 'Leite Evaporado', unit: 'ml' },
    { id: 81, name: 'Farinha de Arroz', unit: 'g' },
    { id: 82, name: 'Stevia', unit: 'g' },
    { id: 83, name: 'Ovo de Pata', unit: 'un' },
    { id: 84, name: 'Leite de Arroz', unit: 'ml' },
    { id: 85, name: 'Manteiga de Coco', unit: 'g' },
    { id: 86, name: 'Sal de Aipo', unit: 'g' },
    { id: 87, name: 'Amido de Milho', unit: 'g' },
    { id: 88, name: 'Chocolate Diet', unit: 'g' },
    { id: 89, name: 'Anis Estrelado', unit: 'g' },
    { id: 90, name: 'Leite de Cabra', unit: 'ml' },
    { id: 91, name: 'Farinha de Grão-de-Bico', unit: 'g' },
    { id: 92, name: 'Eritritol', unit: 'g' },
    { id: 93, name: 'Ovo de Codorna', unit: 'un' },
    { id: 94, name: 'Leite de Castanha', unit: 'ml' },
    { id: 95, name: 'Manteiga de Castanha', unit: 'g' },
    { id: 96, name: 'Sal de Ervas', unit: 'g' },
    { id: 97, name: 'Gelatina Sem Sabor', unit: 'g' },
    { id: 98, name: 'Chocolate Zero Lactose', unit: 'g' },
    { id: 99, name: 'Gengibre em Pó', unit: 'g' },
    { id: 100, name: 'Leite de Quinoa', unit: 'ml' }
  ]);

  const [ingredients, setIngredients] = useState(
    baseIngredients.map((ing) => ({ ...ing, quantity: 1 }))
  );

  const [shoppingList, setShoppingList] = useState(() => {
    const saved = localStorage.getItem('elza_shopping_list');
    return saved ? JSON.parse(saved) : [];
  });

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('elza_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // --- ESTADOS DO TEMPORIZADOR PROFISSIONAL ---
  const [inputMinutes, setInputMinutes] = useState(''); 
  const [inputSeconds, setInputSeconds] = useState(''); 
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  
  const endTimeRef = useRef(null);
  const wakeLockRef = useRef(null);
  const timerAudioRef = useRef(new Audio(audioTimer));
  const utilAudioRef = useRef(new Audio(audioUtil));

  useEffect(() => {
    localStorage.setItem('elza_shopping_list', JSON.stringify(shoppingList));
  }, [shoppingList]);

  useEffect(() => {
    localStorage.setItem('elza_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Função para manter a tela ligada
  const requestWakeLock = async () => {
    try {
      if ('wakeLock' in navigator) {
        wakeLockRef.current = await navigator.wakeLock.request('screen');
      }
    } catch (err) {
      console.log('Wake Lock falhou ou não é suportado:', err);
    }
  };

  const releaseWakeLock = () => {
    if (wakeLockRef.current !== null) {
      wakeLockRef.current.release().catch(console.error);
      wakeLockRef.current = null;
    }
  };

  // Desliga o áudio do timer imediatamente
  const stopTimerAudio = () => {
    timerAudioRef.current.pause();
    timerAudioRef.current.currentTime = 0;
  };

  // Sequência de áudio final
  const playEndSequence = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      let beepCount = 0;

      const beep = () => {
        if (beepCount >= 3) {
          utilAudioRef.current.currentTime = 0;
          utilAudioRef.current.play().catch(e => console.log(e));
          return;
        }

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        gain.gain.setValueAtTime(1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.5);

        beepCount++;
        setTimeout(beep, 1000); 
      };

      beep();
    } catch (e) {
      console.log('Áudio não suportado.');
    }
  };

  // Loop inteligente do temporizador
  useEffect(() => {
    let interval;
    if (timerActive) {
      interval = setInterval(() => {
        const remaining = Math.round((endTimeRef.current - Date.now()) / 1000);
        
        if (remaining <= 0) {
          clearInterval(interval);
          setTimeLeft(0);
          setTimerActive(false);
          releaseWakeLock();
          stopTimerAudio(); 
          playEndSequence();
        } else {
          setTimeLeft(remaining);
        }
      }, 500);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  const startPreciseTimer = (totalSeconds) => {
    if (totalSeconds <= 0) return;
    
    endTimeRef.current = Date.now() + totalSeconds * 1000;
    setTimeLeft(totalSeconds);
    setTimerActive(true);
    setInputMinutes(''); 
    setInputSeconds(''); 

    requestWakeLock();

    timerAudioRef.current.currentTime = 0;
    timerAudioRef.current.loop = true; 
    timerAudioRef.current.play().catch(e => console.log('Áudio bloqueado'));
  };

  const handleStartTimer = () => {
    const totalSeconds = (parseInt(inputMinutes) || 0) * 60 + (parseInt(inputSeconds) || 0);
    startPreciseTimer(totalSeconds);
  };

  const setPresetTimer = (minutes) => {
    startPreciseTimer(minutes * 60);
  };

  const handlePause = () => {
    setTimerActive(false);
    stopTimerAudio();
  };

  const handleZero = () => {
    setTimerActive(false);
    setTimeLeft(0);
    releaseWakeLock();
    stopTimerAudio();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // --- FUNÇÕES DA LISTA E FAVORITOS ---
  const filteredIngredients = ingredients.filter((ing) =>
    ing.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const updateQuantity = (id, newQuantity) => {
    setIngredients((prev) =>
      prev.map((ing) =>
        ing.id === id ? { ...ing, quantity: newQuantity } : ing
      )
    );
  };

  const addFavorite = (ingredient) => {
    setFavorites((prev) => {
      if (prev.some((f) => f.id === ingredient.id)) return prev;
      return [...prev, ingredient];
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  const addToShoppingList = (ingredient) => {
    setShoppingList((prev) => {
      const existing = prev.find((item) => item.id === ingredient.id);
      if (existing) {
        return prev.map((item) =>
          item.id === ingredient.id
            ? { ...item, quantity: item.quantity + ingredient.quantity }
            : item
        );
      }
      return [...prev, ingredient];
    });
  };

  const removeFromShoppingList = (id) => {
    setShoppingList((prev) => prev.filter((item) => item.id !== id));
  };

  const generatePDF = () => {
    if (shoppingList.length === 0) return;

    const doc = new jsPDF();
    const dateStr = new Date().toLocaleDateString('pt-BR').replace(/\//g, '');
    const randomNum = Math.floor(Math.random() * 9000) + 1000;
    const listID = `ELZA-${dateStr}-${randomNum}`;

    const drawWatermark = () => {
      doc.setTextColor(240, 240, 240);
      doc.setFontSize(60);
      doc.setFont('helvetica', 'bold');
      doc.text('CULINARIA ELZA', 105, 160, { align: 'center', angle: 45 });
    };

    drawWatermark();

    doc.setTextColor(255, 0, 132); 
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('LISTA DE COMPRAS', 105, 22, { align: 'center' });
    
    doc.setTextColor(100, 100, 100); 
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`ID da Lista: ${listID}  |  Data: ${new Date().toLocaleDateString('pt-BR')}`, 105, 30, { align: 'center' });
    
    doc.setDrawColor(255, 0, 132);
    doc.setLineWidth(0.8);
    doc.line(20, 35, 190, 35);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(50, 50, 50);
    doc.text('Ingrediente / Item', 30, 45); 
    doc.text('Quantidade', 190, 45, { align: 'right' });
    
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.3);
    doc.line(20, 48, 190, 48);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.setTextColor(20, 20, 20); 
    
    let yPosition = 56;
    
    shoppingList.forEach((item, index) => {
      if (yPosition > 270) { 
        doc.addPage();
        drawWatermark();
        yPosition = 25;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(12);
        doc.setTextColor(20, 20, 20);
      }

      if (index % 2 === 0) {
        doc.setFillColor(248, 248, 250);
        doc.rect(15, yPosition - 6, 180, 9, 'F');
      }
      
      doc.setDrawColor(150, 150, 150);
      doc.rect(20, yPosition - 4, 4, 4); 

      doc.text(item.name, 28, yPosition);
      doc.text(`${item.quantity} ${item.unit}`, 190, yPosition, { align: 'right' });
      
      yPosition += 10;
    });
    
    doc.setDrawColor(200, 200, 200);
    doc.line(20, yPosition + 5, 190, yPosition + 5);

    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.text('Documento gerado automaticamente pelo App Culinaria Elza', 105, yPosition + 12, { align: 'center' });
    
    doc.save(`Lista_Compras_${listID}.pdf`);
  };

  return (
    <div className="kitchen-utils">
      
      <h1 className="titulo-admin" style={{ fontSize: '2.5rem' }}>Utilitários de Cozinha</h1>

      {/* PAINEL CENTRAL DO TIMER */}
      <div className="card-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        <div style={{ width: '100%', maxWidth: '500px', backgroundColor: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
          <h3 style={{ color: '#ff0084', margin: '0 0 10px 0' }}>⏱️ Timer de Cozinha</h3>
          
          <div style={{ fontSize: '3.5rem', fontWeight: 'bold', fontFamily: 'monospace', margin: '5px 0', color: timerActive ? '#ff0084' : '#333' }}>
            {timerActive ? formatTime(timeLeft) : formatTime((parseInt(inputMinutes) || 0) * 60 + (parseInt(inputSeconds) || 0))}
          </div>

          {!timerActive ? (
            <>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '15px' }}>
                <input 
                  type="text" 
                  inputMode="numeric" 
                  maxLength="2" 
                  placeholder="Min" 
                  value={inputMinutes} 
                  onChange={(e) => setInputMinutes(e.target.value.replace(/\D/g, ''))} 
                  style={{ width: '80px', padding: '8px', textAlign: 'center', margin: 0, color: '#333', fontSize: '1.2rem', fontWeight: 'bold' }} 
                />
                <input 
                  type="text" 
                  inputMode="numeric" 
                  maxLength="2" 
                  placeholder="Seg" 
                  value={inputSeconds} 
                  onChange={(e) => {
                    let val = e.target.value.replace(/\D/g, '');
                    if (parseInt(val) > 59) val = '59'; 
                    setInputSeconds(val);
                  }} 
                  style={{ width: '80px', padding: '8px', textAlign: 'center', margin: 0, color: '#333', fontSize: '1.2rem', fontWeight: 'bold' }} 
                />
                <button onClick={handleStartTimer} style={{ backgroundColor: '#ff0084', padding: '8px 20px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>Ligar</button>
              </div>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button onClick={() => setPresetTimer(6)} style={{ fontSize: '0.85rem', padding: '6px 10px', backgroundColor: '#f0f0f0', color: '#333', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Ovo Cozido (6m)</button>
                <button onClick={() => setPresetTimer(8)} style={{ fontSize: '0.85rem', padding: '6px 10px', backgroundColor: '#f0f0f0', color: '#333', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Massa (8m)</button>
                <button onClick={() => setPresetTimer(20)} style={{ fontSize: '0.85rem', padding: '6px 10px', backgroundColor: '#f0f0f0', color: '#333', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Arroz (20m)</button>
                <button onClick={() => setPresetTimer(35)} style={{ fontSize: '0.85rem', padding: '6px 10px', backgroundColor: '#f0f0f0', color: '#333', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Bolo (35m)</button>
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
              <button onClick={handlePause} style={{ backgroundColor: '#ff9800', padding: '8px 20px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Pausar</button>
              <button onClick={handleZero} style={{ backgroundColor: '#777', padding: '8px 20px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Zerar</button>
            </div>
          )}
        </div>
      </div>

      {/* ROL DE INGREDIENTES */}
      <section className="ingredientes-section">
        <h2 className="ingredientes-titulo">🧂 Rol de Ingredientes Disponíveis</h2>
        
        <div className="pesquisa-container">
          <span className="pesquisa-icone">🔍</span>
          <input 
            type="text" 
            placeholder="Digite para pesquisar ingrediente..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pesquisa-input"
          />
        </div>

        <ul className="ingredientes-lista" style={{ maxHeight: '400px', overflowY: 'auto', overflowX: 'hidden' }}>
          {filteredIngredients.map((ing) => (
            <li key={ing.id} className="ingrediente-item">
              
              {/* Andar de Cima: Nome centralizado ganhando todo o espaço */}
              <div className="ing-nome">{ing.name}</div>
              
              {/* Andar de Baixo: Quantidade na esquerda e Botões na Direita */}
              <div className="ing-controles">
                <div className="ing-meio">
                  <input 
                    type="text" 
                    inputMode="numeric"
                    maxLength="3"
                    value={ing.quantity} 
                    onChange={(e) => {
                      let val = e.target.value.replace(/\D/g, '');
                      updateQuantity(ing.id, val === '' ? 1 : Number(val));
                    }}
                    className="ing-qtd" 
                  />
                  <span className="ing-unidade">{ing.unit}</span>
                </div>
                
                <div className="ing-acoes">
                  <button className="btn-lista" onClick={() => addToShoppingList(ing)}>Lista</button>
                  <button className="btn-favorito" onClick={() => addFavorite(ing)}>Favorito</button>
                </div>
              </div>

            </li>
          ))}
        </ul>
      </section>

      {/* LISTA DE COMPRAS */}
      <section className="shopping-list" style={{ backgroundColor: '#f0f8ff', padding: '20px', borderRadius: '15px', marginBottom: '30px', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2196F3', flexWrap: 'wrap' }}>
          🛒 Minha Lista de Compras Atual
        </h3>
        {shoppingList.length > 0 ? (
          <>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {shoppingList.map((item) => (
                <li key={item.id} className="lista-compra-item" style={{ padding: '12px 0', borderBottom: '1px solid #ddd', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontWeight: 'bold', color: '#333', flex: '1 1 100%' }}>{item.name}</span>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginLeft: 'auto' }}>
                    <span style={{ fontWeight: 'bold', color: '#333', marginRight: '10px' }}>{item.quantity} {item.unit}</span>
                    <button onClick={() => removeFromShoppingList(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', padding: 0 }}>❌</button>
                  </div>
                </li>
              ))}
            </ul>
            <button onClick={generatePDF} style={{ marginTop: '15px', padding: '12px 24px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', width: '100%', boxShadow: '0 4px 15px rgba(33, 150, 243, 0.3)' }}>
              Baixar PDF Profissional Blindado
            </button>
          </>
        ) : (
          <p style={{ color: '#777', fontStyle: 'italic', textAlign: 'center', marginTop: '10px' }}>Sua lista de compras está vazia no momento.</p>
        )}
      </section>

      {/* FAVORITOS */}
      <section className="favorites" style={{ backgroundColor: '#fffaf0', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ff0084', flexWrap: 'wrap' }}>
          ⭐ Meus Ingredientes Favoritos
        </h3>
        {favorites.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {favorites.map((fav) => (
              <li key={fav.id} className="lista-compra-item" style={{ padding: '12px 0', borderBottom: '1px solid #eee', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontWeight: 'bold', color: '#333', flex: '1 1 100%' }}>{fav.name}</span>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginLeft: 'auto' }}>
                  <span style={{ color: '#666' }}>Padrão: {fav.quantity} {fav.unit}</span>
                  <button onClick={() => removeFavorite(fav.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', padding: 0 }}>❌</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: '#777', fontStyle: 'italic', textAlign: 'center', marginTop: '10px' }}>Nenhum ingrediente favoritado ainda.</p>
        )}
      </section>
    </div>
  );
}