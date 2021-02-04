import React, { useState } from 'react';
import iconLupa from '../../../icons/search.svg';

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
      <button><img src={iconLupa} alt='icon-search' /></button>
    </form>
  )
}
