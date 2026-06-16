import { useState, useMemo } from 'react';

export function useProductFilter(initialProducts) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortByPrice, setSortByPrice] = useState('');

  const filteredProducts = useMemo(() => {
    let result = [...initialProducts];

    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.nome.toLowerCase().includes(term) ||
          p.descricao.toLowerCase().includes(term)
      );
    }

    if (selectedCategory) {
      result = result.filter((p) => p.categoria === selectedCategory);
    }

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