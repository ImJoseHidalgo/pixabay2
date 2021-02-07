import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSearch from '../../ui/Search/HeaderSearch';
import { Container } from './Page404.styles';

const Page404 = ({ history }) => {

  const handleSearch = (inpKeyword) => {
    localStorage.setItem('page', 1);
    history.push(`/search/${inpKeyword}/1`);
  }

  return (
    <div>
      <HeaderSearch handleSearch={handleSearch} />
      <Container>
        <h1>Oops</h1>
        <p>La página que estás buscando no exíste</p>
        <Link to='/'>Volver al inicio</Link>
      </Container>
    </div >
  )
}

export default Page404
