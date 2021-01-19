import React from 'react'
import { Link } from 'wouter';

const Landing = () => {
  const keyword = localStorage.getItem('lastKeyword');
  const link = `/search/${keyword}/1`;

  return (
    <main>
      <div className="title">
        <h1>Impresionantes fotos de stock gratis para descargar</h1>
        <h2>Más de 1,9 millones de fotos de stock libres de derechos compartidas por una comunidad talentosa</h2>
      </div>
      <h2>Última Busqueda: <Link to={link} ><span>{keyword}</span></Link></h2>
    </main>
  )
}

export default Landing;