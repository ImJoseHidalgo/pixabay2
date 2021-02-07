import React, { useState } from 'react';
import { Buscador } from '../Buscador/Buscador';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../../actions/auth';
import iconUser from '../../../icons/icon-user.png';
import logo from '../../../icons/logo-Pixabay.png';
import arrow from '../../../icons/arrow.svg';
import { HeaderLogin, SearchComponent, HeaderHSearch, LogoImg } from "./HomeSearch.styles";

export const HeaderHomeSearch = ({ handleSearch }) => {
  const { logged, photoURL, name } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [logoutButton, setLogoutButton] = useState(false);
  
  const handleLogout = () => {
    dispatch(startLogout());
  }
  const handleLogoutButton = () => {
    // (logoutButton) ? setLogoutButton(false) : setLogoutButton(true);
    setLogoutButton(!logoutButton);
  }

  return (
    <HeaderHSearch>
      <nav>
        <LogoImg src={logo} alt='logo' />
        {!logged
          ? <HeaderLogin>
              <Link to='/favorites'><h2 className='favorites'>Favoritos</h2></Link>
              <Link to='/login'><h2 className='favorites'>Login</h2></Link>
            </HeaderLogin>
          : <HeaderLogin>
              <Link to='/favorites'><h2 className='favorites'>Favoritos</h2></Link>
              <div className="user" onClick={handleLogoutButton}>
                <img src={arrow} alt='arrow' />
                <img src={photoURL || iconUser} alt={name} />
              </div>
              {logoutButton && <div className="logout__button animate__animated animate__fadeIn" >
                <h3>{name}</h3>
                <h2 onClick={handleLogout} >Cerrar Sesión</h2>
              </div>}
            </HeaderLogin>
        }
      </nav>
      <SearchComponent>
        <Buscador handleSearch={handleSearch} />
      </SearchComponent>
    </HeaderHSearch>
  )
}
export default HeaderHomeSearch;