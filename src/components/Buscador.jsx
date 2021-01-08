import React, { useState } from 'react';

export const Buscador = ({ handleSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword !== '') {
      e.preventDefault(e);
      handleSearch(keyword);
      setKeyword('');
    }
  }
  
  const handleChange = (e) => {
    setKeyword(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder='Ej: Montañas, Cielo, Autos, etc'
        type="tex"
        value={keyword}
        onChange={handleChange} />
      <button>Buscar</button>
    </form>
  )
}
