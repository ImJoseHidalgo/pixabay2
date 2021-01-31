import React from 'react';
import HeaderSearch from '../../ui/HeaderSearch';
import './styles.css';

const Page404 = ({ history }) => {

  const handleSearch = (inpKeyword) => {
    localStorage.setItem('page', 1);
    history.push(`/search/${inpKeyword}/1`);
  }

  return (
    <div>
      <HeaderSearch handleSearch={handleSearch} />
      <div className="p404__container">
        <div className="cont_principal  cont_error_active">
          <div className="cont_error">
            <h1>Oops</h1>
            <p>The Page you're looking for isn't here.</p>
          </div>
          <div className="cont_aura_1"></div>
          <div className="cont_aura_2"></div>
        </div>
      </div>
    </div >
  )
}

export default Page404
