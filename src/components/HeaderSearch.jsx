import React from 'react';
import { Buscador } from './Buscador';

export const HeaderSearch = ({ handleSearch }) => {
  return (
    <header className='header-search'>
      <h1>Buscador de Imagenes</h1>
      <Buscador handleSearch={handleSearch} />
    </header>
  )
}
export default HeaderSearch;