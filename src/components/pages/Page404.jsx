import React, { useState } from 'react';
import { useLocation } from 'wouter';
import HeaderSearch from '../HeaderSearch';

const Page404 = () => {
  const [inpKeyword, setInpKeyword] = useState('');
  const [path, pushLocation] = useLocation();

  const handleSearch = (inpKeyword) => {
    setInpKeyword(inpKeyword);
    localStorage.setItem('page', 1);
    pushLocation(`/search/${inpKeyword}/1`);
  }

  return (
    <div>
      <HeaderSearch handleSearch={handleSearch} />
      <h1>Pagina no encontrada Pa!</h1>
    </div>
  )
}

export default Page404
