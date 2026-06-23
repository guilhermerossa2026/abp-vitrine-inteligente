import '../styles/ProductCard.css';

export function ProductCard({ produto }) {
  return (
    <div className="product-card">
      
      {produto.promocao && (
        <span className="promo">
          Promoção
        </span>
      )}

      <h3>{produto.nome}</h3>

      <p>{produto.descricao}</p>

      <div className="info">
        <span>{produto.categoria}</span>
        <span>⭐ {produto.nota}</span>
      </div>

      <div className="footer">
        <span>
          {produto.preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>

        <button disabled={produto.estoque === 0}>
          {produto.estoque > 0 ? 'Comprar' : 'Sem estoque'}
        </button>
      </div>

    </div>
  );
}