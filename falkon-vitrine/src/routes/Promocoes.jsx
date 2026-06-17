import React, { useState, useEffect } from 'react';
import { useProductFilter } from '../hooks/useProductFilter';
import { ProductCard } from '../components/ProductCard';
import '../styles/global.css';

export function Promocoes() {
  const [dbProducts, setDbProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/produtos')
      .then((res) => res.json())
      .then((data) => setDbProducts(data.filter(p => p.promocao === true)))
      .catch((err) => console.error("Erro ao carregar promoções da Falkon:", err));
  }, []);

  const { sortByPrice, setSortByPrice, filteredProducts } = useProductFilter(dbProducts);

  return (
    <div className="page-container" style={{ padding: '20px' }}>
      <div style={{ marginBottom: '2rem', borderLeft: '4px solid var(--promo-color)', paddingLeft: '15px' }}>
        <h1 style={{ fontSize: '2rem', color: '#fff' }}>🔥 Achados Falkon: Limpa Estoque</h1>
        <p style={{ color: 'var(--text-muted)' }}>Oportunidades únicas sem perda de tempo de rolagem infinita.</p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <select
          value={sortByPrice}
          onChange={(e) => setSortByPrice(e.target.value)}
          style={{
            padding: '10px', borderRadius: '6px', border: '1px solid #1e293b',
            backgroundColor: 'var(--bg-secondary)', color: '#fff'
          }}
        >
          <option value="">Ordenar por Preço</option>
          <option value="asc">Preço: Menor para Maior</option>
          <option value="desc">Preço: Maior para Menor</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {filteredProducts.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}