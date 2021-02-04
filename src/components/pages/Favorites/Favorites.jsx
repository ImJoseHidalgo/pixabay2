import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DataGridItem from '../../ui/DataGridItem/DataGridItem';
import HeaderSearch from '../../ui/Search/HeaderSearch';
import { FavoritesFalseStyles, FavoritesTrueStyles, GridStyles, FavoritesLogin } from './Favorites.styles';

const Favorites = () => {

  const { logged } = useSelector(state => state.auth);
  let { imgs, isEmpty } = useSelector(state => state.imgs);

  (imgs.length !== 0) ? isEmpty = false : isEmpty = true;
  
  return (
    <>
      <HeaderSearch />
      {(logged)
        ? ((isEmpty) 
        ? ( <FavoritesFalseStyles>
              <h1>Aun no tienes favoritos</h1>
            </FavoritesFalseStyles>)
            // : (imgs.map( img => (<img onClick={()=>dispatch(startDeleting(img.id))} key={img.id} src={img.shortImg} alt='ad' />)))
            : <FavoritesTrueStyles>
                <h5>Estas son tus imagenes Favoritas!</h5>
                <GridStyles className='imgs-container'>
                  {imgs.map((img) => <DataGridItem key={img.id} path={img.path} tag='img' img={img.shortImg} />)}
                </GridStyles>
              </FavoritesTrueStyles>
          )
        : ( <FavoritesLogin>
            <h1>Lo siento debes iniciar sesión para ver o guardar tus imagenes favoritas :(</h1>
            <Link to='/login'>Iniciar Sesión</Link>
          </FavoritesLogin> )
      }
    </>
  )
}

export default Favorites;