import React, { useEffect, useState } from 'react';
import GetImgData from '../../../services/GetImgData';
import iconUser from '../../../icons/icon-user.png';
import likeIcon from '../../../icons/corazon.svg';
import { Link, useParams } from 'react-router-dom';
import HeaderSearch from '../../ui/HeaderSearch';
import Loading from '../../ui/Loading';
import { startDeleting, startNewFavorite } from '../../../actions/imgs';
import { useDispatch, useSelector } from 'react-redux';
import { loadImgs } from '../../../helpers/loadImgs';

const DetailScreen = ({ history }) => {
  const path = history.location.pathname;
  const dispatch = useDispatch();

  const { uid, logged } = useSelector(state => state.auth);

  const { id } = useParams();
  const { loading, img }= GetImgData(id);

  const { tags, webformatURL: shortImg, largeImageURL: largeImg, views, downloads, favorites, user, userImageURL: userImg } = img;
  const handleSearch = (inpKeyword) => {
    localStorage.setItem('page', 1);
    history.push(`/search/${inpKeyword}/1`);
  };

  window.scrollTo(0, 0);
  
  let tag;
  (tags) && (tag = tags?.split(','));

  // const AddFavorite = () => {
  //   if(logged) {
  //     dispatch(startNewFavorite(path, shortImg));
  //   } else {
  //     alert('Debes iniciar sesion para guardar imagenes')
  //   }
  // }

  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddFavorite = async() => {
    if(logged) {
      const nose = await loadImgs(uid);
      const a = nose.find(img => img.path === path) || [];
      if(a.length === 0) {
        dispatch(startNewFavorite(path, shortImg));
        setIsFavorite(true);
      }
    } else {
      alert('Debes iniciar sesion para guardar imagenes')
    }
  }

  const isFavIcon = async() =>{
    const nose = await loadImgs(uid);
    const a = nose.find(img => img.path === path) || [];
    if(a.length !== 0) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }
  useEffect(() => {
    isFavIcon()
  }, [isFavorite])

  const handleRemoveFavorite = async() => {
    const nose = await loadImgs(uid);
    const a = nose.find(img => img.path === path) || [];
    dispatch(startDeleting(a.id))
    setIsFavorite(false)
  }

  return (
    <>
      <HeaderSearch handleSearch={handleSearch} />
      <div className="image-detail">
        <div className="left animate__animated animate__fadeIn">
          {loading 
            ? <Loading />
            : <img src={shortImg} alt={tags} />
          }
          {/* <img src={largeImg} alt={tags} /> */}
          {/* {isFavorite
            ? <div className="add-favorite" onClick={handleRemoveFavorite}>
                <h2>Quitar de favoritos</h2>
                <img src={likeIcon} alt='like icon' />
              </div>
            : <div className="add-favorite" onClick={handleAddFavorite}>
                <h2>Añadir a favoritos</h2>
                <img src={likeIcon} alt='like icon' />
              </div>
          } */}
        </div>
        <div className="right">
          <div className="image-user">
            <img src={userImg || iconUser} alt={user} />
            <div className="image-user-name">
              <h3>Autor:</h3>
              <h2>{user}</h2>
            </div>
          </div>
          <div className="licence">
            <h2>Licencia por Pixabay</h2>
            <h2>Libre para uso comercial</h2>
          </div>
          <div className="botones-descarga">
          {isFavorite
            ? <div className="add-favorite" onClick={handleRemoveFavorite}>
                <h2>Quitar de favoritos</h2>
                <img src={likeIcon} alt='like icon' />
              </div>
            : <div className="add-favorite" onClick={handleAddFavorite}>
                <h2>Añadir a favoritos</h2>
                <img src={likeIcon} alt='like icon' />
              </div>
          }
            <a href={largeImg + '?attachment'} >Descargar Imagen HD</a>
          </div>
          <div className="image-data">
            <h2>Detalles de la imagen</h2>
            <h2>Vistas: <span>{views}</span></h2>
            <h2>Categorias: <span>{tag?.map(el => {
                                    return <Link to={`/search/${el.trim()}/1`} key={el}>{el},</Link>
                                  })}</span></h2>
            <h2>favoritos: <span>{favorites}</span></h2>
            <h2>Descargas: <span>{downloads}</span></h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailScreen;
