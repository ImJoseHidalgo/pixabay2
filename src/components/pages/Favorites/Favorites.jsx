import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HeaderSearch from '../../ui/HeaderSearch';

const Favorites = () => {
  const { logged } = useSelector(state => state.auth)

  return (
    <>
      <HeaderSearch />
      {logged
        ? <div className="favorites">
            <h1>Estos Son Tus Favoritos</h1>
          </div>
        : <div className="favorites__logout">
            <h1>Lo siento debes iniciar sesión para ver o añadir tus imagenes favoritas :(</h1>
            <Link to='/login'>Iniciar Sesión</Link>
          </div>
      }
    </>
  )
}

export default Favorites;