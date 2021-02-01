import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Buscador } from './Buscador';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import iconUser from '../../icons/icon-user.png';
import logo from '../../icons/logo-Pixabay.png';
import arrow from '../../icons/arrow.svg';

export const HeaderSearch = ({ handleSearch }) => {
  const { logged } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(startLogout());
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
            <div className="user" onClick={handleLogout}>
              <img src={arrow} alt='arrow' />
              <img src={iconUser} alt='user' />
            </div>
          </div>
      }
    </header>
  )
}
export default HeaderSearch;