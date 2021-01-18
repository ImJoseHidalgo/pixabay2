import React from 'react';
import { Buscador } from './Buscador';

export const HeaderHomeSearch = ({ handleSearch }) => {
  return (
    <header className='header-home-search'>
      <h1>Buscador de Imagenes</h1>
      <Buscador handleSearch={handleSearch} />
    </header>
  )
}
export default HeaderHomeSearch;