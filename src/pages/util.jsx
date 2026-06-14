<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
import { jsPDF } from 'jspdf';

function KitchenUtils() {
  const [searchTerm, setSearchTerm] = useState('');
  const [baseIngredients] = useState([
<<<<<<< HEAD
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
=======
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
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105

  const [ingredients, setIngredients] = useState(
    baseIngredients.map((ing) => ({ ...ing, quantity: 1 }))
  );
<<<<<<< HEAD

  const [shoppingList, setShoppingList] = useState(() => {
    const saved = localStorage.getItem('elza_shopping_list');
    return saved ? JSON.parse(saved) : [];
  });

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('elza_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const triggerToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  // TIMERS E CRONÔMETRO
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    localStorage.setItem('elza_shopping_list', JSON.stringify(shoppingList));
  }, [shoppingList]);

  useEffect(() => {
    localStorage.setItem('elza_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    let interval = null;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && timerActive) {
      setTimerActive(false);
      triggerToast('🔔 Alarme! Seu prato está pronto!', 'info');
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(880, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
        oscillator.start();
        setTimeout(() => oscillator.stop(), 1500);
      } catch (e) {
        console.log('Áudio não suportado.');
      }
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);
=======
  const [favorites, setFavorites] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105

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
<<<<<<< HEAD
    setFavorites((prev) => {
      if (prev.some((f) => f.id === ingredient.id)) {
        triggerToast(`${ingredient.name} já está nos favoritos.`, 'info');
        return prev;
      }
      triggerToast(`❤️ ${ingredient.name} favoritado com sucesso!`);
      return [...prev, ingredient];
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
    triggerToast('Item removido dos favoritos.', 'info');
=======
    setFavorites((prev) =>
      prev.some((f) => f.id === ingredient.id) ? prev : [...prev, ingredient]
    );
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
  };

  const addToShoppingList = (ingredient) => {
    setShoppingList((prev) => {
      const existing = prev.find((item) => item.id === ingredient.id);
<<<<<<< HEAD
      triggerToast(`🛒 ${ingredient.quantity}x ${ingredient.name} adicionado à lista!`);
=======
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
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

<<<<<<< HEAD
  const removeFromShoppingList = (id) => {
    setShoppingList((prev) => prev.filter((item) => item.id !== id));
    triggerToast('Item removido da lista de compras.', 'info');
  };

  const handleStartTimer = () => {
    const totalSeconds = (parseInt(inputMinutes) || 0) * 60 + (parseInt(inputSeconds) || 0);
    if (totalSeconds <= 0) {
      triggerToast('Defina um tempo maior que zero!', 'error');
      return;
    }
    setTimeLeft(totalSeconds);
    setTimerActive(true);
    triggerToast('⏱️ Cronômetro iniciado!');
  };

  const setPresetTimer = (minutes) => {
    setTimeLeft(minutes * 60);
    setTimerActive(true);
    triggerToast(`⏱️ Timer de ${minutes} min iniciado!`);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const generatePDF = () => {
    if (shoppingList.length === 0) {
      triggerToast('Sua lista de compras está vazia!', 'error');
=======
  const generatePDF = () => {
    if (shoppingList.length === 0) {
      alert('Sua lista de compras está vazia!');
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
      return;
    }

    const doc = new jsPDF();
<<<<<<< HEAD
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
    triggerToast('📄 PDF exportado com sucesso!');
  };

  return (
    <div className="kitchen-utils" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', position: 'relative' }}>
      
      {toast.show && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: toast.type === 'error' ? '#ff3333' : toast.type === 'info' ? '#2196F3' : '#4CAF50',
          color: 'white',
          padding: '12px 30px',
          borderRadius: '30px',
          fontWeight: 'bold',
          boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
          zIndex: 9999,
          fontSize: '1rem',
          transition: 'all 0.3s ease'
        }}>
          {toast.message}
        </div>
      )}

      <h1 className="titulo-admin" style={{ fontSize: '2.5rem' }}>Utilitários de Cozinha</h1>

      {/* PAINEL CENTRAL DO TIMER */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        <div style={{ width: '100%', maxWidth: '500px', backgroundColor: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
          <h3 style={{ color: '#ff0084', margin: '0 0 10px 0' }}>⏱️ Timer de Cozinha</h3>
          
          <div style={{ fontSize: '3.5rem', fontWeight: 'bold', fontFamily: 'monospace', margin: '5px 0', color: timerActive ? '#ff0084' : '#333' }}>
            {timerActive ? formatTime(timeLeft) : formatTime((inputMinutes * 60) + (inputSeconds * 1))}
          </div>

          {!timerActive ? (
            <>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '15px' }}>
                <input type="number" placeholder="Min" min="0" onChange={(e) => setInputMinutes(Math.max(0, parseInt(e.target.value) || 0))} style={{ width: '80px', padding: '8px', textAlign: 'center', margin: 0 }} />
                <input type="number" placeholder="Seg" min="0" max="59" onChange={(e) => setInputSeconds(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))} style={{ width: '80px', padding: '8px', textAlign: 'center', margin: 0 }} />
                <button onClick={handleStartTimer} style={{ backgroundColor: '#ff0084', padding: '8px 20px' }}>Ligar</button>
              </div>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button onClick={() => setPresetTimer(6)} style={{ fontSize: '0.85rem', padding: '6px 10px', backgroundColor: '#f0f0f0', color: '#333' }}>Ovo Cozido (6m)</button>
                <button onClick={() => setPresetTimer(8)} style={{ fontSize: '0.85rem', padding: '6px 10px', backgroundColor: '#f0f0f0', color: '#333' }}>Massa (8m)</button>
                <button onClick={() => setPresetTimer(20)} style={{ fontSize: '0.85rem', padding: '6px 10px', backgroundColor: '#f0f0f0', color: '#333' }}>Arroz (20m)</button>
                <button onClick={() => setPresetTimer(35)} style={{ fontSize: '0.85rem', padding: '6px 10px', backgroundColor: '#f0f0f0', color: '#333' }}>Bolo (35m)</button>
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
              <button onClick={() => setTimerActive(false)} style={{ backgroundColor: '#ff9800', padding: '8px 20px' }}>Pausar</button>
              <button onClick={() => { setTimerActive(false); setTimeLeft(0); }} style={{ backgroundColor: '#777', padding: '8px 20px' }}>Zerar</button>
            </div>
          )}
        </div>
      </div>

      {/* ROL DE INGREDIENTES */}
      <section className="ingredients-list" style={{ marginBottom: '30px' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#8e4a49' }}>
          🧂 Rol de Ingredientes Disponíveis
        </h3>
        <input
          type="text"
          placeholder="🔍 Digite para pesquisar ingrediente..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ddd' }}
        />
        <ul style={{ listStyle: 'none', padding: 0, maxHeight: '350px', overflowY: 'auto', border: '1px solid #eee', paddingRight: '5px' }}>
          {filteredIngredients.map((ing) => (
            <li key={ing.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', marginBottom: '8px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
              <span style={{ flex: 1, fontWeight: '500' }}>{ing.name}</span>
=======
    
    // Configurações do documento
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(40, 40, 40);
    doc.text('Lista de Compras', 105, 15, null, null, 'center');
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.setTextColor(80, 80, 80);
    doc.text(`Gerado em: ${new Date().toLocaleDateString()}`, 105, 25, null, null, 'center');
    
    // Linha divisória
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 30, 190, 30);
    
    // Conteúdo da lista
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    
    let yPosition = 45;
    shoppingList.forEach((item) => {
      if (yPosition > 270) { // Verifica se está perto do final da página
        doc.addPage();
        yPosition = 20;
      }
      
      doc.text(
        `✔ ${item.name}: ${item.quantity} ${item.unit}`,
        20,
        yPosition
      );
      yPosition += 10;
    });
    
    // Rodapé
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text('Lista gerada pelo Utilitários de Cozinha', 105, 285, null, null, 'center');
    
    // Salva o PDF
    doc.save('lista_de_compras.pdf');
  };

  return (
    <div className="kitchen-utils" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Utilitários de Cozinha</h1>

      <section className="ingredients-list" style={{ marginBottom: '30px' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span role="img" aria-label="ingredients">🧂</span> Ingredientes
        </h3>
        <input
          type="text"
          placeholder="🔍 Buscar ingrediente..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            borderRadius: '5px',
            border: '1px solid #ddd'
          }}
        />
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredIngredients.map((ing) => (
            <li key={ing.id} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px',
              marginBottom: '8px',
              backgroundColor: '#f9f9f9',
              borderRadius: '5px'
            }}>
              <span style={{ flex: 1 }}>{ing.name}</span>
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input
                  type="number"
                  value={ing.quantity}
<<<<<<< HEAD
                  onChange={(e) => updateQuantity(ing.id, Math.max(1, Number(e.target.value) || 1))}
                  min="1"
                  style={{ width: '60px', padding: '5px', textAlign: 'center', borderRadius: '3px', border: '1px solid #ddd', margin: 0 }}
                />
                <span style={{ width: '30px', fontSize: '0.9rem', color: '#666' }}>{ing.unit}</span>
              </div>
              <div className="button-group" style={{ display: 'flex', gap: '5px', marginLeft: '15px' }}>
                <button onClick={() => addToShoppingList(ing)} style={{ padding: '5px 12px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Lista</button>
                <button onClick={() => addFavorite(ing)} style={{ padding: '5px 12px', backgroundColor: '#e91e63', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Favorito</button>
=======
                  onChange={(e) =>
                    updateQuantity(ing.id, Math.max(1, Number(e.target.value) || 1))
                  }
                  min="1"
                  style={{
                    width: '60px',
                    padding: '5px',
                    textAlign: 'center',
                    borderRadius: '3px',
                    border: '1px solid #ddd'
                  }}
                />
                <span>{ing.unit}</span>
              </div>
              <div className="button-group" style={{ display: 'flex', gap: '5px', marginLeft: '15px' }}>
                <button
                  onClick={() => addToShoppingList(ing)}
                  style={{
                    padding: '5px 10px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer'
                  }}
                >
                  ➕ Lista
                </button>
                <button
                  onClick={() => addFavorite(ing)}
                  style={{
                    padding: '5px 10px',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer'
                  }}
                >
                  ❤️ Favorito
                </button>
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
              </div>
            </li>
          ))}
        </ul>
      </section>

<<<<<<< HEAD
      {/* LISTA DE COMPRAS */}
      <section className="shopping-list" style={{ backgroundColor: '#f0f8ff', padding: '20px', borderRadius: '15px', marginBottom: '30px', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2196F3' }}>
          🛒 Minha Lista de Compras Atual
=======
      <section className="shopping-list" style={{
        backgroundColor: '#f0f8ff',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '30px'
      }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span role="img" aria-label="shopping">🛒</span> Lista de Compras
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
        </h3>
        {shoppingList.length > 0 ? (
          <>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {shoppingList.map((item) => (
<<<<<<< HEAD
                <li key={item.id} style={{ padding: '10px 0', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: '500' }}>{item.name}</span>
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
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ff0084' }}>
          ⭐ Meus Ingredientes Favoritos
=======
                <li key={item.id} style={{
                  padding: '8px 0',
                  borderBottom: '1px solid #ddd',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <span>{item.name}</span>
                  <span>{item.quantity} {item.unit}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={generatePDF}
              style={{
                marginTop: '15px',
                padding: '10px 20px',
                backgroundColor: '#2196F3',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              📄 Gerar PDF
            </button>
            <p style={{ color: '#666', fontSize: '14px', marginTop: '10px' }}>
              Envie este PDF manualmente pelo WhatsApp 😉
            </p>
          </>
        ) : (
          <p style={{ color: '#666' }}>Nenhum item na lista</p>
        )}
      </section>

      <section className="favorites" style={{
        backgroundColor: '#fffaf0',
        padding: '20px',
        borderRadius: '10px'
      }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span role="img" aria-label="favorites">🌟</span> Favoritos
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
        </h3>
        {favorites.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {favorites.map((fav) => (
<<<<<<< HEAD
              <li key={fav.id} style={{ padding: '10px 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: '500' }}>{fav.name}</span>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <span style={{ color: '#666' }}>Padrão: {fav.quantity} {fav.unit}</span>
                  <button onClick={() => removeFavorite(fav.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', padding: 0 }}>❌</button>
                </div>
=======
              <li key={fav.id} style={{
                padding: '8px 0',
                borderBottom: '1px solid #eee',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span>{fav.name}</span>
                <span>{fav.quantity} {fav.unit}</span>
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
              </li>
            ))}
          </ul>
        ) : (
<<<<<<< HEAD
          <p style={{ color: '#777', fontStyle: 'italic', textAlign: 'center', marginTop: '10px' }}>Nenhum ingrediente favoritado ainda.</p>
=======
          <p style={{ color: '#666' }}>Nenhum favorito ainda</p>
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
        )}
      </section>
    </div>
  );
}

export default KitchenUtils;