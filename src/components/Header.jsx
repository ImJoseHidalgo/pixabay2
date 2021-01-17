import React from 'react';
import { Buscador } from './Buscador';

export const Header = ({ setTipe, handleSearch }) => {
  return (
    <header>
      <h1>Buscador de Imagenes</h1>
      <Buscador setTipe={setTipe} handleSearch={handleSearch} />
    </header>
  )
}
export default Header;