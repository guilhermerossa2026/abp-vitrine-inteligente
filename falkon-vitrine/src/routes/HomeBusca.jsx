import React, { useState, useEffect } from 'react';
import { useProductFilter } from '../hooks/useProductFilter';
import { ProductCard } from '../components/ProductCard';
import '../styles/global.css';

export function HomeBusca() {
  const [dbProducts, setDbProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/produtos')
      .then((res) => res.json())
      .then((data) => setDbProducts(data))
      .catch((err) => console.error("Erro ao buscar dados da Falkon:", err));
  }, []);

  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    sortByPrice,
    setSortByPrice,
    filteredProducts,
  } = useProductFilter(dbProducts);

  return (
    <div className="page-container" style={{ padding: '20px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2>🔍 Vitrine Inteligente Falkon</h2>
        <p style={{ color: 'var(--text-muted)' }}>Filtre o inventário em tempo real com agilidade.</p>
      </div>
      
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Buscar por nome ou descrição..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: '1', minWidth: '250px', padding: '10px', borderRadius: '6px',
            border: '1px solid #1e293b', backgroundColor: 'var(--bg-secondary)', color: '#fff'
          }}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: '10px', borderRadius: '6px', border: '1px solid #1e293b',
            backgroundColor: 'var(--bg-secondary)', color: '#fff'
          }}
        >
          <option value="">Todas as Categorias</option>
          <option value="perifericos">Periféricos</option>
          <option value="monitores">Monitores</option>
          <option value="geek">Geek/Cultura Pop</option>
          <option value="livros">Livros</option>
        </select>

        <select
          value={sortByPrice}
          onChange={(e) => setSortByPrice(e.target.value)}
          style={{
            padding: '10px', borderRadius: '6px', border: '1px solid #1e293b',
            backgroundColor: 'var(--bg-secondary)', color: '#fff'
          }}
        >
          <option value="">Ordenar por Preço</option>
          <option value="asc">Menor Preço</option>
          <option value="desc">Maior Preço</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {filteredProducts.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '2rem' }}>
          Nenhum produto encontrado para essa busca.
        </p>
      )}
    </div>
  );
}