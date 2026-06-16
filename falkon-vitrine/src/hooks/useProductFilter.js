import { useState, useMemo } from 'react';

export function useProductFilter(initialProducts) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortByPrice, setSortByPrice] = useState(''); // Valores aceitos: 'asc', 'desc' ou ''

  // useMemo impede re-renderizações inúteis e mantém a SPA fluida [cite: 24]
  const filteredProducts = useMemo(() => {
    let result = [...initialProducts];

    // 1. Filtro por Texto (Nome ou Descrição) 
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.nome.toLowerCase().includes(term) ||
          p.descricao.toLowerCase().includes(term)
      );
    }

    // 2. Filtro por Categoria [cite: 195]
    if (selectedCategory) {
      result = result.filter((p) => p.categoria === selectedCategory);
    }

    // 3. Ordenação Matemática por Preço [cite: 195]
    if (sortByPrice === 'asc') {
      result.sort((a, b) => a.preco - b.preco);
    } else if (sortByPrice === 'desc') {
      result.sort((a, b) => b.preco - a.preco);
    }

    return result;
  }, [initialProducts, searchTerm, selectedCategory, sortByPrice]);

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    sortByPrice,
    setSortByPrice,
    filteredProducts,
  };
}