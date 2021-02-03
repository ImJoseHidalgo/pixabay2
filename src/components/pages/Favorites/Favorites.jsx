import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startDeleting } from '../../../actions/imgs';
import DataGridItem from '../../ui/DataGridItem';
import HeaderSearch from '../../ui/HeaderSearch';

const Favorites = () => {
  const dispatch = useDispatch();

  const { logged } = useSelector(state => state.auth);
  let { imgs, isEmpty } = useSelector(state => state.imgs);

  (imgs.length !== 0) ? isEmpty = false : isEmpty = true;
  
  return (
    <>
      <HeaderSearch />
      {(logged)
        ? ((isEmpty) 
        ? ( <div className="favorites">
                <h1>Aun no tienes favoritos</h1>
              </div>)
            // : (imgs.map( img => (<img onClick={()=>dispatch(startDeleting(img.id))} key={img.id} src={img.shortImg} alt='ad' />)))
            : <><h5>Estas son tus imagenes Favoritas!</h5>
              <section className='imgs-container'>
                {imgs.map((img) => <DataGridItem key={img.id} path={img.path} tag='img' img={img.shortImg} />)}
              </section></>
          )
        : ( <div className="favorites__logout">
            <h1>Lo siento debes iniciar sesión para ver o guardar tus imagenes favoritas :(</h1>
            <Link to='/login'>Iniciar Sesión</Link>
          </div> )
      }
    </>
  )
}

export default Favorites;