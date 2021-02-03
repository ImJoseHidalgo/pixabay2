import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Buscador } from './Buscador';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import iconUser from '../../icons/icon-user.png';
import logo from '../../icons/logo-Pixabay.png';
import arrow from '../../icons/arrow.svg';

export const HeaderSearch = ({ handleSearch }) => {
  const { logged, photoURL, name } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [logoutButton, setLogoutButton] = useState(false);
  
  const handleLogout = () => {
    dispatch(startLogout());
  }
  const handleLogoutButton = () => {
    (logoutButton) ? setLogoutButton(false) : setLogoutButton(true);
  }
  
  window.scrollTo(0, 0);
  return (
    <header className='header-search'>
      <Link to='/' ><img src={logo} alt='logo' /></Link>
      <Buscador handleSearch={handleSearch} />
      {!logged
        ? <div className="login">
            <NavLink to='/favorites' activeClassName='active'><h2 className='favorites'>Favoritos</h2></NavLink>
            <Link to='/login'><h2 className='favorites'>Login</h2></Link>
          </div>
        : <div className="login">
            <NavLink to='/favorites' activeClassName='active'><h2 className='favorites'>Favoritos</h2></NavLink>
            <div className="user" onClick={handleLogoutButton}>
              <img src={arrow} alt='arrow' />
              <img src={photoURL || iconUser} alt={name} />
            </div>
            {logoutButton && <div className="logout__button" onClick={handleLogout}>
              <h2>Cerrar Sesión</h2>
            </div>}
          </div>
      }
    </header>
  )
}
export default HeaderSearch;