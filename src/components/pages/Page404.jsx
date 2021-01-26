import React, { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import HeaderSearch from '../HeaderSearch';
import './page404/styles.css';

const Page404 = () => {
  const [inpKeyword, setInpKeyword] = useState('');
  const [path, pushLocation] = useLocation();

  const handleSearch = (inpKeyword) => {
    setInpKeyword(inpKeyword);
    localStorage.setItem('page', 1);
    pushLocation(`/search/${inpKeyword}/1`);
  }

  // useEffect(() => {
  //   window.onload = function () {
  //     document.querySelector('.cont_principal').className = "cont_principal cont_error_active";
  //   }
  // }, [path]);

  return (
    <div>
      <HeaderSearch handleSearch={handleSearch} />
      <div className="p404__container">
        <div class="cont_principal  cont_error_active">
          <div class="cont_error">
            <h1>Oops</h1>
            <p>The Page you're looking for isn't here.</p>
          </div>
          <div class="cont_aura_1"></div>
          <div class="cont_aura_2"></div>
        </div>
      </div>
    </div >
  )
}

export default Page404
