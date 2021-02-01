import React from 'react';
import { Buscador } from './Buscador';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import iconUser from '../../icons/icon-user.png';
import logo from '../../icons/logo-Pixabay.png';
import arrow from '../../icons/arrow.svg';

export const HeaderHomeSearch = ({ handleSearch }) => {
  const { logged } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(startLogout());
  }

  return (
    <header className='header-home-search'>
      <nav>
        <img src={logo} alt='logo' />
        {!logged
          ? <div className="login">
              <Link to='/favorites'><h2 className='favorites'>Favoritos</h2></Link>
              <Link to='/login'><h2 className='favorites'>Login</h2></Link>
            </div>
          : <div className="login">
              <Link to='/favorites'><h2 className='favorites'>Favoritos</h2></Link>
              <div className="user" onClick={handleLogout}>
                <img src={arrow} alt='arrow' />
                <img src={iconUser} alt='user' />
              </div>
            </div>
        }
      </nav>
      <div className='buscador'>
        <Buscador handleSearch={handleSearch} />
      </div>
    </header>
  )
}
export default HeaderHomeSearch;