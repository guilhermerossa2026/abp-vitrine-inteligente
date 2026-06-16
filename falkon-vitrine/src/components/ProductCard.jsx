import React from 'react';
import '../styles/ProductCard.css';

export function ProductCard({ produto }) {
  const valorDesconto = produto.preco > 200 ? '25% OFF' : '10% OFF';

  return (
    <div className={`product-card ${produto.promocao ? 'em-promocao' : ''}`}>
      
      {produto.promocao && (
        <span className="badge-promo">
          🚀 OPORTUNIDADE ÚNICA - {valorDesconto}
        </span>
      )}
      
      <div className="product-body">
        <h3 className="product-title">{produto.nome}</h3>
        <p className="product-description">{produto.descricao}</p>
        
        <div className="product-meta">
          <span className="category-tag">{produto.categoria}</span>
          <span className="rating">⭐ {produto.nota}</span>
        </div>
      </div>

      <div className="product-footer">
        <span className="product-price">
          {produto.preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
        
        <button className="buy-button" disabled={produto.estoque === 0}>
          {produto.estoque > 0 ? 'Garantir item' : 'Esgotado'}
        </button>
      </div>
    </div>
  );
}