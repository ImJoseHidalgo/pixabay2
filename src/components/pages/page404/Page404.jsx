import React, { useEffect, useState } from 'react';
// import { useLocation } from 'wouter'
import HeaderHomeSearch from '../../ui/HeaderHomeSearch';
import './styles.css';

const Page404 = ({ history }) => {
  const [inpKeyword, setInpKeyword] = useState('');

  const handleSearch = (inpKeyword) => {
    setInpKeyword(inpKeyword);
    localStorage.setItem('page', 1);
    history.push(`/search/${inpKeyword}/1`);
  }

  return (
    <div>
      <HeaderHomeSearch handleSearch={handleSearch} />
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
