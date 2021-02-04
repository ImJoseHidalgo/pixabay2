import React from 'react'
import { Link } from 'react-router-dom';
import { Main, Title } from "./Landing.styles";

const Landing = () => {
  const keyword = localStorage.getItem('lastKeyword');
  const link = `/search/${keyword}/1`;

  return (
    <Main>
      <Title>
        <h1>Impresionantes fotos de stock gratis para descargar</h1>
        <h2>Más de 1,9 millones de fotos de stock libres de derechos compartidas por una comunidad talentosa</h2>
      </Title>
      <h2>Última Busqueda: <Link to={link} ><span>{decodeURI(keyword)}</span></Link></h2>
    </Main>
  )
}

export default Landing;