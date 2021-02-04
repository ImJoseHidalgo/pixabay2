import React from 'react';
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
        <p>The Page you're looking for isn't here.</p>
      </Container>
    </div >
  )
}

export default Page404
