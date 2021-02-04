import React, { useEffect, useState } from 'react';
import GetImgData from '../../../services/GetImgData';
import iconUser from '../../../icons/icon-user.png';
import likeIcon from '../../../icons/corazon.svg';
import { Link, useParams } from 'react-router-dom';
import HeaderSearch from '../../ui/Search/HeaderSearch';
import Loading from '../../ui/Loading/Loading';
import { startDeleting, startNewFavorite } from '../../../actions/imgs';
import { useDispatch, useSelector } from 'react-redux';
import { loadImgs } from '../../../helpers/loadImgs';
import { DetailStyles, LeftStyles, RightStyles, UserImgStyles, LicenseStyles, BotonesStyles, AddFavoriteStyles, ImageDataStyles } from './DetailScreen.styles';

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
      <DetailStyles>
        <LeftStyles className="animate__animated animate__fadeIn">
          {loading 
            ? <Loading />
            : <img src={shortImg} alt={tags} />
          }
        </LeftStyles>
        <RightStyles>
          <UserImgStyles className="animate__animated animate__fadeIn">
            <img src={userImg || iconUser} alt={user} />
            <div className="image-user-name">
              <h3>Autor:</h3>
              <h2>{user}</h2>
            </div>
          </UserImgStyles>
          <LicenseStyles>
            <h2>Licencia por Pixabay</h2>
            <h2>Libre para uso comercial</h2>
          </LicenseStyles>
          <BotonesStyles className="animate__animated animate__fadeIn">
          {isFavorite
            ? <AddFavoriteStyles onClick={handleRemoveFavorite}>
                <h2>Quitar de favoritos</h2>
                <img src={likeIcon} alt='like icon' />
              </AddFavoriteStyles>
            : <AddFavoriteStyles onClick={handleAddFavorite}>
                <h2>Añadir a favoritos</h2>
                <img src={likeIcon} alt='like icon' />
              </AddFavoriteStyles>
          }
            <a href={largeImg + '?attachment'} >Descargar Imagen HD</a>
          </BotonesStyles>
          <ImageDataStyles>
            <h2>Detalles de la imagen</h2>
            <h2>Vistas: <span>{views}</span></h2>
            <h2>Categorias: <span>{tag?.map(el => {
                                    return <Link to={`/search/${el.trim()}/1`} key={el}>{el},</Link>
                                  })}</span></h2>
            <h2>favoritos: <span>{favorites}</span></h2>
            <h2>Descargas: <span>{downloads}</span></h2>
          </ImageDataStyles>
        </RightStyles>
      </DetailStyles>
    </>
  )
}

export default DetailScreen;
