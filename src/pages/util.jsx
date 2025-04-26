import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

function KitchenUtils() {
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
  const [favorites, setFavorites] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

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
    setFavorites((prev) =>
      prev.some((f) => f.id === ingredient.id) ? prev : [...prev, ingredient]
    );
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

  const generatePDF = () => {
    if (shoppingList.length === 0) {
      alert('Sua lista de compras está vazia!');
      return;
    }

    const doc = new jsPDF();
    
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input
                  type="number"
                  value={ing.quantity}
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
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="shopping-list" style={{
        backgroundColor: '#f0f8ff',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '30px'
      }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span role="img" aria-label="shopping">🛒</span> Lista de Compras
        </h3>
        {shoppingList.length > 0 ? (
          <>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {shoppingList.map((item) => (
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
        </h3>
        {favorites.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {favorites.map((fav) => (
              <li key={fav.id} style={{
                padding: '8px 0',
                borderBottom: '1px solid #eee',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span>{fav.name}</span>
                <span>{fav.quantity} {fav.unit}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: '#666' }}>Nenhum favorito ainda</p>
        )}
      </section>
    </div>
  );
}

export default KitchenUtils;